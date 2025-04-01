import { fetch } from "@tauri-apps/plugin-http";
import { API } from "../assets/default.json";

interface ClientConfig {
  baseURL: string;
  headers?: Record<string, string>;
  connectTimeout?: number;
  maxRedirections?: number;
  requestInterceptors?: ((config: RequestConfig) => RequestConfig)[];
  responseInterceptors?: ((response: Response) => Response)[];
}

export interface RequestConfig {
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  url: string;
  data?: any;
  headers?: Record<string, string>;
  outurl?: boolean;
}

class HttpClient {
  private baseURL: string;
  private headers: Record<string, string>;
  private connectTimeout: number;
  private maxRedirections: number;
  private requestInterceptors: ((config: RequestConfig) => RequestConfig)[];
  private responseInterceptors: ((response: Response) => Response)[];

  constructor(config: ClientConfig) {
    this.baseURL = config.baseURL;
    this.headers = config.headers || {};
    this.connectTimeout = config.connectTimeout || 5000;
    this.maxRedirections = config.maxRedirections || 5;
    this.requestInterceptors = config.requestInterceptors || [];
    this.responseInterceptors = config.responseInterceptors || [];
  }
  public addRequestInterceptor(
    interceptor: (config: RequestConfig) => RequestConfig,
  ) {
    this.requestInterceptors.push(interceptor);
    return this;
  }
  public addResponseInterceptor(interceptor: (response: Response) => Response) {
    this.responseInterceptors.push(interceptor);
    return this;
  }
  public setHeader(key: string, value: string) {
    this.headers[key] = value;
    return this;
  }
  public async request(
    config: RequestConfig = {
      method: "GET",
      url: "",
      headers: {},
    },
  ): Promise<any> {
    try {
      let url: string;
      if (config.outurl) {
        url = config.url;
      } else {
        url = this.baseURL + config.url;
      }
      this.setHeader("Content-Type", "application/json");
      config.headers = this.headers;
      this.requestInterceptors.forEach((interceptor) => {
        config = interceptor(config);
      });
      let response = await fetch(url, {
        method: config.method,
        connectTimeout: this.connectTimeout,
        maxRedirections: this.maxRedirections,
        body: config.data ? JSON.stringify(config.data) : null,
      });
      if (!response.ok) {
        throw new Error(
          `Request failed with status ${response.status}, ${response.statusText}, ${response.body}, ${response.headers}, ${response.url}`,
        );
      }
      this.responseInterceptors.forEach((interceptor) => {
        response = interceptor(response);
      });
      return response.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
const GlobalHttp = new HttpClient({
  baseURL: API.BASEURL,
});

export { GlobalHttp };
