import {DirectoryObject} from './directoryObject';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface PolicyBase extends Partial<AdditionalDataHolder>, DirectoryObject, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Description for this policy. Required. */
    description?: string | undefined;
    /** Display name for this policy. Required. */
    displayName?: string | undefined;
}
