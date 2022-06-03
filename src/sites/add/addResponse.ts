import {Site} from '../../models/site';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AddResponse extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The value property */
    value?: Site[] | undefined;
}
