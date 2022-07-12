import {DeclineMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeclineMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : DeclineMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeclineMember1();
}
