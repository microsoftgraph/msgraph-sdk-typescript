import {OpenShiftItem} from './openShiftItem';
import {serializeShiftItem} from './serializeShiftItem';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOpenShiftItem(writer: SerializationWriter, openShiftItem: OpenShiftItem | undefined = {} as OpenShiftItem) : void {
        serializeShiftItem(writer, openShiftItem)
        writer.writeNumberValue("openSlotCount", openShiftItem.openSlotCount);
}
