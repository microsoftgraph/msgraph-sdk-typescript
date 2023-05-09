import {DefaultColumnValue} from './defaultColumnValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDefaultColumnValue(defaultColumnValue: DefaultColumnValue | undefined = {} as DefaultColumnValue) : Record<string, (node: ParseNode) => void> {
    return {
        "formula": n => { defaultColumnValue.formula = n.getStringValue(); },
        "@odata.type": n => { defaultColumnValue.odataType = n.getStringValue(); },
        "value": n => { defaultColumnValue.value = n.getStringValue(); },
    }
}
