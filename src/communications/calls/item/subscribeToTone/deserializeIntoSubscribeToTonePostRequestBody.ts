import type {SubscribeToTonePostRequestBody} from './subscribeToTonePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSubscribeToTonePostRequestBody(subscribeToTonePostRequestBody: SubscribeToTonePostRequestBody | undefined = {} as SubscribeToTonePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "clientContext": n => { subscribeToTonePostRequestBody.clientContext = n.getStringValue(); },
    }
}
