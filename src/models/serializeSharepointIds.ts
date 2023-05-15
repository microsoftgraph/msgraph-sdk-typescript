import {SharepointIds} from './sharepointIds';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSharepointIds(writer: SerializationWriter, sharepointIds: SharepointIds | undefined = {} as SharepointIds) : void {
        writer.writeStringValue("listId", sharepointIds.listId);
        writer.writeStringValue("listItemId", sharepointIds.listItemId);
        writer.writeStringValue("listItemUniqueId", sharepointIds.listItemUniqueId);
        writer.writeStringValue("@odata.type", sharepointIds.odataType);
        writer.writeStringValue("siteId", sharepointIds.siteId);
        writer.writeStringValue("siteUrl", sharepointIds.siteUrl);
        writer.writeStringValue("tenantId", sharepointIds.tenantId);
        writer.writeStringValue("webId", sharepointIds.webId);
        writer.writeAdditionalData(sharepointIds.additionalData);
}
