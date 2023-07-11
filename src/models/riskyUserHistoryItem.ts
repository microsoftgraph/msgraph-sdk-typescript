import {RiskUserActivity} from './riskUserActivity';
import {RiskyUser} from './riskyUser';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface RiskyUserHistoryItem extends Parsable, RiskyUser {
    /**
     * The activity related to user risk level change.
     */
    activity?: RiskUserActivity | undefined;
    /**
     * The ID of actor that does the operation.
     */
    initiatedBy?: string | undefined;
    /**
     * The ID of the user.
     */
    userId?: string | undefined;
}
