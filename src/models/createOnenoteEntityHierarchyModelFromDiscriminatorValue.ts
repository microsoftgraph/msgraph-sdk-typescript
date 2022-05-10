import {OnenoteEntityHierarchyModelImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOnenoteEntityHierarchyModelFromDiscriminatorValue(parseNode: ParseNode | undefined) : OnenoteEntityHierarchyModelImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OnenoteEntityHierarchyModelImpl();
}
