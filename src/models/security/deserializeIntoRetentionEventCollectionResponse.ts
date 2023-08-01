import {deserializeIntoBaseCollectionPaginationCountResponse} from '../deserializeIntoBaseCollectionPaginationCountResponse';
import {createRetentionEventFromDiscriminatorValue} from './createRetentionEventFromDiscriminatorValue';
import type {RetentionEvent} from './retentionEvent';
import type {RetentionEventCollectionResponse} from './retentionEventCollectionResponse';
import {serializeRetentionEvent} from './serializeRetentionEvent';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRetentionEventCollectionResponse(retentionEventCollectionResponse: RetentionEventCollectionResponse | undefined = {} as RetentionEventCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(retentionEventCollectionResponse),
        "value": n => { retentionEventCollectionResponse.value = n.getCollectionOfObjectValues<RetentionEvent>(createRetentionEventFromDiscriminatorValue); },
    }
}
