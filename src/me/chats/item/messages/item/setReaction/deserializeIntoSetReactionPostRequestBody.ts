import { type SetReactionPostRequestBody } from './setReactionPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoSetReactionPostRequestBody(setReactionPostRequestBody: SetReactionPostRequestBody | undefined = {} as SetReactionPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "reactionType": n => { setReactionPostRequestBody.reactionType = n.getStringValue(); },
    }
}
