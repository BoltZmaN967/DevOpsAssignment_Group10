import sqlite3


def get_connection():
    connection = sqlite3.connect("users.db")
    return connection

######################################
# import sqlite3


# def get_connection():
#     connection = sqlite3.connect("users.db")
#     return connection


# connection = get_connection()
# cursor = connection.cursor()

# cursor.execute("SELECT * FROM users")

# users = cursor.fetchall()

# print("USERS IN DATABASE:")
# print(users)

# connection.close()

########################################

# import sqlite3

# connection = sqlite3.connect("users.db")

# cursor = connection.cursor()

# cursor.execute("""
# CREATE TABLE IF NOT EXISTS users (
#     id INTEGER PRIMARY KEY AUTOINCREMENT,
#     email TEXT UNIQUE NOT NULL,
#     password TEXT NOT NULL
# )
# """)

# cursor.execute(
#     "INSERT INTO users (email, password) VALUES (?, ?)",
#     ("test@gmail.com", "hello123")
# )
# #
# cursor.execute("SELECT * FROM users")

# users = cursor.fetchall()

# print(users)
# #
# connection.commit()


# connection.close()