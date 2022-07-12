import {ForwardMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createForwardMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : ForwardMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ForwardMember1();
}
