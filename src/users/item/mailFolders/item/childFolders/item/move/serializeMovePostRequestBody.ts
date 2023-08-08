import type {MovePostRequestBody} from './movePostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMovePostRequestBody(writer: SerializationWriter, movePostRequestBody: MovePostRequestBody | undefined = {} as MovePostRequestBody) : void {
        writer.writeStringValue("destinationId", movePostRequestBody.destinationId);
        writer.writeAdditionalData(movePostRequestBody.additionalData);
}
