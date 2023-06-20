import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import {Incident} from './incident';
import {IncidentCollectionResponse} from './incidentCollectionResponse';
import {serializeIncident} from './serializeIncident';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIncidentCollectionResponse(incidentCollectionResponse: IncidentCollectionResponse | undefined = {} as IncidentCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, incidentCollectionResponse)
        writer.writeCollectionOfObjectValues<Incident>("value", incidentCollectionResponse.value, serializeIncident);
}
