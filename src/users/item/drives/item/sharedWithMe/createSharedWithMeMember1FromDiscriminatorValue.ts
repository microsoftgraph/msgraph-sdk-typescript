import {SharedWithMeMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSharedWithMeMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : SharedWithMeMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SharedWithMeMember1();
}
