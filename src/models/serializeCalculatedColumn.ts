import { type CalculatedColumn } from './calculatedColumn';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeCalculatedColumn(writer: SerializationWriter, calculatedColumn: CalculatedColumn | undefined = {} as CalculatedColumn) : void {
        writer.writeStringValue("format", calculatedColumn.format);
        writer.writeStringValue("formula", calculatedColumn.formula);
        writer.writeStringValue("@odata.type", calculatedColumn.odataType);
        writer.writeStringValue("outputType", calculatedColumn.outputType);
        writer.writeAdditionalData(calculatedColumn.additionalData);
}
