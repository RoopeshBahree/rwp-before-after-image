import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';

import { Button } from '@wordpress/components';

import { __ } from '@wordpress/i18n';

export default function Edit( { attributes, setAttributes } ) {
	const { beforeImageUrl, afterImageUrl } = attributes;

	// Get before image url.
	const onSelectBeforeImageUrl = (media) => {
		setAttributes({ beforeImageUrl: media.url });
	};

	// Get after image url.
	const onSelectAfterImageUrl = (media) => {
		setAttributes({ afterImageUrl: media.url });
	};
	
	return (
		<div {...blockProps}>
			<MediaUploadCheck>
				<MediaUpload
					onSelect={onSelectBeforeImageUrl}
					allowedTypes={['image']}
					render={({ open }) => (
						<Button onClick={open}	variant='secondary'>
							{ beforeImageUrl ? 'Change before Image' : 'Upload Before Image' }
						</Button>
					)}
				/>
			</MediaUploadCheck>
			{beforeImageUrl && <img src={beforeImageUrl} alt="Before" style={{ maxwidth: '100%' }} />}
			<MediaUploadCheck>
				<MediaUpload
					onSelect={onSelectAfterImageUrl}
					allowedTypes={['image']}
					render={({ open }) => (
						<Button onClick={open} variant='secondary'>
							{ afterImageUrl ? 'Change after Image' : 'Upload After Image' }
						</Button>
					)}
				/>
			</MediaUploadCheck>
			{afterImageUrl && <img src={afterImageUrl} alt='After' style={{ maxwidth: '100%' }} /> }
		</div>
	);
}
