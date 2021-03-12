<?php

show_admin_bar( false );

function add_files() {
	define("TEMPLATE_DIRE", get_template_directory_uri());
	define("TEMPLATE_PATH", get_template_directory());

  function wp_css($css_name, $file_path) {
		wp_enqueue_style($css_name, TEMPLATE_DIRE . $file_path, array(), date('YmdGis', filemtime(TEMPLATE_PATH . $file_path)));
	}

	function wp_script($script_name, $file_path, $bool = true) {
		wp_enqueue_script($script_name, TEMPLATE_DIRE . $file_path, array(), date('YmdGis', filemtime(TEMPLATE_PATH . $file_path)), $bool);
	}

	wp_css('styles', '/asset/css/styles.css');
	wp_script('script', '/asset/js/script.js');
}
add_action('wp_enqueue_scripts', 'add_files', 1);

function add_slug_body_class( $classes ) {
	global $post;
	if ( isset( $post ) ) {
		$classes[] = $post->post_type . '-' . $post->post_name;
	}
	return $classes;
}
add_filter( 'body_class', 'add_slug_body_class' );