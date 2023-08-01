import type {PlannerTask} from './plannerTask';
import type {PlannerTaskCollectionResponse} from './plannerTaskCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializePlannerTask} from './serializePlannerTask';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePlannerTaskCollectionResponse(writer: SerializationWriter, plannerTaskCollectionResponse: PlannerTaskCollectionResponse | undefined = {} as PlannerTaskCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, plannerTaskCollectionResponse)
        writer.writeCollectionOfObjectValues<PlannerTask>("value", plannerTaskCollectionResponse.value, serializePlannerTask);
}
