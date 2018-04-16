(function() {
  var model = {
    person: {
      bio: {
        name: "Long Cheng",
        role: "前端工程师",
        contacts: {
          mobile: "18653291132",
          email: "Long.Cheng@aliyun.com",
          github: "Luo.Reid",
          twitter: "@pxiaozei",
          location: "Qingdao"
        },
        welcomeMessage: "Welcome",
        skills: ["后端开发", "前端开发", "需求分析"],
        biopic: "images/fry.jpg"
      },
      jobs: [{
        employer: "中海网络科技股份有限公司",
        title: "实施工程师",
        location: "Shanghai",
        dates: "2009.8 - 2010.8",
        description: `现场调研，带领人员对现场状况进行调研以便后期工作。
    系统优化，针对现场情况对原设计方案进行优化。
    系统集成，带领人员对系统各节点及终端进行组网。
    系统测试，对组成的系统网络进行测试，以使系统符合需求。`
      }, {
        employer: "中英融贯资讯（武汉）有限公司",
        title: "C#开发工程师",
        location: "Qingdao",
        dates: "2010.12 - 2014.10",
        description: `系统设计，根据客户需求设计系统。
    系统开发，和其它开发工程师一起开发系统，实现客户需求。
    监控运营，系统上线后监控运营系统的运行状况，搜集潜在优化或升级方向。`
      }, {
        employer: "TSC 集团控股有限公司",
        title: "开发工程师",
        location: "Qingdao",
        dates: "2014.10 - 2016.8",
        description: `系统设计，针对公司IT系统业务需求设计解决方案；
    系统开发，实现IT系统的业务需求；
    系统测试，测试实现的IT系统功能； n
    系统运维，运维公司的IT系统。`
      }, {
        employer: "通教信息技术（上海）有限公司",
        title: "开发工程师",
        location: "Qingdao",
        dates: "in progress",
        description: `负责系统需求分析、系统设计、系统开发、系统测试、系统运维，
    软件项目全流程。`
      }],
      projects: [{
        title: "实施工程师",
        dates: "2009.8 - 2010.8",
        description: "虹桥枢纽港智能交通系统是虹桥枢纽港辅助系统之一。实现对虹桥港的及周围交通的监控，实现交通管理，疏导，突发情况预警。",
        images: ["images/project1-2.jpg", "images/project1-3.jpg"]
      }, {
        title: "C# 开发工程师",
        dates: "2011.10 - 2012.6",
        description: "负责集团中的所有人员的配置。员工来自集团外部或内部。代替HR及经理线下工作。优化员工办理入职。把相关数据写入 SAP。",
        images: []
      }, {
        title: "软件开发工程师",
        dates: "2016.10 - 2016.6",
        description: "系统管理公司所有的编码，包括编码属性管理，编码规则管理，编码申请管理，系统对外接口管理。",
        images: []
      }],
      education: {
        schools: [{
          name: "青岛职业技术学院",
          location: "山东青岛",
          degree: "大专",
          majors: ["计算机技术"],
          dates: "2007.9 - 2009.11",
          url: "http://www.qtc.edu.cn/"
        }],
        onlineCourses: [{
          title: "前端开发（入门）",
          school: "优达学城",
          dates: "2017.6 - 2018.1",
          url: "https://cn.udacity.com/"
        }]
      }

    },
    temp: {
      HTMLheaderName: '<h1 id="name">%data%</h1>',
      HTMLheaderRole: '<span>%data%</span><hr>',
      HTMLcontactGeneric: '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>',
      HTMLmobile: '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>',
      HTMLemail: '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>',
      HTMLtwitter: '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>',
      HTMLgithub: '<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>',
      HTMLblog: '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>',
      HTMLlocation: '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>',
      HTMLbioPic: '<img src="%data%" class="biopic">',
      HTMLwelcomeMsg: '<span class="welcome-message">%data%</span>',
      HTMLskillsStart: '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-column"></ul>',
      HTMLskills: '<li class="flex-item"><span class="white-text">%data%</span></li>',
      HTMLworkStart: '<div class="work-entry"></div>',
      HTMLworkEmployer: '<a href="#">%data%',
      HTMLworkTitle: ' - %data%</a>',
      HTMLworkDates: '<div class="date-text">%data%</div>',
      HTMLworkLocation: '<div class="location-text">%data%</div>',
      HTMLworkDescription: '<p><br>%data%</p>',
      HTMLprojectStart: '<div class="project-entry"></div>',
      HTMLprojectTitle: '<a href="#">%data%</a>',
      HTMLprojectDates: '<div class="date-text">%data%</div>',
      HTMLprojectDescription: '<p><br>%data%</p>',
      HTMLprojectImage: '<img src="%data%">',
      HTMLschoolStart: '<div class="education-entry"></div>',
      HTMLschoolName: '<a href="#">%data%',
      HTMLschoolDegree: ' -- %data%</a>',
      HTMLschoolDates: '<div class="date-text">%data%</div>',
      HTMLschoolLocation: '<div class="location-text">%data%</div>',
      HTMLschoolMajor: '<em><br>Major: %data%</em>',
      HTMLonlineClasses: '<h3>Online Classes</h3>',
      HTMLonlineTitle: '<a href="#">%data%',
      HTMLonlineSchool: ' - %data%</a>',
      HTMLonlineDates: '<div class="date-text">%data%</div>',
      HTMLonlineURL: '<br><a href="#">%data%</a>',
      internationalizeButton: '<button>Internationalize</button>',
      googleMap: '<div id="map"></div>'
    },
    locations: [],
    mapOptions: {
      disableDefaultUI: true
    }
  };

  var octopus = {
    init: function() {
      view.init();


      //googleMap.init();
    },
    getPerson: function() {
      return model.person;
    },
    getTemplate: function() {
      return model.temp;
    },
    locationFinder: function() {
      const person = this.getPerson();
      // initializes an empty array
      var locations = [];
      // adds the single location property from bio to the locations array
      locations.push(person.bio.contacts.location);
      // iterates through school locations and appends each location to
      // the locations array. Note that forEach is used for array iteration
      // as described in the Udacity FEND Style Guide:
      // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
      person.education.schools.forEach(function(school) {
        locations.push(school.location);
      });
      // iterates through work locations and appends each location to
      // the locations array. Note that forEach is used for array iteration
      // as described in the Udacity FEND Style Guide:
      // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
      person.jobs.forEach(function(job) {
        locations.push(job.location);
      });
      return locations;
    },
    getMapOptions: function() {
      return model.mapOptions;
    }
  };

  var view = {
    init: function() {
      this.render();
    },
    render: function() {
      const person = octopus.getPerson();
      const temp = octopus.getTemplate();

      this._renderBio(person.bio, temp);
      this._renderJob(person.jobs, temp);
      this._renderProject(person.projects, temp);
      this._renderEducation(person.education, temp);
    },
    _renderBio: function(bio, temp) {
      var formattedName = temp.HTMLheaderName.replace("%data%", bio.name);
      var formattedRole = temp.HTMLheaderRole.replace("%data%", bio.role);
      $("#header").prepend(formattedRole).prepend(formattedName);
      var formattedMobile = temp.HTMLmobile.replace("%data%", bio.contacts.mobile);
      var formattedEmail = temp.HTMLemail.replace("%data%", bio.contacts.email);
      var formattedGitHub = temp.HTMLgithub.replace("%data%", bio.contacts.github);
      var formattedTwitter = temp.HTMLtwitter.replace("%data%", bio.contacts.twitter);
      var formattedLocation = temp.HTMLlocation.replace("%data%", bio.contacts.location);
      $("#topContacts,#footerContacts").append(formattedMobile, formattedEmail, formattedGitHub, formattedTwitter, formattedLocation);
      var formattedBioPic = temp.HTMLbioPic.replace("%data%", bio.biopic);
      $("#header").append(formattedBioPic);
      var formattedWelcomeMsg = temp.HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
      $("#header").append(formattedWelcomeMsg);
      if ($("h1").length === 0) {
        $("#header").hide();
      }
      if (bio.skills.length > 0) {
        $("#header").append(temp.HTMLskillsStart);
        bio.skills.forEach(function(item, index, array) {
          var formattedSkill = temp.HTMLskills.replace("%data%", item);
          $("#skills").append(formattedSkill);
        });
      }
    },
    _renderJob: function(jobs, temp) {
      jobs.forEach(function(element, index, array) {
        $("#workExperience").append(temp.HTMLworkStart);
        var formattedEmployer = temp.HTMLworkEmployer.replace("%data%", element.employer);
        var formattedTitle = temp.HTMLworkTitle.replace("%data%", element.title);
        var formattedLocation = temp.HTMLworkLocation.replace("%data%", element.location);
        var formattedDates = temp.HTMLworkDates.replace("%data%", element.dates);
        var formattedDescription = temp.HTMLworkDescription.replace("%data%", element.description);
        $(".work-entry:last").append(formattedEmployer + formattedTitle, formattedLocation, formattedDates, formattedDescription);
      });
    },
    _renderProject: function(projects, temp) {
      projects.forEach(function(e) {
        $("#projects").append(temp.HTMLprojectStart);
        var formattedProjTitle = temp.HTMLprojectTitle.replace("%data%", e.title);
        var formattedProjDates = temp.HTMLprojectDates.replace("%data%", e.dates);
        var formattedProjDesc = temp.HTMLprojectDescription.replace("%data%", e.description);
        $(".project-entry:last").append(formattedProjTitle, formattedProjDates, formattedProjDesc);
        e.images.forEach(function(element) {
          $(".project-entry:last").append(temp.HTMLprojectImage.replace("%data%", element));
        });
      });
    },
    _renderEducation: function(education, temp) {
      education.schools.forEach(function(e, i, a) {
        $("#education").append(temp.HTMLschoolStart);
        var formattedSchool = temp.HTMLschoolName.replace("%data%", e.name) + temp.HTMLschoolDegree.replace("%data%", e.degree);
        var formattedDates = temp.HTMLschoolDates.replace("%data%", e.dates);
        var formattedLocation = temp.HTMLschoolLocation.replace("%data%", e.location);
        $(".education-entry:last").append(formattedSchool, formattedDates, formattedLocation);
        e.majors.forEach(function(element) {
          $(".education-entry:last").append(temp.HTMLschoolMajor.replace("%data%", element));
        });
        //var formattedDesc   = HTMLSchoolMajor.replace("%data%",e.majors);
      });
      $("#education").append(temp.HTMLonlineClasses);

      education.onlineCourses.forEach(function(e, i, a) {
        $("#education").append(temp.HTMLschoolStart);
        var formattedSchool = temp.HTMLonlineTitle.replace("%data%", e.title) + temp.HTMLonlineSchool.replace("%data%", e.school);
        var formattedDates = temp.HTMLonlineDates.replace("%data%", e.dates);
        var formattedUrl = temp.HTMLonlineURL.replace("%data%", e.url);
        $(".education-entry:last").append(formattedSchool, formattedDates, formattedUrl);
      });
    }
  };

  /*
    var googleMap = {
      init: function() {
        var mapTemp = octopus.getTemplate().googleMap;
        $("#mapDiv").append(mapTemp);

        this.mapOptions = octopus.getMapOptions();
        this.map = new google.maps.Map(document.querySelector('#map'), this.mapOptions);


        // Calls the initializeMap() function when the page loads
        window.addEventListener('load', (function() {
          // Sets the boundaries of the map based on pin locations
          window.mapBounds = new google.maps.LatLngBounds();

          var locations = octopus.locationFinder();
          var service = new google.maps.places.PlacesService(map);
          // Iterates through the array of locations, creates a search object for each location
          locations.forEach(function(place) {
            // the search request object
            var request = { query: place };
            // Actually searches the Google Maps API for location data and runs the callback
            // function with the search results after each search.
            service.textSearch(request, this.callback);
          });
        })());
        // Vanilla JS way to listen for resizing of the window
        // and adjust map bounds
        window.addEventListener('resize', function(e) {
          //Make sure the map bounds get updated on page resize
          this.map.fitBounds(window.mapBounds);
        });
      },
      createMapMarker: function(placeData) {
        // The next lines save location data from the search result object to local variables
        var lat = placeData.geometry.location.lat(); // latitude from the place service
        var lon = placeData.geometry.location.lng(); // longitude from the place service
        var name = placeData.formatted_address; // name of the place from the place service
        var bounds = window.mapBounds; // current boundaries of the map window
        // marker is an object with additional data about the pin for a single location
        var marker = new google.maps.Marker({
          map: this.map,
          position: placeData.geometry.location,
          title: name
        });
        // infoWindows are the little helper windows that open when you click
        // or hover over a pin on a map. They usually contain more information
        // about a location.
        var infoWindow = new google.maps.InfoWindow({
          content: name
        });
        // hmmmm, I wonder what this is about...
        google.maps.event.addListener(marker, 'click', function() {
          // your code goes here!
        });
        // this is where the pin actually gets added to the map.
        // bounds.extend() takes in a map location object
        bounds.extend(new google.maps.LatLng(lat, lon));
        // fit the map to the new marker
        this.map.fitBounds(bounds);
        // center the map
        this.map.setCenter(bounds.getCenter());
      },
      callback: function(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
          this.createMapMarker(results[0]);
        }
      },
      pinPoster: function(locations) {
        // creates a Google place search service object. PlacesService does the work of
        // actually searching for location data.
        var service = new google.maps.places.PlacesService(this.map);
        // Iterates through the array of locations, creates a search object for each location
        locations.forEach(function(place) {
          // the search request object
          var request = {
            query: place
          };
          var callback = function(results, status) {
            if (status == google.maps.places.PlacesServiceStatus.OK) {
              this.createMapMarker(results[0]);
            }
          }
          service.textSearch(request, callback);
        });
      },
      initializeMap: function() {

        // Sets the boundaries of the map based on pin locations
        window.mapBounds = new google.maps.LatLngBounds();
        // locations is an array of location strings returned from locationFinder()
        //locations = locationFinder();
        // pinPoster(locations) creates pins on the map for each location in
        // the locations array

        var location = octopus.locationFinder();
        this.pinPoster(location);
      },

    };*/

  octopus.init();

  var mapTemp = octopus.getTemplate().googleMap;
  $("#mapDiv").append(mapTemp);


  var map; // declares a global map variable
  /*
  Start here! initializeMap() is called when page is loaded.
  */
  function initializeMap() {
    var locations;
    var mapOptions = {
      disableDefaultUI: true
    };
    /*
    For the map to be displayed, the googleMap var must be
    appended to #mapDiv in resumeBuilder.js.
    */
    map = new google.maps.Map(document.querySelector('#map'), mapOptions);
    /*
    locationFinder() returns an array of every location string from the JSONs
    written for bio, education, and work.
    */
    function locationFinder() {
      /*// initializes an empty array
      var locations = [];
      // adds the single location property from bio to the locations array
      locations.push(bio.contacts.location);
      // iterates through school locations and appends each location to
      // the locations array. Note that forEach is used for array iteration
      // as described in the Udacity FEND Style Guide:
      // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
      education.schools.forEach(function(school) {
        locations.push(school.location);
      });
      // iterates through work locations and appends each location to
      // the locations array. Note that forEach is used for array iteration
      // as described in the Udacity FEND Style Guide:
      // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
      work.jobs.forEach(function(job) {
        locations.push(job.location);
      });
      return locations;*/
    }
    /*
    createMapMarker(placeData) reads Google Places search results to create map pins.
    placeData is the object returned from search results containing information
    about a single location.
    */
    function createMapMarker(placeData) {
      // The next lines save location data from the search result object to local variables
      var lat = placeData.geometry.location.lat(); // latitude from the place service
      var lon = placeData.geometry.location.lng(); // longitude from the place service
      var name = placeData.formatted_address; // name of the place from the place service
      var bounds = window.mapBounds; // current boundaries of the map window
      // marker is an object with additional data about the pin for a single location
      var marker = new google.maps.Marker({
        map: map,
        position: placeData.geometry.location,
        title: name
      });
      // infoWindows are the little helper windows that open when you click
      // or hover over a pin on a map. They usually contain more information
      // about a location.
      var infoWindow = new google.maps.InfoWindow({
        content: name
      });
      // hmmmm, I wonder what this is about...
      google.maps.event.addListener(marker, 'click', function() {
        // your code goes here!
      });
      // this is where the pin actually gets added to the map.
      // bounds.extend() takes in a map location object
      bounds.extend(new google.maps.LatLng(lat, lon));
      // fit the map to the new marker
      map.fitBounds(bounds);
      // center the map
      map.setCenter(bounds.getCenter());
    }
    /*
    callback(results, status) makes sure the search returned results for a location.
    If so, it creates a new map marker for that location.
    */
    function callback(results, status) {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        createMapMarker(results[0]);
      }
    }
    /*
    pinPoster(locations) takes in the array of locations created by locationFinder()
    and fires off Google place searches for each location
    */
    function pinPoster(locations) {
      // creates a Google place search service object. PlacesService does the work of
      // actually searching for location data.
      var service = new google.maps.places.PlacesService(map);
      // Iterates through the array of locations, creates a search object for each location
      locations.forEach(function(place) {
        // the search request object
        var request = {
          query: place
        };
        // Actually searches the Google Maps API for location data and runs the callback
        // function with the search results after each search.
        service.textSearch(request, callback);
      });
    }
    // Sets the boundaries of the map based on pin locations
    window.mapBounds = new google.maps.LatLngBounds();
    // locations is an array of location strings returned from locationFinder()
    //locations = locationFinder();
    locations = octopus.locationFinder();
    // pinPoster(locations) creates pins on the map for each location in
    // the locations array
    pinPoster(locations);
  }
  /*
  Uncomment the code below when you're ready to implement a Google Map!
  */
  // Calls the initializeMap() function when the page loads
  window.addEventListener('load', initializeMap);
  // Vanilla JS way to listen for resizing of the window
  // and adjust map bounds
  window.addEventListener('resize', function(e) {
    //Make sure the map bounds get updated on page resize
    map.fitBounds(mapBounds);
  });




})();