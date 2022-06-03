import {Presence} from './presence';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface PresenceCollectionResponse extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The nextLink property */
    nextLink?: string | undefined;
    /** The value property */
    value?: Presence[] | undefined;
}
