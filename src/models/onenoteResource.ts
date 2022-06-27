import {OnenoteEntityBaseModel} from './onenoteEntityBaseModel';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface OnenoteResource extends Partial<AdditionalDataHolder>, OnenoteEntityBaseModel, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The content stream */
    content?: string | undefined;
    /** The URL for downloading the content */
    contentUrl?: string | undefined;
}
