import {OnenotePagePreviewLinks} from './onenotePagePreviewLinks';

export interface OnenotePagePreview{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The links property */
    links?:OnenotePagePreviewLinks | undefined;
    /** The previewText property */
    previewText?:string | undefined;
}
