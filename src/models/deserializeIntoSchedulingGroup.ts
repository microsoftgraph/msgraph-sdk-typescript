import {deserializeIntoChangeTrackedEntity} from './deserializeIntoChangeTrackedEntity';
import {SchedulingGroup} from './schedulingGroup';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSchedulingGroup(schedulingGroup: SchedulingGroup | undefined = {} as SchedulingGroup) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoChangeTrackedEntity(schedulingGroup),
        "displayName": n => { schedulingGroup.displayName = n.getStringValue(); },
        "isActive": n => { schedulingGroup.isActive = n.getBooleanValue(); },
        "userIds": n => { schedulingGroup.userIds = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
