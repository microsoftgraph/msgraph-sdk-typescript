import { type PlannerChecklistItems } from './plannerChecklistItems';
import { type PlannerExternalReferences } from './plannerExternalReferences';
import { PlannerPreviewType } from './plannerPreviewType';
import { type PlannerTaskDetails } from './plannerTaskDetails';
import { serializeEntity } from './serializeEntity';
import { serializePlannerChecklistItems } from './serializePlannerChecklistItems';
import { serializePlannerExternalReferences } from './serializePlannerExternalReferences';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializePlannerTaskDetails(writer: SerializationWriter, plannerTaskDetails: PlannerTaskDetails | undefined = {} as PlannerTaskDetails) : void {
        serializeEntity(writer, plannerTaskDetails)
        writer.writeObjectValue<PlannerChecklistItems>("checklist", plannerTaskDetails.checklist, serializePlannerChecklistItems);
        writer.writeStringValue("description", plannerTaskDetails.description);
        writer.writeEnumValue<PlannerPreviewType>("previewType", plannerTaskDetails.previewType);
        writer.writeObjectValue<PlannerExternalReferences>("references", plannerTaskDetails.references, serializePlannerExternalReferences);
}
