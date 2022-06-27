import {Alert} from './alert';
import {Entity} from './entity';
import {SecureScore} from './secureScore';
import {SecureScoreControlProfile} from './secureScoreControlProfile';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Security extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Notifications for suspicious or potential security issues in a customer’s tenant. */
    alerts?: Alert[] | undefined;
    /** The secureScoreControlProfiles property */
    secureScoreControlProfiles?: SecureScoreControlProfile[] | undefined;
    /** The secureScores property */
    secureScores?: SecureScore[] | undefined;
}
