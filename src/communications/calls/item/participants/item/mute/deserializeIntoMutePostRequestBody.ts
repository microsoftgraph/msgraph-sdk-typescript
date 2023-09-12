import { type MutePostRequestBody } from './mutePostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoMutePostRequestBody(mutePostRequestBody: MutePostRequestBody | undefined = {} as MutePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "clientContext": n => { mutePostRequestBody.clientContext = n.getStringValue(); },
    }
}
