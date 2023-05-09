import {ImageWithWidthWithHeightResponse} from './imageWithWidthWithHeightResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeImageWithWidthWithHeightResponse(writer: SerializationWriter, imageWithWidthWithHeightResponse: ImageWithWidthWithHeightResponse | undefined = {} as ImageWithWidthWithHeightResponse) : void {
        writer.writeStringValue("value", imageWithWidthWithHeightResponse.value);
        writer.writeAdditionalData(imageWithWidthWithHeightResponse.additionalData);
}
