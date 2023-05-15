import {CurrencyColumn} from './currencyColumn';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCurrencyColumn(currencyColumn: CurrencyColumn | undefined = {} as CurrencyColumn) : Record<string, (node: ParseNode) => void> {
    return {
        "locale": n => { currencyColumn.locale = n.getStringValue(); },
        "@odata.type": n => { currencyColumn.odataType = n.getStringValue(); },
    }
}
