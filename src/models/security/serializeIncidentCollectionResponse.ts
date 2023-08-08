import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import type {Incident} from './incident';
import type {IncidentCollectionResponse} from './incidentCollectionResponse';
import {serializeIncident} from './serializeIncident';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIncidentCollectionResponse(writer: SerializationWriter, incidentCollectionResponse: IncidentCollectionResponse | undefined = {} as IncidentCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, incidentCollectionResponse)
        writer.writeCollectionOfObjectValues<Incident>("value", incidentCollectionResponse.value, serializeIncident);
}
