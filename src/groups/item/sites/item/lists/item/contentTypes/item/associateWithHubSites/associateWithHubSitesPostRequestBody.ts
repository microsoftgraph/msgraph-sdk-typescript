import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AssociateWithHubSitesPostRequestBody extends AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The hubSiteUrls property */
    hubSiteUrls?: string[] | undefined;
    /** The propagateToExistingLists property */
    propagateToExistingLists?: boolean | undefined;
}
