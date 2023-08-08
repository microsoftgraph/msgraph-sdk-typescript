import type {PlannerExternalReferences} from './plannerExternalReferences';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePlannerExternalReferences(writer: SerializationWriter, plannerExternalReferences: PlannerExternalReferences | undefined = {} as PlannerExternalReferences) : void {
        writer.writeStringValue("@odata.type", plannerExternalReferences.odataType);
        writer.writeAdditionalData(plannerExternalReferences.additionalData);
}
