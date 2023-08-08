import {deserializeIntoBaseCollectionPaginationCountResponse} from '../deserializeIntoBaseCollectionPaginationCountResponse';
import {createHostComponentFromDiscriminatorValue} from './createHostComponentFromDiscriminatorValue';
import type {HostComponent} from './hostComponent';
import type {HostComponentCollectionResponse} from './hostComponentCollectionResponse';
import {serializeHostComponent} from './serializeHostComponent';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoHostComponentCollectionResponse(hostComponentCollectionResponse: HostComponentCollectionResponse | undefined = {} as HostComponentCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(hostComponentCollectionResponse),
        "value": n => { hostComponentCollectionResponse.value = n.getCollectionOfObjectValues<HostComponent>(createHostComponentFromDiscriminatorValue); },
    }
}
