import { type AssociateWithHubSitesPostRequestBody } from './associateWithHubSitesPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAssociateWithHubSitesPostRequestBody(writer: SerializationWriter, associateWithHubSitesPostRequestBody: AssociateWithHubSitesPostRequestBody | undefined = {} as AssociateWithHubSitesPostRequestBody) : void {
        writer.writeCollectionOfPrimitiveValues<string>("hubSiteUrls", associateWithHubSitesPostRequestBody.hubSiteUrls);
        writer.writeBooleanValue("propagateToExistingLists", associateWithHubSitesPostRequestBody.propagateToExistingLists);
        writer.writeAdditionalData(associateWithHubSitesPostRequestBody.additionalData);
}
