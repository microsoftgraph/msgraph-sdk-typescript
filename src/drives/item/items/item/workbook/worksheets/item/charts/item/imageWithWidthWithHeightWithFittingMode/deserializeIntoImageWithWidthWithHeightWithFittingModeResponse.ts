import { type ImageWithWidthWithHeightWithFittingModeResponse } from './imageWithWidthWithHeightWithFittingModeResponse';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoImageWithWidthWithHeightWithFittingModeResponse(imageWithWidthWithHeightWithFittingModeResponse: ImageWithWidthWithHeightWithFittingModeResponse | undefined = {} as ImageWithWidthWithHeightWithFittingModeResponse) : Record<string, (node: ParseNode) => void> {
    return {
        "value": n => { imageWithWidthWithHeightWithFittingModeResponse.value = n.getStringValue(); },
    }
}
