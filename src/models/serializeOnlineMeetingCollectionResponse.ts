import type {OnlineMeeting} from './onlineMeeting';
import type {OnlineMeetingCollectionResponse} from './onlineMeetingCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeOnlineMeeting} from './serializeOnlineMeeting';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOnlineMeetingCollectionResponse(writer: SerializationWriter, onlineMeetingCollectionResponse: OnlineMeetingCollectionResponse | undefined = {} as OnlineMeetingCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, onlineMeetingCollectionResponse)
        writer.writeCollectionOfObjectValues<OnlineMeeting>("value", onlineMeetingCollectionResponse.value, serializeOnlineMeeting);
}
