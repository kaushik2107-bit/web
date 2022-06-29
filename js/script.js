function toggle() {
    var x = document.getElementById("menu-list");
    if (x.style.display ==  "block") {
        x.style.display = "none"; 
    } else {
        x.style.display = "block";
    }
    var y = document.getElementById("fa-times");
    var z = document.getElementById("fa-bars");
    if (y.style.display ==  "block") {
        y.style.display = "none"; 
        z.style.display = "block";
        
    } else {
        z.style.display = "none";
        y.style.display = "block";
        
    }   
}
function toggles() {
    var x = document.getElementById("menu-list");
    if (x.style.display ==  "block") {
        x.style.display = "none"; 
    } else {
        x.style.display = "block";
    }
    var y = document.getElementById("fa-times");
    var z = document.getElementById("fa-bars");
    if (y.style.display ==  "block") {
        y.style.display = "none"; 
        z.style.display = "block";
        
    } else {
        z.style.display = "none";
        y.style.display = "block";
        
    }   
}

// document.addEventListener('mouseup', function(e) {
//     var container = document.getElementById('menu-list');
//     if (!container.contains(e.target)) {
//         container.style.display = 'none';
//     }
//     var y = document.getElementById("fa-times");
//     var z = document.getElementById("fa-bars");

    
//     y.style.display = "none"; 
//     z.style.display = "block";
// });