import {deserializeIntoDeviceConfiguration} from './deserializeIntoDeviceConfiguration';
import {Windows10EnterpriseModernAppManagementConfiguration} from './windows10EnterpriseModernAppManagementConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindows10EnterpriseModernAppManagementConfiguration(windows10EnterpriseModernAppManagementConfiguration: Windows10EnterpriseModernAppManagementConfiguration | undefined = {} as Windows10EnterpriseModernAppManagementConfiguration) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceConfiguration(windows10EnterpriseModernAppManagementConfiguration),
        "uninstallBuiltInApps": n => { windows10EnterpriseModernAppManagementConfiguration.uninstallBuiltInApps = n.getBooleanValue(); },
    }
}
