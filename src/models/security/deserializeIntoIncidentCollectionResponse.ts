import {deserializeIntoBaseCollectionPaginationCountResponse} from '../deserializeIntoBaseCollectionPaginationCountResponse';
import {createIncidentFromDiscriminatorValue} from './createIncidentFromDiscriminatorValue';
import type {Incident} from './incident';
import type {IncidentCollectionResponse} from './incidentCollectionResponse';
import {serializeIncident} from './serializeIncident';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIncidentCollectionResponse(incidentCollectionResponse: IncidentCollectionResponse | undefined = {} as IncidentCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(incidentCollectionResponse),
        "value": n => { incidentCollectionResponse.value = n.getCollectionOfObjectValues<Incident>(createIncidentFromDiscriminatorValue); },
    }
}
