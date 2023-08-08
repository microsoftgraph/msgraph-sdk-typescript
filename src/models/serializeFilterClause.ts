import type {FilterClause} from './filterClause';
import type {FilterOperand} from './filterOperand';
import {serializeFilterOperand} from './serializeFilterOperand';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFilterClause(writer: SerializationWriter, filterClause: FilterClause | undefined = {} as FilterClause) : void {
        writer.writeStringValue("@odata.type", filterClause.odataType);
        writer.writeStringValue("operatorName", filterClause.operatorName);
        writer.writeStringValue("sourceOperandName", filterClause.sourceOperandName);
        writer.writeObjectValue<FilterOperand>("targetOperand", filterClause.targetOperand, serializeFilterOperand);
        writer.writeAdditionalData(filterClause.additionalData);
}
