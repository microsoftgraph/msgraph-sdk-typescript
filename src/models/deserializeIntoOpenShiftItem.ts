import {deserializeIntoShiftItem} from './deserializeIntoShiftItem';
import {OpenShiftItem} from './openShiftItem';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOpenShiftItem(openShiftItem: OpenShiftItem | undefined = {} as OpenShiftItem) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoShiftItem(openShiftItem),
        "openSlotCount": n => { openShiftItem.openSlotCount = n.getNumberValue(); },
    }
}
