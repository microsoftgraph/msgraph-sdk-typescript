import {KeyValue} from './keyValue';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AddIn extends AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The id property */
    id?: string | undefined;
    /** The OdataType property */
    odataType?: string | undefined;
    /** The properties property */
    properties?: KeyValue[] | undefined;
    /** The type property */
    type?: string | undefined;
}
