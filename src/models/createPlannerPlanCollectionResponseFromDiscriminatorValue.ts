import {PlannerPlanCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPlannerPlanCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : PlannerPlanCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PlannerPlanCollectionResponseImpl();
}
