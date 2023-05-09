import {createServiceHealthFromDiscriminatorValue} from './createServiceHealthFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeServiceHealth} from './serializeServiceHealth';
import {ServiceHealth} from './serviceHealth';
import {ServiceHealthCollectionResponse} from './serviceHealthCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoServiceHealthCollectionResponse(serviceHealthCollectionResponse: ServiceHealthCollectionResponse | undefined = {} as ServiceHealthCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(serviceHealthCollectionResponse),
        "value": n => { serviceHealthCollectionResponse.value = n.getCollectionOfObjectValues<ServiceHealth>(createServiceHealthFromDiscriminatorValue); },
    }
}
