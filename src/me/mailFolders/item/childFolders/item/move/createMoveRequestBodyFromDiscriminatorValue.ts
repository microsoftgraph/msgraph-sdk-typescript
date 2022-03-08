import {MoveRequestBody} from './moveRequestBody';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMoveRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : MoveRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MoveRequestBody();
}
