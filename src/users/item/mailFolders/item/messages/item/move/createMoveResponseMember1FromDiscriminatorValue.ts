import {MoveResponseMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMoveResponseMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : MoveResponseMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MoveResponseMember1();
}
