import {deserializeIntoEntity} from './deserializeIntoEntity';
import {EnrollmentState} from './enrollmentState';
import {WindowsAutopilotDeviceIdentity} from './windowsAutopilotDeviceIdentity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsAutopilotDeviceIdentity(windowsAutopilotDeviceIdentity: WindowsAutopilotDeviceIdentity | undefined = {} as WindowsAutopilotDeviceIdentity) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(windowsAutopilotDeviceIdentity),
        "addressableUserName": n => { windowsAutopilotDeviceIdentity.addressableUserName = n.getStringValue(); },
        "azureActiveDirectoryDeviceId": n => { windowsAutopilotDeviceIdentity.azureActiveDirectoryDeviceId = n.getStringValue(); },
        "displayName": n => { windowsAutopilotDeviceIdentity.displayName = n.getStringValue(); },
        "enrollmentState": n => { windowsAutopilotDeviceIdentity.enrollmentState = n.getEnumValue<EnrollmentState>(EnrollmentState); },
        "groupTag": n => { windowsAutopilotDeviceIdentity.groupTag = n.getStringValue(); },
        "lastContactedDateTime": n => { windowsAutopilotDeviceIdentity.lastContactedDateTime = n.getDateValue(); },
        "managedDeviceId": n => { windowsAutopilotDeviceIdentity.managedDeviceId = n.getStringValue(); },
        "manufacturer": n => { windowsAutopilotDeviceIdentity.manufacturer = n.getStringValue(); },
        "model": n => { windowsAutopilotDeviceIdentity.model = n.getStringValue(); },
        "productKey": n => { windowsAutopilotDeviceIdentity.productKey = n.getStringValue(); },
        "purchaseOrderIdentifier": n => { windowsAutopilotDeviceIdentity.purchaseOrderIdentifier = n.getStringValue(); },
        "resourceName": n => { windowsAutopilotDeviceIdentity.resourceName = n.getStringValue(); },
        "serialNumber": n => { windowsAutopilotDeviceIdentity.serialNumber = n.getStringValue(); },
        "skuNumber": n => { windowsAutopilotDeviceIdentity.skuNumber = n.getStringValue(); },
        "systemFamily": n => { windowsAutopilotDeviceIdentity.systemFamily = n.getStringValue(); },
        "userPrincipalName": n => { windowsAutopilotDeviceIdentity.userPrincipalName = n.getStringValue(); },
    }
}
