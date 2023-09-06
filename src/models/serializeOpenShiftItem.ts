import { type OpenShiftItem } from './openShiftItem';
import { serializeShiftItem } from './serializeShiftItem';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeOpenShiftItem(writer: SerializationWriter, openShiftItem: OpenShiftItem | undefined = {} as OpenShiftItem) : void {
        serializeShiftItem(writer, openShiftItem)
        writer.writeNumberValue("openSlotCount", openShiftItem.openSlotCount);
}
