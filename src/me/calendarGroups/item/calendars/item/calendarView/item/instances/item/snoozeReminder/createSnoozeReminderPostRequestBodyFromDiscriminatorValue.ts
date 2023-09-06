import { deserializeIntoSnoozeReminderPostRequestBody } from './deserializeIntoSnoozeReminderPostRequestBody';
import { type SnoozeReminderPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSnoozeReminderPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSnoozeReminderPostRequestBody;
}
