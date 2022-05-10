import {AssignRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAssignRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : AssignRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AssignRequestBodyImpl();
}
