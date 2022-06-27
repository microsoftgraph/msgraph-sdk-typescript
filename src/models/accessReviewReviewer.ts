import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AccessReviewReviewer extends Entity, Partial<Parsable> {
    /** The date when the reviewer was added for the access review. */
    createdDateTime?: Date | undefined;
    /** Name of reviewer. */
    displayName?: string | undefined;
    /** User principal name of the user. */
    userPrincipalName?: string | undefined;
}
