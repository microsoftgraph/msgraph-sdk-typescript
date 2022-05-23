import {AlertHistoryStateImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAlertHistoryStateFromDiscriminatorValue(parseNode: ParseNode | undefined) : AlertHistoryStateImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AlertHistoryStateImpl();
}
