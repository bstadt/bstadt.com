from flask import Flask, render_template, url_for, request
app = Flask(__name__)

@app.route('/', methods=['GET'])
def index():
	if request.method == 'GET':
		return render_template('index.html')
	else:
		return 400

if __name__ == '__main__':
	app.run(debug=True)
