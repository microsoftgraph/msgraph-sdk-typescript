import {AddKeyMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAddKeyMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : AddKeyMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AddKeyMember1();
}
