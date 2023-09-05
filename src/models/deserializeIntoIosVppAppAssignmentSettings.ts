import { deserializeIntoMobileAppAssignmentSettings } from './deserializeIntoMobileAppAssignmentSettings';
import { type IosVppAppAssignmentSettings } from './iosVppAppAssignmentSettings';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoIosVppAppAssignmentSettings(iosVppAppAssignmentSettings: IosVppAppAssignmentSettings | undefined = {} as IosVppAppAssignmentSettings) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoMobileAppAssignmentSettings(iosVppAppAssignmentSettings),
        "useDeviceLicensing": n => { iosVppAppAssignmentSettings.useDeviceLicensing = n.getBooleanValue(); },
        "vpnConfigurationId": n => { iosVppAppAssignmentSettings.vpnConfigurationId = n.getStringValue(); },
    }
}
