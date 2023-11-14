var divButtons = document.querySelectorAll("[data-buttons]")
var optionsLetters = document.querySelectorAll("[data-buttons] p")

var awaitSubmitAnswer = 800
var level = 1
var round = 0
var endRounds = 3
var helpsLevels = [true, true, true]
var responseValue = false
var dic = {"a": 0,"b": 1,"c": 2,"d": 3}


var stringCategory = ''
var categoryRound = document.getElementById('category-name')
var aside = document.getElementById('side-ask-and-answer')
var label_ask = document.getElementById('label-ask')
var label_a = document.getElementById('label-answer-a')
var label_b = document.getElementById('label-answer-b')
var label_c = document.getElementById('label-answer-c')
var label_d = document.getElementById('label-answer-d')
var label_level = document.getElementById('label-level')
var label_round = document.getElementById('label-round')
var correct = "x".toLowerCase()

var winnRound = document.getElementById('page-winner-round')
var winnLevel = document.getElementById('page-winner-level')
var winnLevels = document.getElementById('page-winner-levels')
var looser = document.getElementById('page-looser')
