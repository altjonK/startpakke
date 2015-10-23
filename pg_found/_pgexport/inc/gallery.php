<?php
add_filter( 'post_gallery', 'f5_gallery', 10, 2 );

function f5_gallery( $output, $attr ) {
	global $post;

	if ( isset( $attr['orderby'] ) ) {
		$attr['orderby'] = sanitize_sql_orderby( $attr['orderby'] );
		if ( ! $attr['orderby'] ) {
			unset( $attr['orderby'] );
		}
	}

	extract( shortcode_atts( array(
		'order'   => 'ASC',
		'orderby' => 'menu_order ID',
		'id'      => $post->ID,
		'columns' => 3,
		'size'    => 'thumbnail',
		'include' => '',
		'exclude' => '',
	), $attr ) );


	$id = intval( $id );
	if ( 'RAND' === $order ) {
		$orderby = 'none';
	}

	if ( ! empty( $include ) ) {
		$include         = preg_replace( '/[^0-9,]+/', '', $include );
		$attachments_arr = get_posts( array(
			'include'        => $include,
			'post_status'    => 'inherit',
			'post_type'      => 'attachment',
			'post_mime_type' => 'image',
			'order'          => $order,
			'orderby'        => $orderby
		) );

		$attachments = array();
		foreach ( $attachments_arr as $key => $val ) {
			$attachments[ $val->ID ] = $attachments_arr[ $key ];
		}
	}

	if ( empty( $attachments ) ) {
		return '';
	}

	$output = '<ul class="small-block-grid-2 medium-block-grid-' . $columns . '"  data-clearing>';

	foreach ( $attachments as $id => $attachment ) {
		$img     = wp_get_attachment_image_src( $id, $size );
		$img_big = wp_get_attachment_image_src( $id, 'full' );

		$caption = ( ! $attachment->post_excerpt ) ? '' : ' data-caption="' . esc_attr( $attachment->post_excerpt ) . '" ';

		$output .= '<li><a href="' . $img_big[0] . '"><img src="' . $img[0] . '" ' . $caption . ' class="th" alt="' . esc_attr( $post->title ) . '" /></a></li>';
	}

	$output .= '</ul>';

	return $output;
}

?>