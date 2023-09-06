import { type DateTimeColumn } from './dateTimeColumn';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoDateTimeColumn(dateTimeColumn: DateTimeColumn | undefined = {} as DateTimeColumn) : Record<string, (node: ParseNode) => void> {
    return {
        "displayAs": n => { dateTimeColumn.displayAs = n.getStringValue(); },
        "format": n => { dateTimeColumn.format = n.getStringValue(); },
        "@odata.type": n => { dateTimeColumn.odataType = n.getStringValue(); },
    }
}
