import {BooleanColumn} from './booleanColumn';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBooleanColumn(booleanColumn: BooleanColumn | undefined = {} as BooleanColumn) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { booleanColumn.odataType = n.getStringValue(); },
    }
}
