import {Extension} from './extension';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface OpenTypeExtension extends Partial<AdditionalDataHolder>, Extension, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** A unique text identifier for an open type data extension. Required. */
    extensionName?: string | undefined;
}
