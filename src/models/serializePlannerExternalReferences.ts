import { type PlannerExternalReferences } from './plannerExternalReferences';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializePlannerExternalReferences(writer: SerializationWriter, plannerExternalReferences: PlannerExternalReferences | undefined = {} as PlannerExternalReferences) : void {
        writer.writeStringValue("@odata.type", plannerExternalReferences.odataType);
        writer.writeAdditionalData(plannerExternalReferences.additionalData);
}
