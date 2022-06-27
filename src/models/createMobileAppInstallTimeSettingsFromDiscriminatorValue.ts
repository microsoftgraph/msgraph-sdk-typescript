import {MobileAppInstallTimeSettingsImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMobileAppInstallTimeSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : MobileAppInstallTimeSettingsImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MobileAppInstallTimeSettingsImpl();
}
