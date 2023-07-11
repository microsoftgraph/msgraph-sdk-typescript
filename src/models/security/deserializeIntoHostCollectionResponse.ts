import {deserializeIntoBaseCollectionPaginationCountResponse} from '../deserializeIntoBaseCollectionPaginationCountResponse';
import {createHostFromDiscriminatorValue} from './createHostFromDiscriminatorValue';
import {Host} from './host';
import {HostCollectionResponse} from './hostCollectionResponse';
import {serializeHost} from './serializeHost';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoHostCollectionResponse(hostCollectionResponse: HostCollectionResponse | undefined = {} as HostCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(hostCollectionResponse),
        "value": n => { hostCollectionResponse.value = n.getCollectionOfObjectValues<Host>(createHostFromDiscriminatorValue); },
    }
}
