//Lists and variables
//Teacher/admin informations
var Username_data = ["alex", "miles", "james"];
var Teacher_password_data = ["alex111", "miles23", "lemon"];
var Assigment_name_data = ["Koi Fish Mixed Media", "Grid Transfer Project", "2 point perspective city"];
var Assigment_description_data = ["Drawing the Fish: Chose to draw one large fish or two smaller ones and position paper accordingly. For the head, draw a curved line (either a letter “C” or a letter “U”). Add a line to connect the two ends of this line. Draw a perpendicular curved line. This will be the center of the body. Add a tail. Then draw the side lines of the body. Add fins. Finally, add the dorsal fin. Notice how it’s shaped like a letter “S”. Painting the Fish: Set two tubs of blue paint and one green paint on each table. Paint background (pond) before fish. Add lily pads if desired. When background is finished, place containers of orange, red, yellow and black on the tables. I demonstrated a variety of paint techniques (double-loading, stipling, etc). Paint freely. Trace over all lines with black paint.", "I will be grading these by how neat you applied your transfer as well as how accurate you completed the drawing. Remember to ink it out and erase all pencil marks from your transfer before turning in your work.", "Practice worksheet for upcoming project. This sheet will show you how to construct a city block using correct 2 point perspective methods. Include all the requirements. Please look at the instruction sheets attached to help you when drawing out the components. Practice including street lights and extra signs"];
var Assigment_requirements_data = ["12″ x 18″ white paper light colored chalk pastel for drawing tempera paints. Your fish needs to have at least 2 different colors implemented in your work. Color should be saturated with value shifts and blending. Medium needs to be colored pencils. No scribbling or paper should be visible through your coloring. Coloring should be neat. Extra points will be given for students that implement highlights and shadows correctly.", "Students are expected to work at all times during studio time. Students should be prepared for project work and have all supplies. Clean up when studio time is over and have appropriate attitude and conversations during class work time.", "Students are expected to work at all times during studio time. Students should be prepared for project work and have all supplies. Clean up when studio time is over and have appropriate attitude and conversations during class work time."];
var Assigment_point_data = ["100", "100", "100"];
var Assigment_due_date_data = ["April 23", "Mar 9", "May 5"];
var Option_1_link_data = ["https://www.deepspacesparkle.com/koi-fish-art-lesson/", "https://www.art-is-fun.com/grid-method", "https://makeamarkstudios.com/how-to-draw-a-2-point-perspective-city-for-beginners/"];
var Option_2_link_data = ["https://iheartcraftythings.com/japanese-koi-fish-drawing.html", "https://www.art-is-fun.com/grid-method", "https://makeamarkstudios.com/how-to-draw-a-2-point-perspective-city-for-beginners/"];
var Option_3_link_data = ["https://www.pinterest.com/tchensel4409/koi-fish-drawing/", "https://www.art-is-fun.com/grid-method", "https://makeamarkstudios.com/how-to-draw-a-2-point-perspective-city-for-beginners/"];
var Option_4_link_data = ["https://en.wikipedia.org/wiki/Koi", "https://www.art-is-fun.com/grid-method", "https://makeamarkstudios.com/how-to-draw-a-2-point-perspective-city-for-beginners/"];

//the variables that stores the active account's informations
//Class code, student id, student index, teacher index, photo index, active user index
var Active_student_class_value = -1;
var Active_student_id_value = -1;
var Active_student_index_value = -1;
var Active_teacher_index_value = -1;
var Active_photo_index_value = -1;
var User_based_active_index = 0;

//the lists that store the datas that can ben seen by the active user 
//paints and public data shared by students in the same class
var User_based_project_photos_active_data = [];
var User_based_project_name_active_data = [];
var User_based_project_index_active_data = [];

//store each students teacher index
var student_teacher_connection_index_data = [0, 1, 0, 0];

//class code list for students
var class_code_data = [2202, 2221, 2202, 2202];

