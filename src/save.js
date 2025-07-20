export default function save( { attributes } ) {
	const { beforeImageUrl, afterImageUrl } = attributes;
	
	//return <p { ...useBlockProps.save() }></p>;

	return (
		<div {...blockProps}>
			{ beforeImageUrl && <img src="{beforeImageUrl}" alt="Before Image"  />}
			{ afterImageUrl && <img src="{afterImageUrl}" alt="After Image" /> }
		</div>
	);

}
