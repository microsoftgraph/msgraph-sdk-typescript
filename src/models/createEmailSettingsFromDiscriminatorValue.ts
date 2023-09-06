import { deserializeIntoEmailSettings } from './deserializeIntoEmailSettings';
import { type EmailSettings } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createEmailSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEmailSettings;
}
