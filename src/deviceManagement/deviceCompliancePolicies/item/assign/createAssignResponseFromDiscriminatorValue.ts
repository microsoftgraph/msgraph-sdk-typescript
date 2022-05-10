import {AssignResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAssignResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AssignResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AssignResponseImpl();
}
