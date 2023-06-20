import {DateTimeColumn} from './dateTimeColumn';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDateTimeColumn(dateTimeColumn: DateTimeColumn | undefined = {} as DateTimeColumn, writer: SerializationWriter) : void {
        writer.writeStringValue("displayAs", dateTimeColumn.displayAs);
        writer.writeStringValue("format", dateTimeColumn.format);
        writer.writeStringValue("@odata.type", dateTimeColumn.odataType);
        writer.writeAdditionalData(dateTimeColumn.additionalData);
}
