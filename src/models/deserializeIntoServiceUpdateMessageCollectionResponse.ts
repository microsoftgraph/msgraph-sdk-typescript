import {createServiceUpdateMessageFromDiscriminatorValue} from './createServiceUpdateMessageFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeServiceUpdateMessage} from './serializeServiceUpdateMessage';
import type {ServiceUpdateMessage} from './serviceUpdateMessage';
import type {ServiceUpdateMessageCollectionResponse} from './serviceUpdateMessageCollectionResponse';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoServiceUpdateMessageCollectionResponse(serviceUpdateMessageCollectionResponse: ServiceUpdateMessageCollectionResponse | undefined = {} as ServiceUpdateMessageCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(serviceUpdateMessageCollectionResponse),
        "value": n => { serviceUpdateMessageCollectionResponse.value = n.getCollectionOfObjectValues<ServiceUpdateMessage>(createServiceUpdateMessageFromDiscriminatorValue); },
    }
}
