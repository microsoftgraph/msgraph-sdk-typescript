import {deserializeIntoOpenShiftItem} from './deserializeIntoOpenShiftItem';
import {OpenShiftItem} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOpenShiftItemFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOpenShiftItem;
}
