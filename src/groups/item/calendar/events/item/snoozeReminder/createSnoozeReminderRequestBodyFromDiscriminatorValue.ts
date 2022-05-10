import {SnoozeReminderRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSnoozeReminderRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : SnoozeReminderRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SnoozeReminderRequestBodyImpl();
}
