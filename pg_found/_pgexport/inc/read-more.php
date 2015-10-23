<?php
/* Modify read more */

add_filter( 'the_content_more_link', 'modify_read_more_link' );
function modify_read_more_link() {
return '<p><hr></p><a class="more-link button tiny" href="' . get_permalink() . '">LES MER</a>';
}

?>