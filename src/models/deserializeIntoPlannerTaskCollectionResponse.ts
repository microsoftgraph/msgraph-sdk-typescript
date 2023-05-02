import {createPlannerTaskFromDiscriminatorValue} from './createPlannerTaskFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {PlannerTask} from './plannerTask';
import {PlannerTaskCollectionResponse} from './plannerTaskCollectionResponse';
import {serializePlannerTask} from './serializePlannerTask';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPlannerTaskCollectionResponse(plannerTaskCollectionResponse: PlannerTaskCollectionResponse | undefined = {} as PlannerTaskCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(plannerTaskCollectionResponse),
        "value": n => { plannerTaskCollectionResponse.value = n.getCollectionOfObjectValues<PlannerTask>(createPlannerTaskFromDiscriminatorValue); },
    }
}
