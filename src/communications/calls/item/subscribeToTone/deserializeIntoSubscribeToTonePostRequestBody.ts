import { type SubscribeToTonePostRequestBody } from './subscribeToTonePostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoSubscribeToTonePostRequestBody(subscribeToTonePostRequestBody: SubscribeToTonePostRequestBody | undefined = {} as SubscribeToTonePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "clientContext": n => { subscribeToTonePostRequestBody.clientContext = n.getStringValue(); },
    }
}
