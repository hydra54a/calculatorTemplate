// slider function
let getval = (eval) => {
  let output = document.getElementById("demo");
  output.innerHTML = eval.value+'%';
}

let addQuestion = (_id) => {
  $('#question-modal').modal('toggle');
  $('#question-modal').modal('show');
  $('#question-modal').modal('hide');

  let qst_form = [
    {
    label: "Question",
    input_type: "text",
    option: false,
  },
  {
    label: "Type",
    input_type: "DropDown",
    option: true,
    data: ["Input", "Output", "Textbox", "DropDown", "CheckBoxes","Radio Buttons","Slider","Header"]
  },
  {
    label: "Format",
    input_type: "DropDown",
    option: true,
    data: ["Number", "Currency","Percentage"]
  }
]

// let form;
// qst_form.map((currentElement, index) =>{
//   console.log("->>",currentElement.label)
//   switch (currentElement.label) {
//     case expression:
//
//       break;
//     default:
//
//   }
// })
// let question = "";

/*
<div class="form-group row">
  <div class="col-md-4 offset-md-8 text-right">
    <button type="button" class="btn btn-success btn-sm" >Add New Choices</button>
  </div>
</div>
*/
let choices = `
  <div class="card border-info choices" style="display:none;">
    <h5 class="card-header bg-info text-white">Add Choices</h5>
    <div class="card-body">

        <div class="form-group row">
          <label class="col-form-label col-md-3 col-sm-3 ">Text</label>
          <div class="col-md-9 col-sm-9 ">
            <input type="text" class="form-control" placeholder="" id="qs_${_id}">
          </div>
        </div>
        <div class="form-group row">
          <label class="col-form-label col-md-3 col-sm-3 ">Value</label>
          <div class="col-md-9 col-sm-9 ">
            <input type="text" class="form-control" placeholder="" id="qs_${_id}">
          </div>
        </div>
        <div class="form-group row">
          <label class="col-form-label col-md-3 col-sm-3 ">Question to Show</label>
          <div class="col-md-9 col-sm-9 ">
              <select class="form-control"  id="type_${_id}">
                <option value="input" selected>---</option>
                <option value="input">[1234] Industries</option>
                <option value="output">[1235] Revenues</option>
              </select>
          </div>
        </div>

        <div class="form-group row">
          <label class="col-form-label col-md-3 col-sm-3 ">Select Videos</label>
          <div class="col-md-9 col-sm-9 ">
            <input type="file" class="form-control" placeholder="" id="qs_${_id}">
          </div>
        </div>

        <div class="form-group row">
          <label class="col-form-label col-md-3 col-sm-3 ">Select Images</label>
          <div class="col-md-9 col-sm-9 ">
            <input type="file" class="form-control" placeholder="" id="qs_${_id}">
          </div>
        </div>


        <div class="form-group row">
          <div class="col-md-4 offset-md-8 text-right">
            <button type="button" class="btn btn-success btn-sm" >Add New Choices</button>
            <button type="button" class="btn btn-secondary btn-sm" onClick="hideChoices(${_id});">Close</button>
          </div>
        </div>

    </div>
  </div>
  <div class="clearfix"></div><br>`;

  let question=`
  <div class="form-group row">
    <label class="col-form-label col-md-3 col-sm-3 ">Auto ID</label>
    <div class="col-md-9 col-sm-9 ">
      <input type="text" class="form-control" placeholder="" id="qs_${_id}" value="1234" readonly>
    </div>
  </div>
  <div class="form-group row">
    <label class="col-form-label col-md-3 col-sm-3 ">Question</label>
    <div class="col-md-9 col-sm-9 ">
      <input type="text" class="form-control" placeholder="" id="qs_${_id}">
    </div>
  </div>
  <div class="form-group row">
    <label class="col-form-label col-md-3 col-sm-3 ">Title</label>
    <div class="col-md-9 col-sm-9 ">
      <input type="text" class="form-control" placeholder="" id="qs_${_id}">
    </div>
  </div>

  <div class="form-group row">
    <label class="control-label col-md-3 col-sm-3 ">Type</label>
    <div class="col-md-9 col-sm-9 ">
      <select class="form-control selectChoice"  id="selectChoice" onClick="showChoices(${_id});">
        <option value="input">Input</option>
        <option value="output">Output</option>
        <option value="textbox">Textbox</option>
        <option value="dropdown">DropDown</option>
        <option value="chkbox">CheckBoxes</option>
        <option value="radio">Radio Buttons</option>
        <option value="slider">Slider</option>
        <option value="header">Header</option>
      </select>
    </div>
  </div>
${choices}
  <div class="form-group row">
    <label class="control-label col-md-3 col-sm-3 ">Format</label>
    <div class="col-md-9 col-sm-9 ">
      <select class="form-control"  id="format_${_id}">
        <option value="text">AlphaNumeric</option>
        <option value="number">Number</option>
        <option value="currency">Currency</option>
        <option value="percentage">Percentage</option>
      </select>
    </div>
  </div>

  <div class="form-group row">
    <label class="col-form-label col-md-3 col-sm-3 ">Prefilled Value</label>
    <div class="col-md-9 col-sm-9 ">
      <input type="textarea" class="form-control" placeholder="" id="pvalue_${_id}">
    </div>
  </div>
  <div class="form-group row">
    <label class="col-form-label col-md-3 col-sm-3 ">tooltip</label>
    <div class="col-md-9 col-sm-9 ">
      <input type="textarea" class="form-control" placeholder="" id="pvalue_${_id}">
    </div>
  </div>
  `;


  $('.question').html(question);

}

let showChoices = (id) =>{
  let input_choices = $("#selectChoice").val();
  console.log(input_choices)
  switch (input_choices) {
    case "dropdown":
    case "chkbox":
    case "radio":
        $(".choices").show()
      break;
    default:
    $(".choices").hide()
    break;
  }
}

let hideChoices = (id) =>{
  $(".choices").hide();
}
