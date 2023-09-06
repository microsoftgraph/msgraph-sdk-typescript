import { deserializeIntoMovePostRequestBody } from './deserializeIntoMovePostRequestBody';
import { type MovePostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createMovePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMovePostRequestBody;
}
