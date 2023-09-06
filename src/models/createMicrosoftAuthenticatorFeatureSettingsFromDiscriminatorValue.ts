import { deserializeIntoMicrosoftAuthenticatorFeatureSettings } from './deserializeIntoMicrosoftAuthenticatorFeatureSettings';
import { type MicrosoftAuthenticatorFeatureSettings } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createMicrosoftAuthenticatorFeatureSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMicrosoftAuthenticatorFeatureSettings;
}
