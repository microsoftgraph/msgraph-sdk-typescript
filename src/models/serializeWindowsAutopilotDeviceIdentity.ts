import {EnrollmentState} from './enrollmentState';
import {serializeEntity} from './serializeEntity';
import {WindowsAutopilotDeviceIdentity} from './windowsAutopilotDeviceIdentity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWindowsAutopilotDeviceIdentity(writer: SerializationWriter, windowsAutopilotDeviceIdentity: WindowsAutopilotDeviceIdentity | undefined = {} as WindowsAutopilotDeviceIdentity) : void {
        serializeEntity(writer, windowsAutopilotDeviceIdentity)
        writer.writeStringValue("addressableUserName", windowsAutopilotDeviceIdentity.addressableUserName);
        writer.writeStringValue("azureActiveDirectoryDeviceId", windowsAutopilotDeviceIdentity.azureActiveDirectoryDeviceId);
        writer.writeStringValue("displayName", windowsAutopilotDeviceIdentity.displayName);
        writer.writeEnumValue<EnrollmentState>("enrollmentState", windowsAutopilotDeviceIdentity.enrollmentState);
        writer.writeStringValue("groupTag", windowsAutopilotDeviceIdentity.groupTag);
        writer.writeDateValue("lastContactedDateTime", windowsAutopilotDeviceIdentity.lastContactedDateTime);
        writer.writeStringValue("managedDeviceId", windowsAutopilotDeviceIdentity.managedDeviceId);
        writer.writeStringValue("manufacturer", windowsAutopilotDeviceIdentity.manufacturer);
        writer.writeStringValue("model", windowsAutopilotDeviceIdentity.model);
        writer.writeStringValue("productKey", windowsAutopilotDeviceIdentity.productKey);
        writer.writeStringValue("purchaseOrderIdentifier", windowsAutopilotDeviceIdentity.purchaseOrderIdentifier);
        writer.writeStringValue("resourceName", windowsAutopilotDeviceIdentity.resourceName);
        writer.writeStringValue("serialNumber", windowsAutopilotDeviceIdentity.serialNumber);
        writer.writeStringValue("skuNumber", windowsAutopilotDeviceIdentity.skuNumber);
        writer.writeStringValue("systemFamily", windowsAutopilotDeviceIdentity.systemFamily);
        writer.writeStringValue("userPrincipalName", windowsAutopilotDeviceIdentity.userPrincipalName);
}
