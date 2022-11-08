import {MicrosoftAuthenticatorFeatureSettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMicrosoftAuthenticatorFeatureSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : MicrosoftAuthenticatorFeatureSettings {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MicrosoftAuthenticatorFeatureSettings();
}
