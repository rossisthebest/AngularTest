  $(function() {
	
	//console.log($('[id=content]').text());
	
	var model = 
	[
	{
			"id": 1,
			"name": "ross",
			"address": "wickford",
			"premium": "110",
			"taxvalue": "0"
	},
	{
			"id": 2,
			"name": "fai",
			"address": "southend",
			"premium": "120",
			"taxvalue": "0"
	}
	];
	
	var display = function () {
		//UI
		for(var m in model) {
			//console.log(model[m].name +" "+model[m].address+" "+model[m].premium);
			createModelForm(model[m]);
		}		
		
		//policy data
		//$('')
	};
	
	var getId = function(prop, index) {
		return "txt"+prop+index;
	}
	
	var createModelForm = function(model) {
		var contentDiv = $("#content");
		var formDiv = $("<DIV />");
		
		if(contentDiv !== undefined) {
			contentDiv.append(formDiv);
			var spanName = $("<SPAN>Name:</SPAN>");
			var ctrlIDName = getId("name", model.id);
			var inputName = $("<INPUT type='text' id='"+ctrlIDName+"' />");
			
			var spanAddress = $("<SPAN>Address:</SPAN>");
			var ctrlIDAddress = getId("address", model.id);
			var inputAddress = $("<INPUT type='text' id='"+ctrlIDAddress+"' />");
			
			var spanPremium = $("<SPAN>Premium:</SPAN>");
			var ctrlIDPremium = getId("premium", model.id);
			var inputPremium = $("<INPUT type='text' id='"+ctrlIDPremium+"' />");
			
			//var br = $("<BR />"); 
			formDiv.append(spanName);
			formDiv.append(inputName);
			formDiv.append($("<BR />"));
			formDiv.append(spanAddress);
			formDiv.append(inputAddress);
			formDiv.append($("<BR />"));
			formDiv.append(spanPremium);
			formDiv.append(inputPremium);
		}
		else {
			console.warn("content not found");
		}
	};
	
	display();
	//createForm();
	
  });