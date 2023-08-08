import type {ImageWithWidthWithHeightResponse} from './imageWithWidthWithHeightResponse';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoImageWithWidthWithHeightResponse(imageWithWidthWithHeightResponse: ImageWithWidthWithHeightResponse | undefined = {} as ImageWithWidthWithHeightResponse) : Record<string, (node: ParseNode) => void> {
    return {
        "value": n => { imageWithWidthWithHeightResponse.value = n.getStringValue(); },
    }
}
