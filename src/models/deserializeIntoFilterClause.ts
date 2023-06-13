import {createFilterOperandFromDiscriminatorValue} from './createFilterOperandFromDiscriminatorValue';
import {FilterClause} from './filterClause';
import {FilterOperand} from './filterOperand';
import {serializeFilterOperand} from './serializeFilterOperand';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoFilterClause(filterClause: FilterClause | undefined = {} as FilterClause) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { filterClause.odataType = n.getStringValue(); },
        "operatorName": n => { filterClause.operatorName = n.getStringValue(); },
        "sourceOperandName": n => { filterClause.sourceOperandName = n.getStringValue(); },
        "targetOperand": n => { filterClause.targetOperand = n.getObjectValue<FilterOperand>(createFilterOperandFromDiscriminatorValue); },
    }
}
