from fastapi import FastAPI
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from pathlib import Path

app = FastAPI()

# Serve static files
app.mount("/static", StaticFiles(directory=Path("static")), name="static")

# Route for the index page
@app.get("/", response_class=HTMLResponse)
async def index():
    html_file = Path("file1.html").read_text(encoding="utf-8")
    return HTMLResponse(content=html_file)

# Run the server with SSL
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(
        app,
        host="0.0.0.0",
        port=80,
        ssl_certfile="cert.pem",  # Path to your SSL certificate
        ssl_keyfile="key.pem"     # Path to your private key
    )
