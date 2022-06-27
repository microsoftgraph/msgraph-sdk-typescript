import {RiskUserActivity} from './riskUserActivity';
import {RiskyUser} from './riskyUser';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface RiskyUserHistoryItem extends Partial<AdditionalDataHolder>, Partial<Parsable>, RiskyUser {
    /** The activity related to user risk level change. */
    activity?: RiskUserActivity | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The id of actor that does the operation. */
    initiatedBy?: string | undefined;
    /** The id of the user. */
    userId?: string | undefined;
}
