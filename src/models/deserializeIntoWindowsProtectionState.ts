import {createWindowsDeviceMalwareStateFromDiscriminatorValue} from './createWindowsDeviceMalwareStateFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {serializeWindowsDeviceMalwareState} from './serializeWindowsDeviceMalwareState';
import {WindowsDefenderProductStatus} from './windowsDefenderProductStatus';
import {WindowsDeviceHealthState} from './windowsDeviceHealthState';
import {WindowsDeviceMalwareState} from './windowsDeviceMalwareState';
import {WindowsProtectionState} from './windowsProtectionState';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsProtectionState(windowsProtectionState: WindowsProtectionState | undefined = {} as WindowsProtectionState) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(windowsProtectionState),
        "antiMalwareVersion": n => { windowsProtectionState.antiMalwareVersion = n.getStringValue(); },
        "detectedMalwareState": n => { windowsProtectionState.detectedMalwareState = n.getCollectionOfObjectValues<WindowsDeviceMalwareState>(createWindowsDeviceMalwareStateFromDiscriminatorValue); },
        "deviceState": n => { windowsProtectionState.deviceState = n.getEnumValue<WindowsDeviceHealthState>(WindowsDeviceHealthState); },
        "engineVersion": n => { windowsProtectionState.engineVersion = n.getStringValue(); },
        "fullScanOverdue": n => { windowsProtectionState.fullScanOverdue = n.getBooleanValue(); },
        "fullScanRequired": n => { windowsProtectionState.fullScanRequired = n.getBooleanValue(); },
        "isVirtualMachine": n => { windowsProtectionState.isVirtualMachine = n.getBooleanValue(); },
        "lastFullScanDateTime": n => { windowsProtectionState.lastFullScanDateTime = n.getDateValue(); },
        "lastFullScanSignatureVersion": n => { windowsProtectionState.lastFullScanSignatureVersion = n.getStringValue(); },
        "lastQuickScanDateTime": n => { windowsProtectionState.lastQuickScanDateTime = n.getDateValue(); },
        "lastQuickScanSignatureVersion": n => { windowsProtectionState.lastQuickScanSignatureVersion = n.getStringValue(); },
        "lastReportedDateTime": n => { windowsProtectionState.lastReportedDateTime = n.getDateValue(); },
        "malwareProtectionEnabled": n => { windowsProtectionState.malwareProtectionEnabled = n.getBooleanValue(); },
        "networkInspectionSystemEnabled": n => { windowsProtectionState.networkInspectionSystemEnabled = n.getBooleanValue(); },
        "productStatus": n => { windowsProtectionState.productStatus = n.getEnumValue<WindowsDefenderProductStatus>(WindowsDefenderProductStatus); },
        "quickScanOverdue": n => { windowsProtectionState.quickScanOverdue = n.getBooleanValue(); },
        "realTimeProtectionEnabled": n => { windowsProtectionState.realTimeProtectionEnabled = n.getBooleanValue(); },
        "rebootRequired": n => { windowsProtectionState.rebootRequired = n.getBooleanValue(); },
        "signatureUpdateOverdue": n => { windowsProtectionState.signatureUpdateOverdue = n.getBooleanValue(); },
        "signatureVersion": n => { windowsProtectionState.signatureVersion = n.getStringValue(); },
        "tamperProtectionEnabled": n => { windowsProtectionState.tamperProtectionEnabled = n.getBooleanValue(); },
    }
}
