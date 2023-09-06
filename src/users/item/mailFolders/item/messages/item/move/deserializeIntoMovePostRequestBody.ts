import { type MovePostRequestBody } from './movePostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoMovePostRequestBody(movePostRequestBody: MovePostRequestBody | undefined = {} as MovePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "destinationId": n => { movePostRequestBody.destinationId = n.getStringValue(); },
    }
}
