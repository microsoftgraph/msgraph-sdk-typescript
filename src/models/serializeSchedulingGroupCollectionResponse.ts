import type {SchedulingGroup} from './schedulingGroup';
import type {SchedulingGroupCollectionResponse} from './schedulingGroupCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeSchedulingGroup} from './serializeSchedulingGroup';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSchedulingGroupCollectionResponse(writer: SerializationWriter, schedulingGroupCollectionResponse: SchedulingGroupCollectionResponse | undefined = {} as SchedulingGroupCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, schedulingGroupCollectionResponse)
        writer.writeCollectionOfObjectValues<SchedulingGroup>("value", schedulingGroupCollectionResponse.value, serializeSchedulingGroup);
}
