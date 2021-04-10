/* termWidth and termHeight should be either string "100%" or numeric px value (e.g. var termWidth = 800)
*/
var termWidth = window.innerWidth; 
var termHeight = window.innerHeight;
var startInstr = "Asi que te querias saltear hasta el final no?. [[;limegreen;]Para saber mas escribi: help]";
var termGreeting = "[[;orange;]Esto es una terminal]\n\n\n" + startInstr + "\n\n";
const startPrompt = "user@correCachetes $ "; 
const rootPrompt = "[[;red;]root@server # ]";
const logoutPrompt = "";
var isRoot = false;
const helpText = "[[;violet;]\nThe following commands are used in this simulation:\n\n* help\nruleta\ncat\nquestion\nexit\nhint\n\n]"


$("body").terminal(
  {
  //   name: function(name) {
  //     this.read('last name: ', last_name => {
  //        this.echo('Your name is ' + name + ' ' + last_name);
  //     });
  //  },
  
   question: function() {
    this.read('What is love? : ', respuesta => {

        if (respuesta == "baby don't hurt me,") {
            this.echo(`Don't hurt me, no more\n`);
        } else {
            this.echo('https://youtu.be/HEXWRTEbj1I\n');
        }
      });
    },
    sudo: function () {
      $(location).attr('href','/simpson');
      // this.echo('Sabes la palabra que abre las puertas\n');
    },
    
    cat: function() {
        this.echo($('<img src="https://placekitten.com/300/300\n">'));
    },
    

    hint: function () {
      
        this.echo("\n[[;yellow;]### Si usas la palabra magica* te llevas 1000pts ###]\n");
      
        this.echo("\n[[;palevioletred;](*) Capaz que si usas windows no la sabes, pues es solo para Mac y Linux pero funciona igual aca]\n");
        this.echo("\n[[;limegreen;]Si todavia no la cazaste escrbi 'maspistas']\n");
      
    },
    maspistas: function () {
      
      this.echo("\n[[;lightpink;]>>> ALT+115]\n");
      this.echo("\n[[;palevioletred;]>>> ALT+117]\n");
      this.echo("\n[[;mediumvioletred;]>>> ALT+100]\n");
      this.echo("\n[[;deeppink;]>>> ALT+111]\n");
    },
    ruleta: function () {
      
      this.echo("\n[[;turquoise;]## Escribi 'emoji' para obtener un emoji random]\n");
      this.echo("\n[[;peachpuff;]## Algunos tienen beneficios...]\n");
      this.echo("\n[[;tomato;]## Otros maldiciones! >_<]\n");
      this.echo("\n[[;sandybrown;]❗ Entre bajo su propio riesgo]\n");
      
    },
    emoji: function () {
     
      let emoji = ["✨", "🎃", "🍦", "🍉", "🍆", "🍕", "🤓", "👽", "👾", "💩", "💀", "🐿"]
      let i = Math.floor(Math.random()*emoji.length)

      if( emoji[i] == "💀" ){
        this.echo("\n[[;lightpink;]La muerte, significa cambio, transición]"+ emoji[i] +"\n")
        this.echo($('<img src="../../images/death_card.jpg" style="width: 300px">'));
          setTimeout(function(){ 
            alert("Transición? yo te voy a transicionar"); 
            $(location).attr('href','/gladiola');
          }, 3000);
      } else if ( emoji[i] == "🐿" ){
        this.echo("\n[[;lightpink;]Ohhhh La ardilla feliz]"+ emoji[i] +"\n")
        this.echo($('<img src="../../images/happy_squirrel.jpg"  style="width: 300px">'));
        setTimeout(function(){ 
            alert("Esa carta es algo maaaalo, maalo, maaalo"); 
            $(location).attr('href','/graciastotales');
          }, 3000);
      } else {

        // console.log(i);
        this.echo(emoji[i])
      }
    },

    //   exit: function () {
    //   if (isRoot == true) {
    //      isRoot = false;
    //       this.set_prompt(function (set_prompt) {
    //       set_prompt(startPrompt); 
    //   });
    //   } else {
    //      this.echo("logout");
    //       this.set_prompt(function (set_prompt) {
    //       set_prompt(logoutPrompt); 
    //   }); 
    //   }
    // },
    
    help: function () {
      this.echo(helpText);
    },
/*
    newCommand: function () {
      //function code
    },
*/
  },
    //end of commands
    //initial settings
  {
    greetings:
      termGreeting,
    prompt: startPrompt,
    width: termWidth,
    height: termHeight,
  }
);




// _---------------------------------------------------------------------------------------------
