import type {ImageWithWidthResponse} from './imageWithWidthResponse';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeImageWithWidthResponse(writer: SerializationWriter, imageWithWidthResponse: ImageWithWidthResponse | undefined = {} as ImageWithWidthResponse) : void {
        writer.writeStringValue("value", imageWithWidthResponse.value);
        writer.writeAdditionalData(imageWithWidthResponse.additionalData);
}
