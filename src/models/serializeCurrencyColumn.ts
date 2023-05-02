import {CurrencyColumn} from './currencyColumn';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCurrencyColumn(writer: SerializationWriter, currencyColumn: CurrencyColumn | undefined = {} as CurrencyColumn) : void {
        writer.writeStringValue("locale", currencyColumn.locale);
        writer.writeStringValue("@odata.type", currencyColumn.odataType);
        writer.writeAdditionalData(currencyColumn.additionalData);
}
