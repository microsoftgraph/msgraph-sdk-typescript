import {FilterClause} from './filterClause';
import {FilterOperand} from './filterOperand';
import {serializeFilterOperand} from './serializeFilterOperand';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFilterClause(writer: SerializationWriter, filterClause: FilterClause | undefined = {} as FilterClause) : void {
        writer.writeStringValue("@odata.type", filterClause.odataType);
        writer.writeStringValue("operatorName", filterClause.operatorName);
        writer.writeStringValue("sourceOperandName", filterClause.sourceOperandName);
        writer.writeObjectValue<FilterOperand>("targetOperand", filterClause.targetOperand, serializeFilterOperand);
        writer.writeAdditionalData(filterClause.additionalData);
}
