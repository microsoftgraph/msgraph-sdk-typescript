import type {UnsetReactionPostRequestBody} from './unsetReactionPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnsetReactionPostRequestBody(writer: SerializationWriter, unsetReactionPostRequestBody: UnsetReactionPostRequestBody | undefined = {} as UnsetReactionPostRequestBody) : void {
        writer.writeStringValue("reactionType", unsetReactionPostRequestBody.reactionType);
        writer.writeAdditionalData(unsetReactionPostRequestBody.additionalData);
}
