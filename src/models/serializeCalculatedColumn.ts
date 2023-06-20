import {CalculatedColumn} from './calculatedColumn';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCalculatedColumn(calculatedColumn: CalculatedColumn | undefined = {} as CalculatedColumn, writer: SerializationWriter) : void {
        writer.writeStringValue("format", calculatedColumn.format);
        writer.writeStringValue("formula", calculatedColumn.formula);
        writer.writeStringValue("@odata.type", calculatedColumn.odataType);
        writer.writeStringValue("outputType", calculatedColumn.outputType);
        writer.writeAdditionalData(calculatedColumn.additionalData);
}
