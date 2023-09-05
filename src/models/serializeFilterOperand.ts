import { type FilterOperand } from './filterOperand';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeFilterOperand(writer: SerializationWriter, filterOperand: FilterOperand | undefined = {} as FilterOperand) : void {
        writer.writeStringValue("@odata.type", filterOperand.odataType);
        writer.writeCollectionOfPrimitiveValues<string>("values", filterOperand.values);
        writer.writeAdditionalData(filterOperand.additionalData);
}
