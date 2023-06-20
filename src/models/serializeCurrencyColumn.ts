import {CurrencyColumn} from './currencyColumn';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCurrencyColumn(currencyColumn: CurrencyColumn | undefined = {} as CurrencyColumn, writer: SerializationWriter) : void {
        writer.writeStringValue("locale", currencyColumn.locale);
        writer.writeStringValue("@odata.type", currencyColumn.odataType);
        writer.writeAdditionalData(currencyColumn.additionalData);
}
