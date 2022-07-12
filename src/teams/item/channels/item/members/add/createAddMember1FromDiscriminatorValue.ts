import {AddMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAddMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : AddMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AddMember1();
}
