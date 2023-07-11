import {RiskServicePrincipalActivity} from './riskServicePrincipalActivity';
import {RiskyServicePrincipal} from './riskyServicePrincipal';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface RiskyServicePrincipalHistoryItem extends Parsable, RiskyServicePrincipal {
    /**
     * The activity related to service principal risk level change.
     */
    activity?: RiskServicePrincipalActivity | undefined;
    /**
     * The identifier of the actor of the operation.
     */
    initiatedBy?: string | undefined;
}
