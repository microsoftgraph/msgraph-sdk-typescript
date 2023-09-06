import { type AssociateWithHubSitesPostRequestBody } from './associateWithHubSitesPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAssociateWithHubSitesPostRequestBody(associateWithHubSitesPostRequestBody: AssociateWithHubSitesPostRequestBody | undefined = {} as AssociateWithHubSitesPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "hubSiteUrls": n => { associateWithHubSitesPostRequestBody.hubSiteUrls = n.getCollectionOfPrimitiveValues<string>(); },
        "propagateToExistingLists": n => { associateWithHubSitesPostRequestBody.propagateToExistingLists = n.getBooleanValue(); },
    }
}
