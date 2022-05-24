import {MovePostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMovePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : MovePostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MovePostRequestBodyImpl();
}
