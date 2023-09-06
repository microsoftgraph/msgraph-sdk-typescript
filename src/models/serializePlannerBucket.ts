import { type PlannerBucket } from './plannerBucket';
import { type PlannerTask } from './plannerTask';
import { serializeEntity } from './serializeEntity';
import { serializePlannerTask } from './serializePlannerTask';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializePlannerBucket(writer: SerializationWriter, plannerBucket: PlannerBucket | undefined = {} as PlannerBucket) : void {
        serializeEntity(writer, plannerBucket)
        writer.writeStringValue("name", plannerBucket.name);
        writer.writeStringValue("orderHint", plannerBucket.orderHint);
        writer.writeStringValue("planId", plannerBucket.planId);
        writer.writeCollectionOfObjectValues<PlannerTask>("tasks", plannerBucket.tasks, serializePlannerTask);
}