//student informations lists
//usernames, passwords, student id, surname, email, phone number, school name, period number, profile image
var student_name_data = ["Robert", "Maria", "Alex", "Amelia"];
var student_password_data = ["Robert123456", "lemoncake", "Alex35", "AILEMA"];
var student_id_data = [15443, 12332, 12321, 98791];
var student_surname_data = ["Miller", "Jones", "Williams", "Smith"];
var student_email_data = ["RobertM@gmail.com", "Jones12@gmail.com", "WillAlex@gmail.com", "Amelia2005@gmail.com"];
var student_phone_data = ["(830)-560-00-48", "(830)-520-11-48", "(830)-360-23-21", "(830)-569-78-08"];
var student_school_data = ["Reagan High School", "Thomas Edison High School", "Reagan High School", "Reagan High School"];
var student_period_data = ["1", "7", "1", "3"];
var student_profile_image_data = ["assets/account.png", "assets/account.png", "assets/account.png", "assets/account.png"];
//paints database
var paint_title_data = ["Yellow Koi Fish", "A big Giraffe", "Realistic Koi", "Family of Koi"];
var paint_image_data = ["https://img.freepik.com/free-photo/japanese-painting-japan-nature-traditional-season_1417-526.jpg?w=740&t=st=1682476885~exp=1682477485~hmac=54dab966ccdb8bb756bd4012c2addd81c571e359b1d4a4502b70a3f3072875c4",
"https://i.pinimg.com/236x/74/fd/95/74fd95f18926e01370c9fd137357805b--online-art-courses-drawing-projects.jpg",
"https://m.media-amazon.com/images/I/51zRRMcGlPS.jpg", 
"https://img.freepik.com/free-vector/two-japanese-koi-fish-swimming_53876-16876.jpg?w=2000"];

var comments_list_data = ["Alex Williams: You can add a more saturation\nAmelia Smith: You should watercolor the background. And don't forget to ink contour lines", "", "", ""];

//Navigation bar systems
function Page_update_by_navigation_bar(pagenumber) {
  //removing warnings
  setProperty("studentlogin_warning_label", "hidden", true);
  setProperty("teacherlogin_warning_label", "hidden", true);
  //directing the user to the correct page
  if (pagenumber == -1) {
    setScreen("Login");
  } else {
    if (pagenumber == 0) {
      setScreen("Update_Assigment_page");
    } else {
      if (pagenumber == 1) {
        setScreen("main_page");
      } else {
        if (pagenumber == 2) {
          setScreen("Make_comment_page");
          Assign_projects();
          //To check whether there is a paint that the user can view and comment on.
      if (User_based_project_name_active_data.length > 0) {
        Active_photo_index_value = 0;
      }
      else{
        Active_photo_index_value = -1;
      }
      show_photo();
        } else {
          if (pagenumber == 3) {
            setScreen("Uploud_paint_page");
          } else {
            setScreen("Profile_page");
          }
        }
      }
    }
  }
}
//the commands that uses the Page_update_by_navigation_bar function to change page
onEvent("agit1", "click", function( ) {
update_current_page(Active_teacher_index_value);
Page_update_by_navigation_bar(1);
});
onEvent("agit2", "click", function( ) {
update_current_page(Active_teacher_index_value);
Page_update_by_navigation_bar(1);
});
onEvent("agit3", "click", function( ) {
update_current_page(Active_teacher_index_value);
Page_update_by_navigation_bar(1);
});
onEvent("agit4", "click", function( ) {
update_current_page(Active_teacher_index_value);
Page_update_by_navigation_bar(1);
});

onEvent("bgit1", "click", function( ) {
Page_update_by_navigation_bar(2);
});
onEvent("bgit2", "click", function( ) {
Page_update_by_navigation_bar(2);
});
onEvent("bgit3", "click", function( ) {
Page_update_by_navigation_bar(2);
});
onEvent("bgit4", "click", function( ) {
Page_update_by_navigation_bar(2);
});

onEvent("cgit1", "click", function( ) {
Update_Comments();
Page_update_by_navigation_bar(3);
});
onEvent("cgit2", "click", function( ) {
Update_Comments();
Page_update_by_navigation_bar(3);
});
onEvent("cgit3", "click", function( ) {
Update_Comments();
Page_update_by_navigation_bar(3);
});
onEvent("cgit4", "click", function( ) {
Update_Comments();
Page_update_by_navigation_bar(3);
});

