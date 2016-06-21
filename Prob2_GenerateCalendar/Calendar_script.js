var display_cal = document.getElementById("show_cal");

display_cal.addEventListener("click", function () {
    //get the current date, and extract the current month(variable curr_month) and current year(variable curr_year) from it
    //use this data to highlight current date
    //DON'T KNOW HOW
    var d = new Date();
    var curr_month = d.getMonth();
    var curr_year = d.getFullYear();
    
    var month_names =['January','February','March','April','May','June','July','August','September','October','November','December'];
    var day_names = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    
    //get the input for month from user in variable month
    var select_op = document.getElementById("ch_month");
    var month = select_op.options[select_op.selectedIndex].value;
    console.log(month);
    //get the input for year from user in variable year  
    var year = document.getElementById("enter_year").value;
    
    //get the day on which the 1st of the month begins(variable first_day)
    var first_date = month_names[month] + " " + 1 + " " + year;
    var temp = new Date(first_date).toDateString();
    var first_day = temp.substring(0,3);
    
    //find its index of first_day in the array day_names(eg. Tue has index 2)
    var day_num = day_names.indexOf(first_day);
    
    //get the no. of days in the month selected(variable numofdays) eg. June has 30 days
    var numofdays = new Date(year,1+month,0).getDate();
    
    //create the table from the information from the user
    var calendar_t = createTable(day_names, day_num, numofdays);
    
    //append table to the cal_dates div tag
    document.getElementById("cal_month").innerHTML = month_names[month] + " " + year;
    document.getElementById("cal_dates").appendChild(calendar_t);
});


function createTable(day_names, day_num, numofdays) {
    
    //create table
    var table = document.createElement("cal_table");
    table.setAttribute("cellpadding","5");
	
    //create headers that display the days of the week
    for(var i=0; i<7; i++) {
        var th = document.createElement("th");
        th.innerText = day_names[i];
        table.appendChild(th);
    }
    
    //create first row
    var tr = document.createElement("tr");
    //now add blank cells till you get the day on which the month begins
    var j;
    for(j=0; j<7; j++) {
        if(j == day_num) {
            break;
        }
        var td= document.createElement("td");
        td.innerHTML = "";
        tr.appendChild(td); 
    }
    //when you get the day on which the month begins, start populating the cells starting from 1
    var cnt = 1;
    for(; j<7; j++) {
        var td = document.createElement("td");
        td.innerHTML = cnt;
        cnt++;
        tr.appendChild(td);
    }
    table.appendChild(tr);
    
    // create rest of the rows till last date of month
    for(var r=2; r<=5; r++) {
        tr = document.createElement("tr");
        for(var c=0; c<=6; c++) {
            if(cnt > numofdays) {
                //if you reach last date append the rows and return table
                table.appendChild(tr);
                return table;
            }
            var td = document.createElement("td");
            td.innerHTML = cnt;
            cnt++;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    
};