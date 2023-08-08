import type {CollapseProperty} from './collapseProperty';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCollapseProperty(writer: SerializationWriter, collapseProperty: CollapseProperty | undefined = {} as CollapseProperty) : void {
        writer.writeCollectionOfPrimitiveValues<string>("fields", collapseProperty.fields);
        writer.writeNumberValue("limit", collapseProperty.limit);
        writer.writeStringValue("@odata.type", collapseProperty.odataType);
        writer.writeAdditionalData(collapseProperty.additionalData);
}
