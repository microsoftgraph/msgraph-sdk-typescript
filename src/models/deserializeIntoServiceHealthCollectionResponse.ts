import {createServiceHealthFromDiscriminatorValue} from './createServiceHealthFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeServiceHealth} from './serializeServiceHealth';
import type {ServiceHealth} from './serviceHealth';
import type {ServiceHealthCollectionResponse} from './serviceHealthCollectionResponse';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoServiceHealthCollectionResponse(serviceHealthCollectionResponse: ServiceHealthCollectionResponse | undefined = {} as ServiceHealthCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(serviceHealthCollectionResponse),
        "value": n => { serviceHealthCollectionResponse.value = n.getCollectionOfObjectValues<ServiceHealth>(createServiceHealthFromDiscriminatorValue); },
    }
}
