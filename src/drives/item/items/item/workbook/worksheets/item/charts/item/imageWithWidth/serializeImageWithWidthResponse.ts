import {ImageWithWidthResponse} from './imageWithWidthResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeImageWithWidthResponse(imageWithWidthResponse: ImageWithWidthResponse | undefined = {} as ImageWithWidthResponse, writer: SerializationWriter) : void {
        writer.writeStringValue("value", imageWithWidthResponse.value);
        writer.writeAdditionalData(imageWithWidthResponse.additionalData);
}
