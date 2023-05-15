import {PlannerChecklistItems} from './plannerChecklistItems';
import {PlannerExternalReferences} from './plannerExternalReferences';
import {PlannerPreviewType} from './plannerPreviewType';
import {PlannerTaskDetails} from './plannerTaskDetails';
import {serializeEntity} from './serializeEntity';
import {serializePlannerChecklistItems} from './serializePlannerChecklistItems';
import {serializePlannerExternalReferences} from './serializePlannerExternalReferences';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePlannerTaskDetails(writer: SerializationWriter, plannerTaskDetails: PlannerTaskDetails | undefined = {} as PlannerTaskDetails) : void {
        serializeEntity(writer, plannerTaskDetails)
        writer.writeObjectValue<PlannerChecklistItems>("checklist", plannerTaskDetails.checklist, serializePlannerChecklistItems);
        writer.writeStringValue("description", plannerTaskDetails.description);
        writer.writeEnumValue<PlannerPreviewType>("previewType", plannerTaskDetails.previewType);
        writer.writeObjectValue<PlannerExternalReferences>("references", plannerTaskDetails.references, serializePlannerExternalReferences);
}
