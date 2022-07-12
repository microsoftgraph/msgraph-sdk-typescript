import {MobileAppInstallTimeSettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMobileAppInstallTimeSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : MobileAppInstallTimeSettings {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MobileAppInstallTimeSettings();
}
