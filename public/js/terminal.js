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
const helpText = "[[;violet;]\nThe following commands are used in this simulation:\n\n* help\nhint\ncat\nquestion\nexit\n\n]"


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
      this.echo('Sabes la palabra que abre las puertas\n');
    },
    
    cat: function() {
        this.echo($('<img src="https://placekitten.com/300/300\n">'));
    },
    

    hint: function () {
      
        this.echo("\n[[;yellow;]### Si usas la palabra magica* te llevas 1000pts ###]\n");
      
          this.echo("\n[[;limegreen;]### (*) Capaz que si usas windows no la sabes, pues es solo para Mac y Linux pero funciona igual aca ###]\n");
      
    },
    simpson: function () {
      
      this.echo("\n[[;pink;]### El siguiente link te lleva a un desafio de los simpsons ###]\n");
    
        this.echo("\n[[;skyblue;]### (*) Capaz que si usas windows no la sabes, pues es solo para Mac y Linux pero funciona igual aca ###]\n");
    
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
