use models::invokes;
// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
mod models;
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_http::init())
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![greet,invokes::get_location])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
