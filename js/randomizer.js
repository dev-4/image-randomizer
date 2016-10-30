// Main Function
function displayImg(showText){
  var num = Math.floor(Math.random() * 29);
  document.canvas.src = 'img/arrays/'+ imgArray[num];
  if( showText ) {
  	document.querySelector(".text").innerText = textArray[num];
	  document.querySelector(".prize").innerText = prizeArray[num];
 	}
}
// Flash Function
function flashImg(i) {
	if( typeof i === "undefined" ) i = 1;
	setTimeout(function(){
		if( i > 10 ) {
			displayImg(true);
		} else {
			displayImg();
			flashImg(i+1);
		}
	},40*i);
}
// Image Arrays [0-29]
var imgArray = [
	"art.png", "aura.png", "big_clouds.png", "bird.png", "black_circle.png",
	"blue_circle.png", "blur.png", "broken_map.png", "clouds.png", "cloudy.png",
	"colorful_lines.png", "cycle.png", "drawing.png", "frames.png", "light.png",
	"love.png", "map.png", "metro.png", "milky_way.png", "mountains.png",
	"mountain_circles.png", "old_paper.png", "planet.png", "preview.png", "round_art.png",
	"sky.png", "spooky_skeleton.png", "triangles.png", "world.png"];
// Text Arrays [0-29]
var textArray = [
	"'When I die, I want to go peacefully like my grandfather did–in his sleep. Not yelling and screaming like the passengers in his car.' - Bob Monkhouse",
	"'I have six locks on my door all in a row. When I go out, I lock every other one. I figure no matter how long somebody stands there picking the locks, they are always locking three.' - Elayne Boosler",
	"'Always borrow money from a pessimist. He won’t expect it back.' -Oscar Wilde",
	"'The scientific theory I like best is that the rings of Saturn are composed entirely of lost airline luggage.' - Mark Russell",
	"'Friendship is like peeing on yourself: everyone can see it, but only you get the warm feeling that it brings.' - Robert Bloch",
	"'First the doctor told me the good news: I was going to have a disease named after me.' -Steve Martin",
	"'A successful man is one who makes more money than his wife can spend. A successful woman is one who can find such a man.' - Lana Turner",
	"'My therapist told me the way to achieve true inner peace is to finish what I start. So far I’ve finished two bags of M&Ms and a chocolate cake. I feel better already.' - Dave Barry",
	"'Knowledge is knowing a tomato is a fruit; wisdom is not putting it in a fruit salad.' - Miles Kington",
	"'I love deadlines. I like the whooshing sound they make as they fly by. -Douglas Adams'",
	"'By all means, marry. If you get a good wife, you’ll become happy; if you get a bad one, you’ll become a philosopher.' - Socrates",
	"'I asked God for a bike, but I know God doesn’t work that way. So I stole a bike and asked for forgiveness.' - Emo Philips",
	"'Do not argue with an idiot. He will drag you down to his level and beat you with experience.' - Greg King",
	"'The only mystery in life is why the kamikaze pilots wore helmets. -Al Mcguire'",
	"'Going to church doesn’t make you a Christian any more than standing in a garage makes you a car.' - Billy Sunday",
	"'A bargain is something you don’t need at a price you can’t resist.' - Franklin Jones",
	"'If at first you don’t succeed... so much for skydiving.' - Henny Youngman",
	"'If you steal from one author, it’s plagiarism; if you steal from many, it’s research.' - Wilson Mizner",
	"'If you think nobody cares if you’re alive, try missing a couple of car payments.' - Flip Wilson",
	"'My mother never saw the irony in calling me a son-of-a-bitch.' - Jack Nicholson",
	"'God gave us our relatives; thank God we can choose our friends.' - Ethel Mumford",
	"'A stockbroker urged me to buy a stock that would triple its value every year. I told him, “At my age, I don’t even buy green bananas.”' - Claude Pepper",
	"'Patience is something you admire in the driver behind you, but not in one ahead.' - Bill Mcglashen",
	"'I couldn’t repair your brakes, so I made your horn louder.' - Steven Wright",
	"'A diplomat is someone who can tell you to go to hell in such a way that you will look forward to the trip.' - Caskie Stinnett",
	"'By the time a man realizes that his father was right, he has a son who thinks he’s wrong.' - Charles Wadsworth",
	"'We’ve all heard that a million monkeys banging on a million typewriters will eventually reproduce the entire works of Shakespeare. Now, thanks to the Internet, we know this is not true.' - Rober Wilensky",
	"'If evolution really works, how come mothers only have two hands?' - Milton Berle",
	"'Women who seek to be equal with men lack ambition.' - Marylin Monroe"];
// Prize Arrays [0-29]
var prizeArray = [
	"10 points", "20 points", "10 points", "50 points", "5 points", "5 points", "100 points",
	"5 points", "10 points", "A toaster", "69 points", "5 points", "20 points", "50 points", "10 points", "5 points",
	"5 points", "5 points", "5 points", "10 points", "5 points", "50 points", "9 points", "5 points", "10 points", "5 points",
	"10 points", "5 points", "5 points"];
