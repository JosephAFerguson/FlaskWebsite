from flask import Flask, redirect, url_for, render_template

app = Flask(__name__)

@app.route("/")
@app.route("/index", methods= ['GET', 'POST'])
def index():
    return render_template("index.html")

@app.route("/calc1", methods= ['GET', 'POST'])
def calc1():
    return render_template("calc1.html")

@app.route("/calc2", methods= ['GET', 'POST'])
def calc2():
    return render_template("calc2.html")

@app.route("/calc3", methods= ['GET', 'POST'])
def calc3():
    return render_template("calc3.html")

if __name__ == "__main__":
    app.run(debug= True )
