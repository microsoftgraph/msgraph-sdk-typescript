import {OpenShift} from './openShift';
import {OpenShiftItem} from './openShiftItem';
import {serializeChangeTrackedEntity} from './serializeChangeTrackedEntity';
import {serializeOpenShiftItem} from './serializeOpenShiftItem';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOpenShift(writer: SerializationWriter, openShift: OpenShift | undefined = {} as OpenShift) : void {
        serializeChangeTrackedEntity(writer, openShift)
        writer.writeObjectValue<OpenShiftItem>("draftOpenShift", openShift.draftOpenShift, serializeOpenShiftItem);
        writer.writeStringValue("schedulingGroupId", openShift.schedulingGroupId);
        writer.writeObjectValue<OpenShiftItem>("sharedOpenShift", openShift.sharedOpenShift, serializeOpenShiftItem);
}
