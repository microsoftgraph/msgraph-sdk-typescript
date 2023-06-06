import {deserializeIntoLoginPageTextVisibilitySettings} from './deserializeIntoLoginPageTextVisibilitySettings';
import {LoginPageTextVisibilitySettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLoginPageTextVisibilitySettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoLoginPageTextVisibilitySettings;
}
