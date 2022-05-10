import {AssignedPlanImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAssignedPlanFromDiscriminatorValue(parseNode: ParseNode | undefined) : AssignedPlanImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AssignedPlanImpl();
}
