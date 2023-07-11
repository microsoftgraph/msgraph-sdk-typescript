import {deserializeIntoMobileAppAssignmentSettings} from './deserializeIntoMobileAppAssignmentSettings';
import {IosStoreAppAssignmentSettings} from './iosStoreAppAssignmentSettings';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIosStoreAppAssignmentSettings(iosStoreAppAssignmentSettings: IosStoreAppAssignmentSettings | undefined = {} as IosStoreAppAssignmentSettings) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoMobileAppAssignmentSettings(iosStoreAppAssignmentSettings),
        "isRemovable": n => { iosStoreAppAssignmentSettings.isRemovable = n.getBooleanValue(); },
        "uninstallOnDeviceRemoval": n => { iosStoreAppAssignmentSettings.uninstallOnDeviceRemoval = n.getBooleanValue(); },
        "vpnConfigurationId": n => { iosStoreAppAssignmentSettings.vpnConfigurationId = n.getStringValue(); },
    }
}
