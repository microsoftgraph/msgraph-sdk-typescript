import {TeamInfo} from './teamInfo';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AssociatedTeamInfo extends Partial<AdditionalDataHolder>, Partial<Parsable>, TeamInfo {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
}
