import {Entity} from './entity';
import {TermsAndConditions} from './termsAndConditions';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TermsAndConditionsAcceptanceStatus extends Entity, Parsable {
    /**
     * DateTime when the terms were last accepted by the user.
     */
    acceptedDateTime?: Date | undefined;
    /**
     * Most recent version number of the T&C accepted by the user.
     */
    acceptedVersion?: number | undefined;
    /**
     * Navigation link to the terms and conditions that are assigned.
     */
    termsAndConditions?: TermsAndConditions | undefined;
    /**
     * Display name of the user whose acceptance the entity represents.
     */
    userDisplayName?: string | undefined;
    /**
     * The userPrincipalName of the User that accepted the term.
     */
    userPrincipalName?: string | undefined;
}
