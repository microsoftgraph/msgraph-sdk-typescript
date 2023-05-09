import {AssociateWithHubSitesPostRequestBody} from './associateWithHubSitesPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAssociateWithHubSitesPostRequestBody(writer: SerializationWriter, associateWithHubSitesPostRequestBody: AssociateWithHubSitesPostRequestBody | undefined = {} as AssociateWithHubSitesPostRequestBody) : void {
        writer.writeCollectionOfPrimitiveValues<string>("hubSiteUrls", associateWithHubSitesPostRequestBody.hubSiteUrls);
        writer.writeBooleanValue("propagateToExistingLists", associateWithHubSitesPostRequestBody.propagateToExistingLists);
        writer.writeAdditionalData(associateWithHubSitesPostRequestBody.additionalData);
}
