import {ItemReference} from './itemReference';
import {serializeSharepointIds} from './serializeSharepointIds';
import {SharepointIds} from './sharepointIds';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeItemReference(writer: SerializationWriter, itemReference: ItemReference | undefined = {} as ItemReference) : void {
        writer.writeStringValue("driveId", itemReference.driveId);
        writer.writeStringValue("driveType", itemReference.driveType);
        writer.writeStringValue("id", itemReference.id);
        writer.writeStringValue("name", itemReference.name);
        writer.writeStringValue("@odata.type", itemReference.odataType);
        writer.writeStringValue("path", itemReference.path);
        writer.writeStringValue("shareId", itemReference.shareId);
        writer.writeObjectValue<SharepointIds>("sharepointIds", itemReference.sharepointIds, serializeSharepointIds);
        writer.writeStringValue("siteId", itemReference.siteId);
        writer.writeAdditionalData(itemReference.additionalData);
}
