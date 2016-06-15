from flask import Flask, render_template, url_for, request
app = Flask(__name__)

@app.route('/')
def index():
	return render_template('index.html')

@app.route('/acrobatics', methods=['GET'])
def acrobatics():
	if request.method == 'GET':
		return render_template('acrobatics.html')

if __name__ == '__main__':
	app.run(debug=True)
