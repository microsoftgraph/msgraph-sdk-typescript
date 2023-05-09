import {createOpenShiftItemFromDiscriminatorValue} from './createOpenShiftItemFromDiscriminatorValue';
import {deserializeIntoChangeTrackedEntity} from './deserializeIntoChangeTrackedEntity';
import {OpenShift} from './openShift';
import {OpenShiftItem} from './openShiftItem';
import {serializeOpenShiftItem} from './serializeOpenShiftItem';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOpenShift(openShift: OpenShift | undefined = {} as OpenShift) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoChangeTrackedEntity(openShift),
        "draftOpenShift": n => { openShift.draftOpenShift = n.getObjectValue<OpenShiftItem>(createOpenShiftItemFromDiscriminatorValue); },
        "schedulingGroupId": n => { openShift.schedulingGroupId = n.getStringValue(); },
        "sharedOpenShift": n => { openShift.sharedOpenShift = n.getObjectValue<OpenShiftItem>(createOpenShiftItemFromDiscriminatorValue); },
    }
}
