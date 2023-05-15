import {ResourceVisualization} from './resourceVisualization';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeResourceVisualization(writer: SerializationWriter, resourceVisualization: ResourceVisualization | undefined = {} as ResourceVisualization) : void {
        writer.writeStringValue("containerDisplayName", resourceVisualization.containerDisplayName);
        writer.writeStringValue("containerType", resourceVisualization.containerType);
        writer.writeStringValue("containerWebUrl", resourceVisualization.containerWebUrl);
        writer.writeStringValue("mediaType", resourceVisualization.mediaType);
        writer.writeStringValue("@odata.type", resourceVisualization.odataType);
        writer.writeStringValue("previewImageUrl", resourceVisualization.previewImageUrl);
        writer.writeStringValue("previewText", resourceVisualization.previewText);
        writer.writeStringValue("title", resourceVisualization.title);
        writer.writeStringValue("type", resourceVisualization.type);
        writer.writeAdditionalData(resourceVisualization.additionalData);
}
