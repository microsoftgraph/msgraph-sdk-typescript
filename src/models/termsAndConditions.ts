import {Entity} from './entity';
import {TermsAndConditionsAcceptanceStatus} from './termsAndConditionsAcceptanceStatus';
import {TermsAndConditionsAssignment} from './termsAndConditionsAssignment';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TermsAndConditions extends Entity, Parsable {
    /**
     * Administrator-supplied explanation of the terms and conditions, typically describing what it means to accept the terms and conditions set out in the T&C policy. This is shown to the user on prompts to accept the T&C policy.
     */
    acceptanceStatement?: string | undefined;
    /**
     * The list of acceptance statuses for this T&C policy.
     */
    acceptanceStatuses?: TermsAndConditionsAcceptanceStatus[] | undefined;
    /**
     * The list of assignments for this T&C policy.
     */
    assignments?: TermsAndConditionsAssignment[] | undefined;
    /**
     * Administrator-supplied body text of the terms and conditions, typically the terms themselves. This is shown to the user on prompts to accept the T&C policy.
     */
    bodyText?: string | undefined;
    /**
     * DateTime the object was created.
     */
    createdDateTime?: Date | undefined;
    /**
     * Administrator-supplied description of the T&C policy.
     */
    description?: string | undefined;
    /**
     * Administrator-supplied name for the T&C policy.
     */
    displayName?: string | undefined;
    /**
     * DateTime the object was last modified.
     */
    lastModifiedDateTime?: Date | undefined;
    /**
     * Administrator-supplied title of the terms and conditions. This is shown to the user on prompts to accept the T&C policy.
     */
    title?: string | undefined;
    /**
     * Integer indicating the current version of the terms. Incremented when an administrator makes a change to the terms and wishes to require users to re-accept the modified T&C policy.
     */
    version?: number | undefined;
}
