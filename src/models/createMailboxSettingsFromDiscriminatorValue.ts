import { deserializeIntoMailboxSettings } from './deserializeIntoMailboxSettings';
import { type MailboxSettings } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createMailboxSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMailboxSettings;
}
