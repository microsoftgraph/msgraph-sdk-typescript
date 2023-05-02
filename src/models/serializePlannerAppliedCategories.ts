import {PlannerAppliedCategories} from './plannerAppliedCategories';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePlannerAppliedCategories(writer: SerializationWriter, plannerAppliedCategories: PlannerAppliedCategories | undefined = {} as PlannerAppliedCategories) : void {
        writer.writeStringValue("@odata.type", plannerAppliedCategories.odataType);
        writer.writeAdditionalData(plannerAppliedCategories.additionalData);
}
