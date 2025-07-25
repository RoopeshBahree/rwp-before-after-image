<?php
// This file is generated. Do not modify it manually.
return array(
	'build' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/rwp-before-after-image',
		'version' => '0.1.0',
		'title' => 'Rwp Before After Image',
		'icon' => 'images-alt2',
		'category' => 'widgets',
		'description' => 'Display your site\'s copyright date.',
		'example' => array(
			
		),
		'attributes' => array(
			'beforeImageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'afterImageUrl' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'supports' => array(
			'color' => array(
				'background' => false,
				'text' => true
			),
			'html' => false,
			'typography' => array(
				'fontSize' => true
			)
		),
		'textdomain' => 'rwp-before-after-image',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	)
);
