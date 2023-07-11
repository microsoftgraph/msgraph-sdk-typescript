import {deserializeIntoEmailSettings} from './deserializeIntoEmailSettings';
import {EmailSettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEmailSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEmailSettings;
}
