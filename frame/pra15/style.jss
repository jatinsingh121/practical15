@import url('https://fonts.googleapis.com/css?family=Muli&display=swap');
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,500&display=swap');
* {
    box-sizing: border-box;
}

body {
    background-color: #b99bc5;
    font-family: 'Open Sans', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    margin: 0;
}

.container {
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    overflow: hidden;
    width: 400px;
    max-width: 100%;
}

.header {
    border-bottom: 1px solid #f0f0f0;
    background-color: #f7f7f7;
    padding: 20px 40px;
    text-align: center;
}

.header h2 {
    margin: 0;
}

.form {
    padding: 30px 40px;
}

.form-control {
    margin-bottom: 10px;
    padding-bottom: 20px;
    position: relative;
}

.form-control label {
    display: inline-block;
    margin-bottom: 5px;
}

.form-control input {
    border: 2px solid #f0f0f0;
    border-radius: 4px;
    display: block;
    font-family: inherit;
    font-size: 14px;
    padding: 10px;
    width: 100%;
}

.form-control input:focus {
    outline: 0;
    border-color: #777;
}

.form-control.success input {
    border-color: #2ecc71;
}

.form-control.error input {
    border-color: #e74c3c;
}

.form-control i {
    visibility: hidden;
    position: absolute;
    top: 40px;
    right: 10px;
}

.form-control.success i.fa-check-circle {
    color: #2ecc71;
    visibility: visible;
}

.form-control.error i.fa-exclamation-circle {
    color: #e74c3c;
    visibility: visible;
}

.form-control small {
    color: #e74c3c;
    position: absolute;
    bottom: 0;
    left: 0;
    visibility: hidden;
}

.form-control.error small {
    visibility: visible;
}

.form button {
    background-color: #e0ee63;
    border: 2px solid #8e44ad;
    border-radius: 4px;
    color: #fff;
    display: block;
    font-family: inherit;
    font-size: 16px;
    padding: 10px;
    margin-top: 20px;
    width: 100%;
}