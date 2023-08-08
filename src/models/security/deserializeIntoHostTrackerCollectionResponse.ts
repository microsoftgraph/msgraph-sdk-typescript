import {deserializeIntoBaseCollectionPaginationCountResponse} from '../deserializeIntoBaseCollectionPaginationCountResponse';
import {createHostTrackerFromDiscriminatorValue} from './createHostTrackerFromDiscriminatorValue';
import type {HostTracker} from './hostTracker';
import type {HostTrackerCollectionResponse} from './hostTrackerCollectionResponse';
import {serializeHostTracker} from './serializeHostTracker';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoHostTrackerCollectionResponse(hostTrackerCollectionResponse: HostTrackerCollectionResponse | undefined = {} as HostTrackerCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(hostTrackerCollectionResponse),
        "value": n => { hostTrackerCollectionResponse.value = n.getCollectionOfObjectValues<HostTracker>(createHostTrackerFromDiscriminatorValue); },
    }
}
