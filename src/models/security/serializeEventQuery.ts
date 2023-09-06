import { type EventQuery } from './eventQuery';
import { QueryType } from './queryType';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeEventQuery(writer: SerializationWriter, eventQuery: EventQuery | undefined = {} as EventQuery) : void {
        writer.writeStringValue("@odata.type", eventQuery.odataType);
        writer.writeStringValue("query", eventQuery.query);
        writer.writeEnumValue<QueryType>("queryType", eventQuery.queryType);
        writer.writeAdditionalData(eventQuery.additionalData);
}
