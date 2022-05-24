import {RiskUserActivity} from './riskUserActivity';
import {RiskyUser} from './riskyUser';

export interface RiskyUserHistoryItem extends RiskyUser{
    /** The activity related to user risk level change. */
    activity?:RiskUserActivity | undefined;
    /** The id of actor that does the operation. */
    initiatedBy?:string | undefined;
    /** The id of the user. */
    userId?:string | undefined;
}
