import {CopyMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCopyMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : CopyMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CopyMember1();
}
