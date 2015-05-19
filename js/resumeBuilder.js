// AJAX Online Resume, Udacity style
//// courtesy of the magnet

$(document).click(function(loc) { 
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);
});

var skills = ["design", "management", "programming", "dancing"];

var bio = {
	"name" : "Rob Rosario",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "310-698-9499",
		"email" : "robbysrosario@gmail.com",
		"github" : "RobbyRob81",
		"twitter" : "@RobbyRob",
		"location" : "Los Angeles",
	},
	"welcomeMessage" : "\"The user experience is the brand\"",
	"skills" : ["Bootstrap", "Javascript", "jQuery","Photoshop"],
	"bioPic" : "./images/Robby-R.png"
};

var education = {
	"schools" : [
	  {
		"name" : "UW-Rock",
		"city" : "Janesville, WI",
		"majors" : "Associates",
		"dates" : "2000 - 2002",
		"url" : "http://example.com",
		"location" : "Janesville"
	  }],
	  "online" : [{
	  	"title" : "Front-End Developer Certification",
		"school" : "Udacity",
		"dates" : "2014",
		"url" : "http://www.udacity.com"
	  }
	]
};

var work = {
	"jobs" : [{
		"employer" : " (IT/Infrastructure/Security; Consulation, Assessment, Design, Repair, Admin, Hosting, and R&D)",
		"title" : "Founder, Owner",
		"dates" : "August 2014 - Now",
		"description" : "Twixxies is the apex of technology and accessibility.  The mis",
		"location" : "Los Angeles"
	},{
		"employer" : "Michael Kors",
		"title" : "Brand Manager",
		"dates" : "June 2012 - August 2013",
		"description" : "Micheal Kors is America's leading designer who embodies todays working professional.  My role consisted of keeping the companies vision and branding on course by training staff, reaching projected goals, and maintain the high standards or our brand identity.",
		"location" : "Los Angeles"
	}]
};

var projects = {
	"projects" : [
	  {
	  	"title" : "Twixxies",
	  	"dates" : "January 2014 - now",
	  	"description" : "Twixxies is an app platform that offers app themes and hosting to businesses.",
	  	"images" : ["./images/Twix.png", "./images/hosting.png", "./images/indie-app.png"]
	  },
	],
};

projects.display = function(){
	for (project in projects.projects){
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);
		if (projects.projects[project].images.length > 0){
			for (image in projects.projects[project].images){
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

projects.display();

education.display = function(){
	for (school in education.schools) {
	$("#education").append(HTMLschoolStart );
		var formattedSchool = HTMLschoolName.replace("%data%", education.schools[school].name);
		$(".education-entry:last").append(formattedSchool);
		var formattedCity = HTMLschoolLocation.replace("%data%", education.schools[school].city);
		$(".education-entry:last").append(formattedCity);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);	
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
		$(".education-entry:last").append(formattedMajor);	
	}
	for (onlineschool in education.online) {
		$("#education").append(HTMLonlineClasses);
		$("#education").append(HTMLschoolStart );
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.online[onlineschool].title) + HTMLonlineSchool.replace("%data%", education.online[onlineschool].school);
		$(".education-entry:last").append(formattedOnlineTitle);
		/*var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.online[onlineschool].school);
		$(".education-entry:last").append(formattedOnlineSchool);*/
		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.online[onlineschool].dates);
		$(".education-entry:last").append(formattedOnlineDates);
		var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.online[onlineschool].url);
		$(".education-entry:last").append(formattedOnlineURL);
	}
}

education.display();		

// Top Header
var formattedName = HTMLheaderName.replace("%data%", bio["name"]);
var formattedRole = HTMLheaderRole.replace("%data%", bio["role"]);

//Header
var formattedMobile = HTMLmobile.replace("%data%", bio["contacts"]["mobile"]);
var formattedEmail = HTMLemail.replace("%data%", bio["contacts"]["email"]);
var formattedWelcMSG = HTMLWelcomeMsg.replace("%data%", bio["welcomeMessage"]);

//var formattedGitHub = HTMLgithub.replace("%data%", bio["contacts"]["github"]);
var formattedTwitter = HTMLtwitter.replace("%data%", bio["contacts"]["twitter"]);
var formattedLocation = HTMLlocation.replace("%data%", bio["contacts"]["location"]);
var formattedPic = HTMLbioPic.replace("%data%", bio["bioPic"]);
//var formattedSkills = HTMLskills.replace("%data%", bio["skills"]);

//Body
//var formattedEmployer = HTMLworkEmployer.replace("%data%", "hello");
//var formattedTitle = HTMLworkTitle.replace("%data%", "hello");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
//$("#topContacts").append(formattedGitHub);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedLocation);
$("#header").append(formattedPic);
$("#header").append(formattedWelcMSG);
//$("#header").append(HTMLskillsStart);
//$("#header").append(formattedSkills);
//$("#workExperience").prepend(HTMLworkStart);
//$("#workExperience").prepend(formattedTitle);

function displayWork () {
	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
		$("#skills").append(formattedSkills);
		var formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
		$("#skills").append(formattedSkills);
		var formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
		$("#skills").append(formattedSkills);
		var formattedSkills = HTMLskills.replace("%data%", bio.skills[3]);
		$("#skills").append(formattedSkills);
	}
	for (job in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle .replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);
		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedWorkLocation);
		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedWorkDescription);
	}
};

displayWork();

function displayfooter () {
	if (bio.contacts.mobile.length > 0) {
		$("#footerContacts").append(bio.contacts[0]);
	}
}

displayfooter();

function inName() {
	var name = bio.name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	return name[0] +" "+name[1];
}

$("#main").append(internationalizeButton);

//Map for where i've worked
$("#mapDiv").append(googleMap);

//alert(inName(bio.name));

$(".biopic").addClass("animated fadeInUp");
$(".work-entry").addClass("animated fadeInDown");
