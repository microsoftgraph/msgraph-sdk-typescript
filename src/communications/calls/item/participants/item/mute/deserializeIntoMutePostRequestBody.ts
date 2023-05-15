import {MutePostRequestBody} from './mutePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMutePostRequestBody(mutePostRequestBody: MutePostRequestBody | undefined = {} as MutePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "clientContext": n => { mutePostRequestBody.clientContext = n.getStringValue(); },
    }
}
