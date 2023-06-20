import {ImageResponse} from './imageResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeImageResponse(imageResponse: ImageResponse | undefined = {} as ImageResponse, writer: SerializationWriter) : void {
        writer.writeStringValue("value", imageResponse.value);
        writer.writeAdditionalData(imageResponse.additionalData);
}
