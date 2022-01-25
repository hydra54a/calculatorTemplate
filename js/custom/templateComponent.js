let sectionModal = (data) => {
  console.log(data)
  let content = "";
  let footer = "";
  let section_name = data[0].section_name;

  data.map(function(option){

    if(option.main_content !== undefined){
      content = option.main_content;
    }
    if(option.footer !== undefined){
      footer = option.footer;
    }
  })

  return `<li>
    <div class="col-md-3 col-sm-3 ">
      <div class="x_panel">
        <div class="x_title">
            <div class="row">
              <div class="col-md-4">${section_name}</div>
              <div class="col-md-4 offset-md-4 text-right"><span class="badge badge-primary">3 Years</span><i class="fa fa-close"></i></div>
            </div>
          <div class="clearfix"></div>
        </div>
        <div class="x_content">
          <div class="row">
            <div class="col-sm-12">
              <div class="temperature">
              <div class="col-md-4"></div>
              <div class="col-md-6 offset-md-2 text-right"
              ondragover="onDragOver(event);"
                        ondrop="onDrop(event);"
              >${content}</div>
              </div>
            </div>
          </div>
          <div class="row top-margin text-right">
            ${footer}
          </div>
        </div>
      </div>

    </div>
  </li>`;
}
let section_area = (data) => {
  let unique_id = Math.floor((Math.random() * 99999999) + 1);
  return `<div class="col-md-12 col-sm-12 ">
      <div class="x_panel">
        <div class="x_title">
            <div class="row">
              <div class="col-md-4"><i class="fa fa-cog settings"></i>&nbsp;${data.section_name}</div>
              <div class="col-md-4 offset-md-4 text-right"><i class="fa fa-close"></i></div>
            </div>
          <div class="clearfix"></div>

          <div class="clearfix"></div>
        </div>
        <div class="x_content">
          <div class="row">
            <div class="col-sm-12">
              <div id="dataContainer_${unique_id}">
                <p>${data.content}</p>
              </div>
            </div>
          </div>
          <div class="clearfix">
            <button type="button" class="btn btn-primary" id="btn_${unique_id}" onClick="addQuestion(${unique_id})">Add Question</button>
          </div>
        </div>
      </div>
    </div>`;
}

let common_components = {
  slider: `<div class="slidecontainer">
                  <input type="range" min="1" max="100" value="0" class="slider" id="myRange" onchange="getval(this)">
                  <p>Value: <span id="demo">0 %</span></p>
                </div>`,
  currency: `<span class="font-weight-bold">$1,000,000.00</span>`,
  text: ``,
  option: `<div class="input-group mb-3">
    <div class="input-group-prepend">
      <span class="input-group-text" id="inputGroup-sizing-default">Section Name</span>
    </div>
    <input type="text" class="form-control" aria-label="Default" id="section-name" aria-describedby="inputGroup-sizing-default">
  </div>

  <div class="form-check">
    <input class="form-check-input" type="checkbox" value="currency" id="flexCheckChecked" name="flexCheckChecked">
    <label class="form-check-label" for="flexCheckChecked">
      Display currency
    </label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="checkbox" value="slider" id="flexCheckChecked" name="flexCheckChecked">
    <label class="form-check-label" for="flexCheckChecked">
      Display slider
    </label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="checkbox" value="text" id="flexCheckChecked" name="flexCheckChecked">
    <label class="form-check-label" for="flexCheckChecked">
      Display text
    </label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="checkbox" value="text_output" id="flexCheckChecked" name="flexCheckChecked">
    <label class="form-check-label" for="flexCheckChecked">
      Display Text with output
    </label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="checkbox" value="dynamic" id="flexCheckChecked" name="flexCheckChecked">
    <label class="form-check-label" for="flexCheckChecked">
      Allow dynamic edit
    </label>
  </div>`,

}
