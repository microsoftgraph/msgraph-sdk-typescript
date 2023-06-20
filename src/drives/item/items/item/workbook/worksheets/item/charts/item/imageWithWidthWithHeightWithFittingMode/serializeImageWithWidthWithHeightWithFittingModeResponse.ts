import {ImageWithWidthWithHeightWithFittingModeResponse} from './imageWithWidthWithHeightWithFittingModeResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeImageWithWidthWithHeightWithFittingModeResponse(imageWithWidthWithHeightWithFittingModeResponse: ImageWithWidthWithHeightWithFittingModeResponse | undefined = {} as ImageWithWidthWithHeightWithFittingModeResponse, writer: SerializationWriter) : void {
        writer.writeStringValue("value", imageWithWidthWithHeightWithFittingModeResponse.value);
        writer.writeAdditionalData(imageWithWidthWithHeightWithFittingModeResponse.additionalData);
}
