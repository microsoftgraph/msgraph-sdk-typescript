import {MovePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMovePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : MovePostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MovePostRequestBody();
}
