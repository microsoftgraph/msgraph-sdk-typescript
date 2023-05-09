import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import {Incident} from './incident';
import {IncidentCollectionResponse} from './incidentCollectionResponse';
import {serializeIncident} from './serializeIncident';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIncidentCollectionResponse(writer: SerializationWriter, incidentCollectionResponse: IncidentCollectionResponse | undefined = {} as IncidentCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, incidentCollectionResponse)
        writer.writeCollectionOfObjectValues<Incident>("value", incidentCollectionResponse.value, serializeIncident);
}
