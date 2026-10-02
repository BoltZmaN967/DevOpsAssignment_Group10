from fastapi import FastAPI, Request, Form
from fastapi.templating import Jinja2Templates

from database import get_connection

app = FastAPI()

templates = Jinja2Templates(directory="templates")


@app.get("/")
def login_page(request: Request):
    return templates.TemplateResponse(
        request=request,
        name="login.html"
    )


@app.get("/signup")
def signup_page(request: Request):
    return templates.TemplateResponse(
        request=request,
        name="signup.html"
    )    

@app.post("/login")
def login(
    request: Request,
    email: str = Form(...),
    password: str = Form(...)
):

    connection = get_connection()
    cursor = connection.cursor()

    cursor.execute(
        "SELECT * FROM users WHERE email = ?",
        (email,)
    )

    user = cursor.fetchone()

    connection.close()

    print("EMAIL RECEIVED:", email)
    print("USER FOUND:", user)

    if user is None:
         return templates.TemplateResponse(
        request=request,
        name="user_not_found.html"
    )

    if user[2] != password:
        return {
            "message": "WRONG PASSWORD"
        }

    return templates.TemplateResponse(
    request=request,
    name="success.html"
)

@app.post("/signup")
def signup(
    request: Request,
    email: str = Form(...),
    password: str = Form(...)
):

    connection = get_connection()
    cursor = connection.cursor()

    cursor.execute(
        "INSERT INTO users (email, password) VALUES (?, ?)",
        (email, password)
    )

    connection.commit()

    connection.close()

    return templates.TemplateResponse(
        request=request,
        name="login.html"
    )