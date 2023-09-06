import { type MovePostRequestBody } from './movePostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeMovePostRequestBody(writer: SerializationWriter, movePostRequestBody: MovePostRequestBody | undefined = {} as MovePostRequestBody) : void {
        writer.writeStringValue("destinationId", movePostRequestBody.destinationId);
        writer.writeAdditionalData(movePostRequestBody.additionalData);
}
