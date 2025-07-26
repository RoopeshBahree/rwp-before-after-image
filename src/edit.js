import { useBlockProps, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import { useEffect, useRef } from '@wordpress/element';
import 'beerslider/dist/BeerSlider.css'; // Import BeerSlider CSS
import BeerSlider from 'beerslider';

export default function Edit({ attributes, setAttributes }) {
	const { beforeImageUrl, afterImageUrl } = attributes;
	const sliderRef = useRef(null);
	const blockProps = useBlockProps({ className: 'rwp-before-after-block' });

	useEffect(() => {
		if (sliderRef.current && beforeImageUrl && afterImageUrl) {
			new BeerSlider(sliderRef.current);
		}
	}, [beforeImageUrl, afterImageUrl]);

	const onBeforeSelect = (media) => setAttributes({ beforeImageUrl: media.url });
	const onAfterSelect = (media) => setAttributes({ afterImageUrl: media.url });

	return (
		<div {...blockProps}>
			<div className="rwp-controls">
				<MediaUploadCheck>
					<MediaUpload
						onSelect={onBeforeSelect}
						allowedTypes={['image']}
						render={({ open }) => (
							<Button onClick={open} variant="secondary" style={{ marginRight: '10px' }}>
								{beforeImageUrl ? 'Change Before Image' : 'Upload Before Image'}
							</Button>
						)}
					/>
					<MediaUpload
						onSelect={onAfterSelect}
						allowedTypes={['image']}
						render={({ open }) => (
							<Button onClick={open} variant="secondary">
								{afterImageUrl ? 'Change After Image' : 'Upload After Image'}
							</Button>
						)}
					/>
				</MediaUploadCheck>
			</div>

			{beforeImageUrl && afterImageUrl && (
				<div ref={sliderRef} className="beer-slider" data-beer-label="Before">
					<img src={afterImageUrl} alt="After" />
					<div className="beer-reveal" data-beer-label="After">
						<img src={beforeImageUrl} alt="Before" />
					</div>
				</div>
			)}
		</div>
	);
}
