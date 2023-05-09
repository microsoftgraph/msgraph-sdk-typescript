import {CalculatedColumn} from './calculatedColumn';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCalculatedColumn(calculatedColumn: CalculatedColumn | undefined = {} as CalculatedColumn) : Record<string, (node: ParseNode) => void> {
    return {
        "format": n => { calculatedColumn.format = n.getStringValue(); },
        "formula": n => { calculatedColumn.formula = n.getStringValue(); },
        "@odata.type": n => { calculatedColumn.odataType = n.getStringValue(); },
        "outputType": n => { calculatedColumn.outputType = n.getStringValue(); },
    }
}
