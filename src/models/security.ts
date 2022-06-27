import {Alert} from './alert';
import {Entity} from './entity';
import {SecureScore} from './secureScore';
import {SecureScoreControlProfile} from './secureScoreControlProfile';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Security extends Entity, Partial<Parsable> {
    /** Notifications for suspicious or potential security issues in a customer’s tenant. */
    alerts?: Alert[] | undefined;
    /** The secureScoreControlProfiles property */
    secureScoreControlProfiles?: SecureScoreControlProfile[] | undefined;
    /** The secureScores property */
    secureScores?: SecureScore[] | undefined;
}
