import {AddPasswordMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAddPasswordMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : AddPasswordMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AddPasswordMember1();
}
