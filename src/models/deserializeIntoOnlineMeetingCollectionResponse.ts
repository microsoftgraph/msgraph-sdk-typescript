import {createOnlineMeetingFromDiscriminatorValue} from './createOnlineMeetingFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import type {OnlineMeeting} from './onlineMeeting';
import type {OnlineMeetingCollectionResponse} from './onlineMeetingCollectionResponse';
import {serializeOnlineMeeting} from './serializeOnlineMeeting';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOnlineMeetingCollectionResponse(onlineMeetingCollectionResponse: OnlineMeetingCollectionResponse | undefined = {} as OnlineMeetingCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(onlineMeetingCollectionResponse),
        "value": n => { onlineMeetingCollectionResponse.value = n.getCollectionOfObjectValues<OnlineMeeting>(createOnlineMeetingFromDiscriminatorValue); },
    }
}
