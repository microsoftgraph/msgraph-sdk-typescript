import {deserializeIntoPlannerTaskCollectionResponse} from './deserializeIntoPlannerTaskCollectionResponse';
import {PlannerTaskCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPlannerTaskCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPlannerTaskCollectionResponse;
}
