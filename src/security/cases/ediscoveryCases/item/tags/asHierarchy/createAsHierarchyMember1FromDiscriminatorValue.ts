import {AsHierarchyMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAsHierarchyMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : AsHierarchyMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AsHierarchyMember1();
}
