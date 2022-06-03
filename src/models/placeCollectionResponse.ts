import {Place} from './place';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface PlaceCollectionResponse extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The nextLink property */
    nextLink?: string | undefined;
    /** The value property */
    value?: Place[] | undefined;
}
