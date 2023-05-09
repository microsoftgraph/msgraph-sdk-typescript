import {deserializeIntoEdiscoveryCaseSettings} from './deserializeIntoEdiscoveryCaseSettings';
import {EdiscoveryCaseSettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEdiscoveryCaseSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEdiscoveryCaseSettings;
}
