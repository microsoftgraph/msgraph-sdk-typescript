import {ItemReference} from '../../../../../../../../../models/itemReference';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface CopyToDefaultContentLocationPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The destinationFileName property
     */
    destinationFileName?: string | undefined;
    /**
     * The sourceFile property
     */
    sourceFile?: ItemReference | undefined;
}
