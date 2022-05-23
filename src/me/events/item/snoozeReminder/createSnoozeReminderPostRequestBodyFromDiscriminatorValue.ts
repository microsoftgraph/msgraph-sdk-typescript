import {SnoozeReminderPostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSnoozeReminderPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : SnoozeReminderPostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SnoozeReminderPostRequestBodyImpl();
}
