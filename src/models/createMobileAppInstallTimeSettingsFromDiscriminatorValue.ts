import {deserializeIntoMobileAppInstallTimeSettings} from './deserializeIntoMobileAppInstallTimeSettings';
import {MobileAppInstallTimeSettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMobileAppInstallTimeSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMobileAppInstallTimeSettings;
}
