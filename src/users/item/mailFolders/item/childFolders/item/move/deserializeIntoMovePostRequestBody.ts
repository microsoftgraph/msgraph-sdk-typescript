import {MovePostRequestBody} from './movePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMovePostRequestBody(movePostRequestBody: MovePostRequestBody | undefined = {} as MovePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "destinationId": n => { movePostRequestBody.destinationId = n.getStringValue(); },
    }
}
