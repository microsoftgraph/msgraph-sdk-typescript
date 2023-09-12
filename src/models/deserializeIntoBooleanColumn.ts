import { type BooleanColumn } from './booleanColumn';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoBooleanColumn(booleanColumn: BooleanColumn | undefined = {} as BooleanColumn) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { booleanColumn.odataType = n.getStringValue(); },
    }
}
