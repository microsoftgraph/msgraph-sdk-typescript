import {SetOrderMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSetOrderMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : SetOrderMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SetOrderMember1();
}
