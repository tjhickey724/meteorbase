Router.configure({
	// this is the name of your layout template
	layoutTemplate: 'layout2',
});

// here is how you specify the home page template
Router.route('/', {name: 'home'});

// add more templates here if you want them to be reachable
Router.route('about');
<<<<<<< HEAD
<<<<<<< HEAD
Router.route('signup')
=======
Router.route('team'); 
>>>>>>> origin/master
=======

>>>>>>> parent of b0a1e7a... I just changed the about and home a bit
Router.route('listings');
Router.route('myprofile');
Router.route('viewProfile/:_id',
   {name:"viewProfile",
    data:function(){
        const zz = QuizResults.findOne(this.params._id);
	console.dir(this.params._id);
	console.dir(zz);
	return zz;
}}
);

Router.route('quiz');
Router.route('login'); 
/*
// here is how to create a link to just one document
// in your collection
Router.route('pokemonData/:_id',
{name:"pokemonData",
 data: function(){
	 const c = Pokedex.findOne(this.params._id);
	 return c;
 }});
 */
