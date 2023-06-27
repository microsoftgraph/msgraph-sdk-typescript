import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AccessReviewReviewer extends Entity, Parsable {
    /**
     * The date when the reviewer was added for the access review.
     */
    createdDateTime?: Date | undefined;
    /**
     * Name of reviewer.
     */
    displayName?: string | undefined;
    /**
     * User principal name of the reviewer.
     */
    userPrincipalName?: string | undefined;
}
