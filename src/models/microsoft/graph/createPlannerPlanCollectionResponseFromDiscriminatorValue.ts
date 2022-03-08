import {PlannerPlanCollectionResponse} from './plannerPlanCollectionResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPlannerPlanCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : PlannerPlanCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PlannerPlanCollectionResponse();
}
