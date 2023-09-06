import { type ImageWithWidthResponse } from './imageWithWidthResponse';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoImageWithWidthResponse(imageWithWidthResponse: ImageWithWidthResponse | undefined = {} as ImageWithWidthResponse) : Record<string, (node: ParseNode) => void> {
    return {
        "value": n => { imageWithWidthResponse.value = n.getStringValue(); },
    }
}
