import {Identity} from './identity';
import {InitiatorType} from './initiatorType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Initiator extends Identity, Parsable {
    /**
     * Type of initiator. Possible values are: user, application, system, unknownFutureValue.
     */
    initiatorType?: InitiatorType | undefined;
}
