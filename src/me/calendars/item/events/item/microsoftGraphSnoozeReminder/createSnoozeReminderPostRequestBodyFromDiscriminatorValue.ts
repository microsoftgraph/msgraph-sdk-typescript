import {SnoozeReminderPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSnoozeReminderPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : SnoozeReminderPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SnoozeReminderPostRequestBody();
}
