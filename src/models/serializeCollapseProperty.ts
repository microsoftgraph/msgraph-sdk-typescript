import {CollapseProperty} from './collapseProperty';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCollapseProperty(collapseProperty: CollapseProperty | undefined = {} as CollapseProperty, writer: SerializationWriter) : void {
        writer.writeCollectionOfPrimitiveValues<string>("fields", collapseProperty.fields);
        writer.writeNumberValue("limit", collapseProperty.limit);
        writer.writeStringValue("@odata.type", collapseProperty.odataType);
        writer.writeAdditionalData(collapseProperty.additionalData);
}
