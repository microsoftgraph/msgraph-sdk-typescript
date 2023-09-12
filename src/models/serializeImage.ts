import { type Image } from './image';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeImage(writer: SerializationWriter, image: Image | undefined = {} as Image) : void {
        writer.writeNumberValue("height", image.height);
        writer.writeStringValue("@odata.type", image.odataType);
        writer.writeNumberValue("width", image.width);
        writer.writeAdditionalData(image.additionalData);
}
