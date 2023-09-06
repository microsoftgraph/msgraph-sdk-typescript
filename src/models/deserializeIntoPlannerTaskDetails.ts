import { createPlannerChecklistItemsFromDiscriminatorValue } from './createPlannerChecklistItemsFromDiscriminatorValue';
import { createPlannerExternalReferencesFromDiscriminatorValue } from './createPlannerExternalReferencesFromDiscriminatorValue';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type PlannerChecklistItems } from './plannerChecklistItems';
import { type PlannerExternalReferences } from './plannerExternalReferences';
import { PlannerPreviewType } from './plannerPreviewType';
import { type PlannerTaskDetails } from './plannerTaskDetails';
import { serializePlannerChecklistItems } from './serializePlannerChecklistItems';
import { serializePlannerExternalReferences } from './serializePlannerExternalReferences';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoPlannerTaskDetails(plannerTaskDetails: PlannerTaskDetails | undefined = {} as PlannerTaskDetails) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(plannerTaskDetails),
        "checklist": n => { plannerTaskDetails.checklist = n.getObjectValue<PlannerChecklistItems>(createPlannerChecklistItemsFromDiscriminatorValue); },
        "description": n => { plannerTaskDetails.description = n.getStringValue(); },
        "previewType": n => { plannerTaskDetails.previewType = n.getEnumValue<PlannerPreviewType>(PlannerPreviewType); },
        "references": n => { plannerTaskDetails.references = n.getObjectValue<PlannerExternalReferences>(createPlannerExternalReferencesFromDiscriminatorValue); },
    }
}
