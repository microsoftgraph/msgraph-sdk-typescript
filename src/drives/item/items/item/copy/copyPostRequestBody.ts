import type {ItemReference} from '../../../../../models/itemReference';
import type {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface CopyPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The name property
     */
    name?: string | undefined;
    /**
     * The parentReference property
     */
    parentReference?: ItemReference | undefined;
}
