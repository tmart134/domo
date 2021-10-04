//THIS IS MINE TM
    var columnNames = Object.keys(data[0]);//get the column names into an array
    for (var name in columnNames){
	    datagrid.addColumn(columnNames[name],datagrid.DATA_TYPE_STRING);//addColumn header name for grid
    }
  //TAG VALUE and AOI ARE ARRAYS & CANNOT ADD ARRAY TO CELL
  //SO IF [] then space and .join otherwise
    for (var response in data){ //for each response
	    var feedback_details = Object.values(data[response]); //store in an array
	    for (var detail in feedback_details){ //go through each response
		      if ((feedback_details[detail] === null) || (feedback_details[detail]=== [])){
		      	datagrid.addCell(" ");}
		      else if (Array.isArray(feedback_details[detail])){
		        var no_array = feedback_details[detail].join();
		        datagrid.addCell(no_array);
		      }
		      else {datagrid.addCell(feedback_details[detail]);}//addCell to row in grid
	    }
	   	datagrid.endRow(); //start a new row 
	 }