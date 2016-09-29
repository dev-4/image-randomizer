var imgArray = ["art.png", "aura.png", "big_clouds.png", "bird.png", 
"black_circle.png", "blue_circle.png", "blur.png", "broken_map.png", 
"clouds.png", "cloudy.png", "colorful_lines.png", "cycle.png", "drawing.png", 
"frames.png", "light.png", "love.png", "map.png", "metro.png", "milky_way.png", 
"mountains.png", "mountain_circles.png", "old_paper.png", "planet.png", "preview.png", 
"round_art.png", "sky.png", "spooky_skeleton.png", "triangles.png", "world.png"];

var textArray = ["'Bird is the word'", "'It's the little things that count'"];

function displayImg(){
    var num = Math.floor(Math.random() * 29); // 0...6
    document.canvas.src = 'img/'+ imgArray[num];
    document.querySelector(".text").innerText = textArray[num];
}
