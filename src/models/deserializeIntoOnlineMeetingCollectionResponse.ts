import {createOnlineMeetingFromDiscriminatorValue} from './createOnlineMeetingFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {OnlineMeeting} from './onlineMeeting';
import {OnlineMeetingCollectionResponse} from './onlineMeetingCollectionResponse';
import {serializeOnlineMeeting} from './serializeOnlineMeeting';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOnlineMeetingCollectionResponse(onlineMeetingCollectionResponse: OnlineMeetingCollectionResponse | undefined = {} as OnlineMeetingCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(onlineMeetingCollectionResponse),
        "value": n => { onlineMeetingCollectionResponse.value = n.getCollectionOfObjectValues<OnlineMeeting>(createOnlineMeetingFromDiscriminatorValue); },
    }
}
