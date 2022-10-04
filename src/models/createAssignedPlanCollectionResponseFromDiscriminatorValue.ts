import {AssignedPlanCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAssignedPlanCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AssignedPlanCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AssignedPlanCollectionResponse();
}
