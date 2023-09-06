import { type ImageWithWidthWithHeightWithFittingModeResponse } from './imageWithWidthWithHeightWithFittingModeResponse';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeImageWithWidthWithHeightWithFittingModeResponse(writer: SerializationWriter, imageWithWidthWithHeightWithFittingModeResponse: ImageWithWidthWithHeightWithFittingModeResponse | undefined = {} as ImageWithWidthWithHeightWithFittingModeResponse) : void {
        writer.writeStringValue("value", imageWithWidthWithHeightWithFittingModeResponse.value);
        writer.writeAdditionalData(imageWithWidthWithHeightWithFittingModeResponse.additionalData);
}
