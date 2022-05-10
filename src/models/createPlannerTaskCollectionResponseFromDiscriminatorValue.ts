import {PlannerTaskCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPlannerTaskCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : PlannerTaskCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PlannerTaskCollectionResponseImpl();
}
