import {FilterOperand} from './filterOperand';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFilterOperand(filterOperand: FilterOperand | undefined = {} as FilterOperand, writer: SerializationWriter) : void {
        writer.writeStringValue("@odata.type", filterOperand.odataType);
        writer.writeCollectionOfPrimitiveValues<string>("values", filterOperand.values);
        writer.writeAdditionalData(filterOperand.additionalData);
}
