import { type FilterOperand } from './filterOperand';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoFilterOperand(filterOperand: FilterOperand | undefined = {} as FilterOperand) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { filterOperand.odataType = n.getStringValue(); },
        "values": n => { filterOperand.values = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
