import {ExternalLink} from './externalLink';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface OnenotePagePreviewLinks extends AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The OdataType property */
    odataType?: string | undefined;
    /** The previewImageUrl property */
    previewImageUrl?: ExternalLink | undefined;
}
