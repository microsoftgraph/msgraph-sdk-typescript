import {EdiscoveryCaseSettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEdiscoveryCaseSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : EdiscoveryCaseSettings {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EdiscoveryCaseSettings();
}
