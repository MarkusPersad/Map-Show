use std::env;

use  dotenv::dotenv;
use ipinfo::IpInfoConfig;
#[tauri::command]
pub async  fn get_location() -> String {
    dotenv().ok();
    let token = env::var("IPINFO_TOKEN").or_else(|err|{
        println!("IPINFO_TOKEN not set");
        Err(err)
    });
    let config = IpInfoConfig{
        token: Some(token.unwrap()),
        ..Default::default()
    };
    let mut  ipinfo = ipinfo::IpInfo::new(config).expect("Failed to create IpInfo instance");
    match ipinfo.lookup_self_v6().await {
        Ok(info) =>{
            return info.loc;
        }
        Err(err) =>{
            println!("Error: {}", err);
            return "".to_string();
        }
    }


}