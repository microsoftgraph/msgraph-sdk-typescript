import { deserializeIntoShiftItem } from './deserializeIntoShiftItem';
import { type OpenShiftItem } from './openShiftItem';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoOpenShiftItem(openShiftItem: OpenShiftItem | undefined = {} as OpenShiftItem) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoShiftItem(openShiftItem),
        "openSlotCount": n => { openShiftItem.openSlotCount = n.getNumberValue(); },
    }
}
