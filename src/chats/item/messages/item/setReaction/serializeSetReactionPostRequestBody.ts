import { type SetReactionPostRequestBody } from './setReactionPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeSetReactionPostRequestBody(writer: SerializationWriter, setReactionPostRequestBody: SetReactionPostRequestBody | undefined = {} as SetReactionPostRequestBody) : void {
        writer.writeStringValue("reactionType", setReactionPostRequestBody.reactionType);
        writer.writeAdditionalData(setReactionPostRequestBody.additionalData);
}
