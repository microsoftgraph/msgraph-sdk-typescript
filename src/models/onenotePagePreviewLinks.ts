import {ExternalLink} from './externalLink';

export interface OnenotePagePreviewLinks{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The previewImageUrl property */
    previewImageUrl?:ExternalLink | undefined;
}
