
$(".add-section").click(function(){
  $('.modal-body').html(common_components.option);
  $('#section-modal').modal('toggle');
  $('#section-modal').modal('show');
  $('#section-modal').modal('hide');
  $('#section-name').val('');
})

$('.btn-create-section').click(function(){
  var optionSectionList = $.map($('input[name="flexCheckChecked"]:checked'), function(c){return c.value; })

  let section_name =  $('#section-name').val();
  let content = "content area";

  if(section_name != '' && section_name != ' '){
    $('.calculator-section').append(`<li><a href="#modalSection">${section_name}</a></li>`);
    $('.section-area').append(section_area({content:content,section_name:section_name}));
    let footer = "";
    let json_data = [];
      if(optionSectionList.includes("slider") && optionSectionList.includes("currency")){
        json_data.push({section_name:section_name,footer:common_components.slider, main_content:`<input type="text" class="form-control no-border" id="txt_currency" placeholder="currency" value="$1,000.00">`});
      }

      if(optionSectionList.includes("currency") && !optionSectionList.includes("slider")){
        json_data.push({section_name:section_name,footer:common_components.currency, main_content:`<input type="text" class="form-control no-border" id="txt_currency" placeholder="currency" value="$1,000.00">`});
      }
      if(optionSectionList.includes("text")){
        json_data.push({section_name:section_name,footer:common_components.text, main_content:`<span class="font-weight-bold">Lorem Ipsum ... </span>`});
      }
    $('#section-list').append(sectionModal(json_data));
    $('#section-modal').modal('hide');
  }else {
    $.notify('Invalid Section name', 'info')
  }

});
