var menu_list = [];

$(document).ready(function () {
 
  $.get("https://davids-restaurant.herokuapp.com/menu_items.json", function (data) {
    menu_list = data.menu_items;
    menu_list.forEach((item, index) => {
      $("#menu").append(`<option value=${index}>${item.name}</option>`);
    })
  });

 
  $("#menu").change((ele) => {
    const selected = menu_list[ele.target.value];
    $('#dataholder').html(
      `<p> ID - ${selected.id} </p>
      <p> Short Name - ${selected.short_name} </p>
      <p> Name - ${selected.name} </p>
      <p> Description - ${selected.description} </p>
      <p> Price small - ${selected.price_small} </p>
      <p> Price Large - ${selected.price_large} </p>
      <p> Small Portion Name - ${selected.small_portion_name} </p>
      <p> Large Portion Name - ${selected.large_portion_name} </p>
      `
    )
  })
}); 