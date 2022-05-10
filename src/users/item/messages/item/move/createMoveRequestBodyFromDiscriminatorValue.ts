import {MoveRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMoveRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : MoveRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MoveRequestBodyImpl();
}
