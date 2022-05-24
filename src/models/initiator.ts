import {Identity} from './identity';
import {InitiatorType} from './initiatorType';

export interface Initiator extends Identity{
    /** Type of initiator. Possible values are: user, application, system, unknownFutureValue. */
    initiatorType?:InitiatorType | undefined;
}
