import { type ImageWithWidthWithHeightResponse } from './imageWithWidthWithHeightResponse';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeImageWithWidthWithHeightResponse(writer: SerializationWriter, imageWithWidthWithHeightResponse: ImageWithWidthWithHeightResponse | undefined = {} as ImageWithWidthWithHeightResponse) : void {
        writer.writeStringValue("value", imageWithWidthWithHeightResponse.value);
        writer.writeAdditionalData(imageWithWidthWithHeightResponse.additionalData);
}
