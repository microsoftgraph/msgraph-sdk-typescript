import {DelegatedPermissionClassification} from './delegatedPermissionClassification';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface DelegatedPermissionClassificationCollectionResponse extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown> | undefined;
    /** The nextLink property */
    nextLink?: string | undefined;
    /** The value property */
    value?: DelegatedPermissionClassification[] | undefined;
}
