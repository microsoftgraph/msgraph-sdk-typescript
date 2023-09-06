import { deserializeIntoAlertHistoryState } from './deserializeIntoAlertHistoryState';
import { type AlertHistoryState } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAlertHistoryStateFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAlertHistoryState;
}
