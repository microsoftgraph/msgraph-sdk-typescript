import {ImageWithWidthWithHeightWithFittingModeResponse} from './imageWithWidthWithHeightWithFittingModeResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeImageWithWidthWithHeightWithFittingModeResponse(writer: SerializationWriter, imageWithWidthWithHeightWithFittingModeResponse: ImageWithWidthWithHeightWithFittingModeResponse | undefined = {} as ImageWithWidthWithHeightWithFittingModeResponse) : void {
        writer.writeStringValue("value", imageWithWidthWithHeightWithFittingModeResponse.value);
        writer.writeAdditionalData(imageWithWidthWithHeightWithFittingModeResponse.additionalData);
}
