import {Entity} from './entity';

export interface AccessReviewReviewer extends Entity{
    /** The date when the reviewer was added for the access review. */
    createdDateTime?:Date | undefined;
    /** Name of reviewer. */
    displayName?:string | undefined;
    /** User principal name of the user. */
    userPrincipalName?:string | undefined;
}
