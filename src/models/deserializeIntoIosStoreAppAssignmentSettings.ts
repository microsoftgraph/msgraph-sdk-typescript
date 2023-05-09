import {deserializeIntoMobileAppAssignmentSettings} from './deserializeIntoMobileAppAssignmentSettings';
import {IosStoreAppAssignmentSettings} from './iosStoreAppAssignmentSettings';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIosStoreAppAssignmentSettings(iosStoreAppAssignmentSettings: IosStoreAppAssignmentSettings | undefined = {} as IosStoreAppAssignmentSettings) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoMobileAppAssignmentSettings(iosStoreAppAssignmentSettings),
        "vpnConfigurationId": n => { iosStoreAppAssignmentSettings.vpnConfigurationId = n.getStringValue(); },
    }
}
