import type {ImageWithWidthWithHeightWithFittingModeResponse} from './imageWithWidthWithHeightWithFittingModeResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoImageWithWidthWithHeightWithFittingModeResponse(imageWithWidthWithHeightWithFittingModeResponse: ImageWithWidthWithHeightWithFittingModeResponse | undefined = {} as ImageWithWidthWithHeightWithFittingModeResponse) : Record<string, (node: ParseNode) => void> {
    return {
        "value": n => { imageWithWidthWithHeightWithFittingModeResponse.value = n.getStringValue(); },
    }
}
