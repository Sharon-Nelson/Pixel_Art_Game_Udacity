const $tableElement = $('#pixelCanvas');
const $inputHeight = $('#inputHeight');
const $inputWidth = $('#inputWidth');
const $colorPicker = $('#colorPicker');

$('#sizePicker').submit(event => {
    event.preventDefault();
	let width = $inputWidth.val();
    let height = $inputHeight.val();
	$tableElement.html(''); 
	makeGrid(height, width);
    addCellClickListener();
});
function makeGrid(height, width) {
    for(let x = 0; x < height; x++) {
        $tableElement.append('<tr></tr>');};
	for(let x = 0; x < width; x++) {
        $('tr').append('<td></td>');};
};
function addCellClickListener() {
    $('td').click( event => {
        let color = $colorPicker.val();
        $(event.currentTarget).css("background-color", color)
    });
};


