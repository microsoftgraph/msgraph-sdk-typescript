import {PlannerCategoryDescriptions} from './plannerCategoryDescriptions';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePlannerCategoryDescriptions(writer: SerializationWriter, plannerCategoryDescriptions: PlannerCategoryDescriptions | undefined = {} as PlannerCategoryDescriptions) : void {
        writer.writeStringValue("category1", plannerCategoryDescriptions.category1);
        writer.writeStringValue("category10", plannerCategoryDescriptions.category10);
        writer.writeStringValue("category11", plannerCategoryDescriptions.category11);
        writer.writeStringValue("category12", plannerCategoryDescriptions.category12);
        writer.writeStringValue("category13", plannerCategoryDescriptions.category13);
        writer.writeStringValue("category14", plannerCategoryDescriptions.category14);
        writer.writeStringValue("category15", plannerCategoryDescriptions.category15);
        writer.writeStringValue("category16", plannerCategoryDescriptions.category16);
        writer.writeStringValue("category17", plannerCategoryDescriptions.category17);
        writer.writeStringValue("category18", plannerCategoryDescriptions.category18);
        writer.writeStringValue("category19", plannerCategoryDescriptions.category19);
        writer.writeStringValue("category2", plannerCategoryDescriptions.category2);
        writer.writeStringValue("category20", plannerCategoryDescriptions.category20);
        writer.writeStringValue("category21", plannerCategoryDescriptions.category21);
        writer.writeStringValue("category22", plannerCategoryDescriptions.category22);
        writer.writeStringValue("category23", plannerCategoryDescriptions.category23);
        writer.writeStringValue("category24", plannerCategoryDescriptions.category24);
        writer.writeStringValue("category25", plannerCategoryDescriptions.category25);
        writer.writeStringValue("category3", plannerCategoryDescriptions.category3);
        writer.writeStringValue("category4", plannerCategoryDescriptions.category4);
        writer.writeStringValue("category5", plannerCategoryDescriptions.category5);
        writer.writeStringValue("category6", plannerCategoryDescriptions.category6);
        writer.writeStringValue("category7", plannerCategoryDescriptions.category7);
        writer.writeStringValue("category8", plannerCategoryDescriptions.category8);
        writer.writeStringValue("category9", plannerCategoryDescriptions.category9);
        writer.writeStringValue("@odata.type", plannerCategoryDescriptions.odataType);
        writer.writeAdditionalData(plannerCategoryDescriptions.additionalData);
}
