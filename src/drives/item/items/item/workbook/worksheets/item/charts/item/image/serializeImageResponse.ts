import type {ImageResponse} from './imageResponse';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeImageResponse(writer: SerializationWriter, imageResponse: ImageResponse | undefined = {} as ImageResponse) : void {
        writer.writeStringValue("value", imageResponse.value);
        writer.writeAdditionalData(imageResponse.additionalData);
}
