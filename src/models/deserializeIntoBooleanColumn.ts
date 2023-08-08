import type {BooleanColumn} from './booleanColumn';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBooleanColumn(booleanColumn: BooleanColumn | undefined = {} as BooleanColumn) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { booleanColumn.odataType = n.getStringValue(); },
    }
}
