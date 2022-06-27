import {Identity} from './identity';
import {InitiatorType} from './initiatorType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Initiator extends Partial<AdditionalDataHolder>, Identity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Type of initiator. Possible values are: user, application, system, unknownFutureValue. */
    initiatorType?: InitiatorType | undefined;
}
