import { deserializeIntoLoginPageTextVisibilitySettings } from './deserializeIntoLoginPageTextVisibilitySettings';
import { type LoginPageTextVisibilitySettings } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createLoginPageTextVisibilitySettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoLoginPageTextVisibilitySettings;
}
