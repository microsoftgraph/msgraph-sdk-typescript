import { type ImageResponse } from './imageResponse';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoImageResponse(imageResponse: ImageResponse | undefined = {} as ImageResponse) : Record<string, (node: ParseNode) => void> {
    return {
        "value": n => { imageResponse.value = n.getStringValue(); },
    }
}
