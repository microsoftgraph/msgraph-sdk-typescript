import type {SetReactionPostRequestBody} from './setReactionPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSetReactionPostRequestBody(writer: SerializationWriter, setReactionPostRequestBody: SetReactionPostRequestBody | undefined = {} as SetReactionPostRequestBody) : void {
        writer.writeStringValue("reactionType", setReactionPostRequestBody.reactionType);
        writer.writeAdditionalData(setReactionPostRequestBody.additionalData);
}
