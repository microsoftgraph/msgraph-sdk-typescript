import {EventQuery} from './eventQuery';
import {QueryType} from './queryType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEventQuery(eventQuery: EventQuery | undefined = {} as EventQuery) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { eventQuery.odataType = n.getStringValue(); },
        "query": n => { eventQuery.query = n.getStringValue(); },
        "queryType": n => { eventQuery.queryType = n.getEnumValue<QueryType>(QueryType); },
    }
}
