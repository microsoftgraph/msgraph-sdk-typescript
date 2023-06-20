import {EventQuery} from './eventQuery';
import {QueryType} from './queryType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEventQuery(eventQuery: EventQuery | undefined = {} as EventQuery, writer: SerializationWriter) : void {
        writer.writeStringValue("@odata.type", eventQuery.odataType);
        writer.writeStringValue("query", eventQuery.query);
        writer.writeEnumValue<QueryType>("queryType", eventQuery.queryType);
        writer.writeAdditionalData(eventQuery.additionalData);
}
