import {createPlannerChecklistItemsFromDiscriminatorValue} from './createPlannerChecklistItemsFromDiscriminatorValue';
import {createPlannerExternalReferencesFromDiscriminatorValue} from './createPlannerExternalReferencesFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {PlannerChecklistItems} from './plannerChecklistItems';
import {PlannerExternalReferences} from './plannerExternalReferences';
import {PlannerPreviewType} from './plannerPreviewType';
import {PlannerTaskDetails} from './plannerTaskDetails';
import {serializePlannerChecklistItems} from './serializePlannerChecklistItems';
import {serializePlannerExternalReferences} from './serializePlannerExternalReferences';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPlannerTaskDetails(plannerTaskDetails: PlannerTaskDetails | undefined = {} as PlannerTaskDetails) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(plannerTaskDetails),
        "checklist": n => { plannerTaskDetails.checklist = n.getObjectValue<PlannerChecklistItems>(createPlannerChecklistItemsFromDiscriminatorValue); },
        "description": n => { plannerTaskDetails.description = n.getStringValue(); },
        "previewType": n => { plannerTaskDetails.previewType = n.getEnumValue<PlannerPreviewType>(PlannerPreviewType); },
        "references": n => { plannerTaskDetails.references = n.getObjectValue<PlannerExternalReferences>(createPlannerExternalReferencesFromDiscriminatorValue); },
    }
}
