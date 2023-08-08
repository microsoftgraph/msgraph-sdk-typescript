import {serializeDeviceConfiguration} from './serializeDeviceConfiguration';
import type {Windows10EnterpriseModernAppManagementConfiguration} from './windows10EnterpriseModernAppManagementConfiguration';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWindows10EnterpriseModernAppManagementConfiguration(writer: SerializationWriter, windows10EnterpriseModernAppManagementConfiguration: Windows10EnterpriseModernAppManagementConfiguration | undefined = {} as Windows10EnterpriseModernAppManagementConfiguration) : void {
        serializeDeviceConfiguration(writer, windows10EnterpriseModernAppManagementConfiguration)
        writer.writeBooleanValue("uninstallBuiltInApps", windows10EnterpriseModernAppManagementConfiguration.uninstallBuiltInApps);
}
