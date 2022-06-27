import {Entity} from './entity';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AccessReviewReviewer extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The date when the reviewer was added for the access review. */
    createdDateTime?: Date | undefined;
    /** Name of reviewer. */
    displayName?: string | undefined;
    /** User principal name of the user. */
    userPrincipalName?: string | undefined;
}
