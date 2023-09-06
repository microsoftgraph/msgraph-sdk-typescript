import { type NumberColumn } from './numberColumn';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeNumberColumn(writer: SerializationWriter, numberColumn: NumberColumn | undefined = {} as NumberColumn) : void {
        writer.writeStringValue("decimalPlaces", numberColumn.decimalPlaces);
        writer.writeStringValue("displayAs", numberColumn.displayAs);
        writer.writeNumberValue("maximum", numberColumn.maximum);
        writer.writeNumberValue("minimum", numberColumn.minimum);
        writer.writeStringValue("@odata.type", numberColumn.odataType);
        writer.writeAdditionalData(numberColumn.additionalData);
}
