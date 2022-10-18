 var flexContainer = {
	flexDirection: [
		'row',
		'row-reverse',
		'column',
		'column-reverse',
		'gap'
	],

	flexWrap: [
		'nowrap',
		'wrap',
		'wrap-reverse'
	],

	flexJustify: 	[
		'flex-start',
		'flex-end',
		'center',
		'space-between',
		'space-around',
		'space-evenly',
		'start',
		'end',
		'left',
		'right ... + safe',
		'unsafe'
	],
	
	// normal (default): items are packed in their default position as if no value was set.
	// flex-start / start: items packed to the start of the container. The (more supported) flex-start honors the flex-direction while start honors the writing-mode direction.
	// flex-end / end: items packed to the end of the container. The (more support) flex-end honors the flex-direction while end honors the writing-mode direction.
	// center: items centered in the container
	// space-between: items evenly distributed; the first line is at the start of the container while the last one is at the end
	// space-around: items evenly distributed with equal space around each line
	// space-evenly: items are evenly distributed with equal space around them
	// stretch: lines stretch to take up the remaining space
	alignContent: [
		'flex-start',
		'flex-end',
		'center',
		'space-between',
		'space-around',
		'space-evenly',
		'stretch',
		'start',
		'end',
		'baseline'
	],

	alignItems: [],
};

var $flexContainerNode = $('#main-example');

if($flexContainerNode) {
	var $newBox = $('<div class="new-box"></div>');
	$flexContainerNode.add($newBox);
}