import { type ImageInfo } from './imageInfo';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeImageInfo(writer: SerializationWriter, imageInfo: ImageInfo | undefined = {} as ImageInfo) : void {
        writer.writeBooleanValue("addImageQuery", imageInfo.addImageQuery);
        writer.writeStringValue("alternateText", imageInfo.alternateText);
        writer.writeStringValue("alternativeText", imageInfo.alternativeText);
        writer.writeStringValue("iconUrl", imageInfo.iconUrl);
        writer.writeStringValue("@odata.type", imageInfo.odataType);
        writer.writeAdditionalData(imageInfo.additionalData);
}
