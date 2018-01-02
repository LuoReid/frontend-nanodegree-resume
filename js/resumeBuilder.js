/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
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
  biopic: "images/fry.jpg",
  display: function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole).prepend(formattedName);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts,#footerContacts").append(formattedMobile, formattedEmail, formattedGitHub, formattedTwitter, formattedLocation);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedBioPic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcomeMsg);
    if ($("h1").length === 0) {
      $("#header").hide();
    }
    if (bio.skills.length > 0) {
      $("#header").append(HTMLskillsStart);
      bio.skills.forEach(function(item, index, array) {
        var formattedSkill = HTMLskills.replace("%data%", item);
        $("#skills").append(formattedSkill);
      });
    }
  }
};
var work = {
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
  display: function() {
    work.jobs.forEach(function(element, index, array) {
      $("#workExperience").append(HTMLworkStart);
      var formattedEmployer = HTMLworkEmployer.replace("%data%", element.employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", element.title);
      var formattedLocation = HTMLworkLocation.replace("%data%", element.location);
      var formattedDates = HTMLworkDates.replace("%data%", element.dates);
      var formattedDescription = HTMLworkDescription.replace("%data%", element.description);
      $(".work-entry:last").append(formattedEmployer + formattedTitle, formattedLocation, formattedDates, formattedDescription);
    });
  }
};
var projects = {
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
  display: function() {
    projects.projects.forEach(function(e) {
      $("#projects").append(HTMLprojectStart);
      var formattedProjTitle = HTMLprojectTitle.replace("%data%", e.title);
      var formattedProjDates = HTMLprojectDates.replace("%data%", e.dates);
      var formattedProjDesc = HTMLprojectDescription.replace("%data%", e.description);
      $(".project-entry:last").append(formattedProjTitle, formattedProjDates, formattedProjDesc);
      e.images.forEach(function(element) {
        $(".project-entry:last").append(HTMLprojectImage.replace("%data%", element));
      });
    });
  }
};
var education = {
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
  }],
  display: function() {
    education.schools.forEach(function(e, i, a) {
      $("#education").append(HTMLschoolStart);
      var formattedSchool = HTMLschoolName.replace("%data%", e.name) + HTMLschoolDegree.replace("%data%", e.degree);
      var formattedDates = HTMLschoolDates.replace("%data%", e.dates);
      var formattedLocation = HTMLschoolLocation.replace("%data%", e.location);
      $(".education-entry:last").append(formattedSchool, formattedDates, formattedLocation);
      e.majors.forEach(function(element) {
        $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", element));
      });
      //var formattedDesc   = HTMLSchoolMajor.replace("%data%",e.majors);
    });
    $("#education").append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(e, i, a) {
      $("#education").append(HTMLschoolStart);
      var formattedSchool = HTMLonlineTitle.replace("%data%", e.title) + HTMLonlineSchool.replace("%data%", e.school);
      var formattedDates = HTMLonlineDates.replace("%data%", e.dates);
      var formattedUrl = HTMLonlineURL.replace("%data%", e.url);
      $(".education-entry:last").append(formattedSchool, formattedDates, formattedUrl);
    });
  }
};
bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);
//$("#mapDiv").append(gaodeMap);