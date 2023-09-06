import { type DateTimeColumn } from './dateTimeColumn';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDateTimeColumn(writer: SerializationWriter, dateTimeColumn: DateTimeColumn | undefined = {} as DateTimeColumn) : void {
        writer.writeStringValue("displayAs", dateTimeColumn.displayAs);
        writer.writeStringValue("format", dateTimeColumn.format);
        writer.writeStringValue("@odata.type", dateTimeColumn.odataType);
        writer.writeAdditionalData(dateTimeColumn.additionalData);
}
