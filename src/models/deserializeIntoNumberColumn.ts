import {NumberColumn} from './numberColumn';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoNumberColumn(numberColumn: NumberColumn | undefined = {} as NumberColumn) : Record<string, (node: ParseNode) => void> {
    return {
        "decimalPlaces": n => { numberColumn.decimalPlaces = n.getStringValue(); },
        "displayAs": n => { numberColumn.displayAs = n.getStringValue(); },
        "maximum": n => { numberColumn.maximum = n.getNumberValue(); },
        "minimum": n => { numberColumn.minimum = n.getNumberValue(); },
        "@odata.type": n => { numberColumn.odataType = n.getStringValue(); },
    }
}
