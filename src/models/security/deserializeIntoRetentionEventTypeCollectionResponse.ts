import {deserializeIntoBaseCollectionPaginationCountResponse} from '../deserializeIntoBaseCollectionPaginationCountResponse';
import {createRetentionEventTypeFromDiscriminatorValue} from './createRetentionEventTypeFromDiscriminatorValue';
import {RetentionEventType} from './retentionEventType';
import {RetentionEventTypeCollectionResponse} from './retentionEventTypeCollectionResponse';
import {serializeRetentionEventType} from './serializeRetentionEventType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRetentionEventTypeCollectionResponse(retentionEventTypeCollectionResponse: RetentionEventTypeCollectionResponse | undefined = {} as RetentionEventTypeCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(retentionEventTypeCollectionResponse),
        "value": n => { retentionEventTypeCollectionResponse.value = n.getCollectionOfObjectValues<RetentionEventType>(createRetentionEventTypeFromDiscriminatorValue); },
    }
}
