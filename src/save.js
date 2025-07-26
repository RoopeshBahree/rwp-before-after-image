import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { beforeImageUrl, afterImageUrl } = attributes;
	const blockProps = useBlockProps.save({ className: 'rwp-before-after-block' });

	if (!beforeImageUrl || !afterImageUrl) return null;

	return (
		<div {...blockProps}>
			<div className="beer-slider" data-beer-label="Before">
				<img src={afterImageUrl} alt="After" />
				<div className="beer-reveal" data-beer-label="After">
					<img src={beforeImageUrl} alt="Before" />
				</div>
			</div>
		</div>
	);
}
