import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import {HostTracker} from './hostTracker';
import {HostTrackerCollectionResponse} from './hostTrackerCollectionResponse';
import {serializeHostTracker} from './serializeHostTracker';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeHostTrackerCollectionResponse(writer: SerializationWriter, hostTrackerCollectionResponse: HostTrackerCollectionResponse | undefined = {} as HostTrackerCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, hostTrackerCollectionResponse)
        writer.writeCollectionOfObjectValues<HostTracker>("value", hostTrackerCollectionResponse.value, serializeHostTracker);
}