onEvent("dgit1", "click", function( ) {
Page_update_by_navigation_bar(4);
});
onEvent("dgit2", "click", function( ) {
Page_update_by_navigation_bar(4);
});
onEvent("dgit3", "click", function( ) {
Page_update_by_navigation_bar(4);
});
onEvent("dgit4", "click", function( ) {
Page_update_by_navigation_bar(4);
});
//Login request system
function Login_request(classcode, studentid, password) {
  //checking student with using an for loop
  for (var i = 0; i < student_name_data.length; i++) {
    if (class_code_data[i] == classcode && (student_id_data[i] == studentid && student_password_data[i] == password)) {
      Active_student_class_value = class_code_data[i];
      Active_student_id_value = student_id_data[i];
      Active_student_index_value = i;
      Active_teacher_index_value = student_teacher_connection_index_data[i];
      Assign_projects();
      if (User_based_project_name_active_data.length > 0) {
        Active_photo_index_value = 0;
      } else {
        Active_photo_index_value = -1;
      }
      show_photo();
      update_studenty_profile_page();
      update_current_page(Active_teacher_index_value);
      Page_update_by_navigation_bar(1);
      return ;
    }
  }
  setProperty("studentlogin_warning_label", "hidden", false);
}
onEvent("Join_button", "click", function( ) {
  Login_request(getNumber("classcode_input"), getNumber("studentid_input"), getText("studentpassword_input"));
});
//teacher update system 
function update_assigment_info() {
  Assigment_name_data[Active_teacher_index_value] = getText("assigment_name");
  Assigment_description_data[Active_teacher_index_value] = getText("assigment_description");
  Assigment_requirements_data[Active_teacher_index_value] = getText("assigment_requirements");
  Assigment_point_data[Active_teacher_index_value] = getText("assigment_point");
  Assigment_due_date_data[Active_teacher_index_value] = getText("assigment_duedate");
  Option_1_link_data[Active_teacher_index_value] = getText("text_input11");
  Option_2_link_data[Active_teacher_index_value] = getText("text_input12");
  Option_3_link_data[Active_teacher_index_value] = getText("text_input13");
  Option_4_link_data[Active_teacher_index_value] = getText("text_input14");
}
onEvent("assigment_name", "input", function( ) {
  update_assigment_info();
});
onEvent("assigment_description", "input", function( ) {
  update_assigment_info();
});
onEvent("assigment_requirements", "input", function( ) {
  update_assigment_info();
});
onEvent("text_input11", "input", function( ) {
  update_assigment_info();
});
onEvent("text_input12", "input", function( ) {
  update_assigment_info();
});
onEvent("text_input13", "input", function( ) {
  update_assigment_info();
});
onEvent("text_input14", "input", function( ) {
  update_assigment_info();
});
onEvent("assigment_point", "input", function( ) {
  update_assigment_info(); 
});
onEvent("assigment_duedate", "input", function( ) {
  update_assigment_info();
});
//update cuurent assigment page function
function update_current_page(index) {
  setProperty("label4", "text", Assigment_name_data[index]);
  setProperty("label6", "text", Assigment_point_data[index] + " point due Today");
  setProperty("Description", "text", Assigment_description_data[index]);
  setProperty("Requirements", "text", Assigment_requirements_data[index]);
}
//Change Profil photo system
onEvent("Profile_image_selecter", "input", function( ) {
  student_profile_image_data[Active_student_index_value] = getImageURL("Profile_image_selecter");
  setImageURL("Profile_image", student_profile_image_data[student_profile_image_data]);
  //student_profile_image_list
});
//Updates the profile information
function update_studenty_profile() {
  student_name_data[student_profile_image_data] = getText("name_input");
  student_surname_data[student_profile_image_data] = getText("surname_input");
  student_email_data[student_profile_image_data] = getText("email_input");
  student_phone_data[student_profile_image_data] = getText("phone_input");
  student_school_data[student_profile_image_data] = getText("school_input");
  student_period_data[student_profile_image_data] = getText("period_input");
  update_studenty_profile_page();
}
function update_studenty_profile_page() {
  setProperty("User_profile_name", "text", student_name_data[Active_student_index_value] + (" " + student_surname_data[Active_student_index_value]));
  setProperty("name_input", "text", student_name_data[Active_student_index_value]);
  setProperty("surname_input", "text", student_surname_data[Active_student_index_value]);
  setProperty("email_input", "text", student_email_data[Active_student_index_value]);
  setProperty("phone_input", "text", student_phone_data[Active_student_index_value]);
  setProperty("school_input", "text", student_school_data[Active_student_index_value]);
  setProperty("period_input", "text", student_period_data[Active_student_index_value]);
}
onEvent("name_input", "input", function( ) {
  update_studenty_profile();
});
onEvent("surname_input", "input", function( ) {
  update_studenty_profile();  
});
onEvent("email_input", "input", function( ) {
   update_studenty_profile(); 
});
onEvent("phone_input", "input", function( ) {
   update_studenty_profile(); 
});
onEvent("school_input", "input", function( ) {
  update_studenty_profile();  
});
onEvent("period_input", "input", function( ) {
  update_studenty_profile();  
});
//Changing student to teacher page
onEvent("Go_teacher_login_button", "click", function( ) {
  setScreen("Teacher_Login_page");
  setProperty("studentlogin_warning_label", "hidden", true);
  setProperty("teacherlogin_warning_label", "hidden", true);
});
//Changing teacher to student page
onEvent("Go_student_login_button", "click", function( ) {
  setScreen("Login");
  setProperty("studentlogin_warning_label", "hidden", true);
  setProperty("teacherlogin_warning_label", "hidden", true);
});
//showing comments
function Update_Comments() {
  setProperty("text_area2", "text", comments_list_data[Active_student_index_value]);
  setProperty("Comment_title_label", "text", paint_title_data[Active_student_index_value]);
}

