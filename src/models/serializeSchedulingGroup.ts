import {SchedulingGroup} from './schedulingGroup';
import {serializeChangeTrackedEntity} from './serializeChangeTrackedEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSchedulingGroup(writer: SerializationWriter, schedulingGroup: SchedulingGroup | undefined = {} as SchedulingGroup) : void {
        serializeChangeTrackedEntity(writer, schedulingGroup)
        writer.writeStringValue("displayName", schedulingGroup.displayName);
        writer.writeCollectionOfPrimitiveValues<string>("userIds", schedulingGroup.userIds);
}
