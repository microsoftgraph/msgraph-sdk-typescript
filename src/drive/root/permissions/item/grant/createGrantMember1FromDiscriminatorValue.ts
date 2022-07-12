import {GrantMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGrantMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : GrantMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GrantMember1();
}
