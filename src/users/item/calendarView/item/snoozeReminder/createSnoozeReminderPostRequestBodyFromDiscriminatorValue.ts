import {deserializeIntoSnoozeReminderPostRequestBody} from './deserializeIntoSnoozeReminderPostRequestBody';
import {SnoozeReminderPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSnoozeReminderPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSnoozeReminderPostRequestBody;
}
