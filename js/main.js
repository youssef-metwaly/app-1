

function randomtext () {

    var username = [" “You only live once, but if you do it right, once is enough.” <br/> -- Mae West  " , " “Be the change that you wish to see in the world.” <br/> --Mahatma Gandhi " , " “Always forgive your enemies; nothing annoys them so much.” <br/> -- Oscar Wilde"]
    

    var num = Math.floor ( Math.random() * username.length)

    document.getElementById('demo').innerHTML= (username[num])
}