//adding a new paint
onEvent("Add", "click", function( ) {
  comments_list_data[Active_student_index_value] = "";
  paint_image_data[Active_student_index_value] = getImageURL("photo_select1");
  paint_title_data[Active_student_index_value] = getText("text_input1");
  Update_Comments();
});



function Assign_projects() {
  User_based_project_name_active_data = Create_list_for_names(student_teacher_connection_index_data[Active_student_index_value]);
  User_based_project_photos_active_data = Create_list_for_images(student_teacher_connection_index_data[Active_student_index_value]);
  User_based_project_index_active_data = Create_list_for_index(student_teacher_connection_index_data[Active_student_index_value]);
  User_based_active_index = Math.min(User_based_active_index,User_based_project_name_active_data.length - 1);
}
//Create new user based accesible project list
function Create_list_for_names(teacher_control_index) {
  var new_list = [];
  for (var i = 0; i < paint_title_data.length; i++) {
    if (teacher_control_index == student_teacher_connection_index_data[i]) {
      appendItem(new_list, paint_title_data[i]);
    }
  }
  return new_list;
}
function Create_list_for_images(teacher_control_index) {
  var new_list = [];
  for (var i = 0; i < paint_image_data.length; i++) {
    if (teacher_control_index == student_teacher_connection_index_data[i]) {
      appendItem(new_list, paint_image_data[i]);
    }
  }
  return new_list;
}
function Create_list_for_index(teacher_control_index) {
  var new_list = [];
  for (var i = 0; i < paint_title_data.length; i++) {
    if (teacher_control_index == student_teacher_connection_index_data[i]) {
      appendItem(new_list, i);
    }
  }
  return new_list;
}
//make comment part
onEvent("Right_button", "click", function( ) {
  User_based_active_index++;
  User_based_active_index = Math.min(User_based_active_index,User_based_project_name_active_data.length - 1);
  Active_photo_index_value = -1;
  if (User_based_project_name_active_data.length > 0) {
    Active_photo_index_value = User_based_project_index_active_data[User_based_active_index];
  }
  show_photo();
});
onEvent("Left_button", "click", function( ) {
  User_based_active_index--;
  User_based_active_index = Math.max(User_based_active_index,0);
  Active_photo_index_value = -1;
  if (User_based_project_name_active_data.length > 0) {
    Active_photo_index_value = User_based_project_index_active_data[User_based_active_index];
  }
  show_photo();
});
function show_photo() {
  if (Active_photo_index_value == -1 || Active_photo_index_value == paint_title_data.length) {
    setProperty("label21", "text", "End");
    setProperty("image5", "image", "icon://fa-spinner");
  } else {
   setProperty("label21", "text", paint_title_data[Active_photo_index_value]);
   setProperty("image5", "image", paint_image_data[Active_photo_index_value]);
  }
  Title_position_correction();
}
onEvent("Send_button", "click", function( ) {
  comments_list_data[Active_photo_index_value] += ("\n" +student_name_data[Active_student_index_value] + " " + student_surname_data[Active_student_index_value]) + ": " +getText("Comment_input") ;
  setProperty("Comment_input", "text", "");
});
show_photo();
onEvent("Teacher_login_button", "click", function( ) {
  var Wrong_info = true;
  for (var i = 0; i < Username_data.length; i++) {
    if (getText("Username_input") == Username_data[i] && getText("teacher_password_input") == Teacher_password_data[i]) {
      Active_teacher_index_value = i;
      Page_update_by_navigation_bar(0);
      update_teacher_control_panel();
      Wrong_info = false;
    }
  }
  if (Wrong_info) {
  setProperty("teacherlogin_warning_label", "hidden", false);
  }
});
//Sign out system
onEvent("label20", "click", function( ) {
  Clear_login();
  Page_update_by_navigation_bar(-1);
});
onEvent("label18", "click", function( ) {
  Clear_login();
  Page_update_by_navigation_bar(-1);
});
//The function that updates the teacher control panel
function update_teacher_control_panel() {
  setProperty("assigment_name", "text", Assigment_name_data[Active_teacher_index_value]);
  setProperty("assigment_description", "text", Assigment_description_data[Active_teacher_index_value]);
  setProperty("assigment_requirements", "text", Assigment_requirements_data[Active_teacher_index_value]);
  setProperty("assigment_point", "text", Assigment_point_data[Active_teacher_index_value]);
  setProperty("assigment_duedate", "text", Assigment_due_date_data[Active_teacher_index_value]);
  setProperty("text_input11", "text", Option_1_link_data[Active_teacher_index_value]);
  setProperty("text_input12", "text", Option_2_link_data[Active_teacher_index_value]);
  setProperty("text_input13", "text", Option_3_link_data[Active_teacher_index_value]);
  setProperty("text_input14", "text", Option_4_link_data[Active_teacher_index_value]);

}
//Dowloand button system
function Dowloand() {
  if (getChecked("file1_checkbox")) {
    open(Option_1_link_data[Active_teacher_index_value]);
  }
  if (getChecked("file2_checkbox")) {
    open(Option_2_link_data[Active_teacher_index_value]);
  }
  if (getChecked("file3_checkbox")) {
    open(Option_3_link_data[Active_teacher_index_value]);
  }
  if (getChecked("file4_checkbox")) {
    open(Option_4_link_data[Active_teacher_index_value]);
  }
}
onEvent("Dowloand", "click", function( ) {
  Dowloand();
});
//Correct Titles poisitions system
function Title_position_correction() {
  setPosition("label21", 73, 40);
}
//Clears the past login inputs
function Clear_login() {
  setProperty("classcode_input", "text", "");
  setProperty("studentid_input", "text", "");
  setProperty("studentpassword_input", "text", "");
  setProperty("Username_input", "text", "");
  setProperty("teacher_password_input", "text", "");
}
//Resource for example paintings and descriptions assignments used in the app
//https://img.freepik.com/free-photo/japanese-painting-japan-nature-tradition
//al-season_1417-526.jpg?w=740&t=st=1682476885~exp=1682477485~hmac=54dab966ccd
//b8bb756bd4012c2addd81c571e359b1d4a4502b70a3f3072875c4
//https://twitter.com/sedeforal/status/1435586951898451973
//https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fwinnin
//gsight%2Fdrawing-with-gridlines%2F&psig=AOvVaw02h2iooklEK4uP22KKDwTV&ust=167
//8511964593000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJC6uL7O0P0CFQAAAAAdAAAAABAD
//https://tr.pinterest.com/pin/475481673161665683/ 
//"https://www.deepspacesparkle.com/koi-fish-art-lesson/",
//"https://www.art-is-fun.com/grid-method",
//"https://makeamarkstudios.com/how-to-draw-a-2-point-perspective-city-for-beginners/"
//"https://iheartcraftythings.com/japanese-koi-fish-drawing.html", 
//"https://www.art-is-fun.com/grid-method",
//"https://makeamarkstudios.com/how-to-draw-a-2-point-perspective-city-for-beginners/"
//"https://www.pinterest.com/tchensel4409/koi-fish-drawing/",
//"https://www.art-is-fun.com/grid-method",
//"https://makeamarkstudios.com/how-to-draw-a-2-point-perspective-city-for-beginners/"
//"https://en.wikipedia.org/wiki/Koi", 
//"https://www.art-is-fun.com/grid-method", 
//"https://makeamarkstudios.com/how-to-draw-a-2-point-perspective-city-for-beginners/"

