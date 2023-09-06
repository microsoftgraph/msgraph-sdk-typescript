import { type UnsetReactionPostRequestBody } from './unsetReactionPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoUnsetReactionPostRequestBody(unsetReactionPostRequestBody: UnsetReactionPostRequestBody | undefined = {} as UnsetReactionPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "reactionType": n => { unsetReactionPostRequestBody.reactionType = n.getStringValue(); },
    }
}
