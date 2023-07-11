import {serializeEntity} from './serializeEntity';
import {serializeWindowsDeviceMalwareState} from './serializeWindowsDeviceMalwareState';
import {WindowsDefenderProductStatus} from './windowsDefenderProductStatus';
import {WindowsDeviceHealthState} from './windowsDeviceHealthState';
import {WindowsDeviceMalwareState} from './windowsDeviceMalwareState';
import {WindowsProtectionState} from './windowsProtectionState';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWindowsProtectionState(writer: SerializationWriter, windowsProtectionState: WindowsProtectionState | undefined = {} as WindowsProtectionState) : void {
        serializeEntity(writer, windowsProtectionState)
        writer.writeStringValue("antiMalwareVersion", windowsProtectionState.antiMalwareVersion);
        writer.writeCollectionOfObjectValues<WindowsDeviceMalwareState>("detectedMalwareState", windowsProtectionState.detectedMalwareState, serializeWindowsDeviceMalwareState);
        writer.writeEnumValue<WindowsDeviceHealthState>("deviceState", windowsProtectionState.deviceState);
        writer.writeStringValue("engineVersion", windowsProtectionState.engineVersion);
        writer.writeBooleanValue("fullScanOverdue", windowsProtectionState.fullScanOverdue);
        writer.writeBooleanValue("fullScanRequired", windowsProtectionState.fullScanRequired);
        writer.writeBooleanValue("isVirtualMachine", windowsProtectionState.isVirtualMachine);
        writer.writeDateValue("lastFullScanDateTime", windowsProtectionState.lastFullScanDateTime);
        writer.writeStringValue("lastFullScanSignatureVersion", windowsProtectionState.lastFullScanSignatureVersion);
        writer.writeDateValue("lastQuickScanDateTime", windowsProtectionState.lastQuickScanDateTime);
        writer.writeStringValue("lastQuickScanSignatureVersion", windowsProtectionState.lastQuickScanSignatureVersion);
        writer.writeDateValue("lastReportedDateTime", windowsProtectionState.lastReportedDateTime);
        writer.writeBooleanValue("malwareProtectionEnabled", windowsProtectionState.malwareProtectionEnabled);
        writer.writeBooleanValue("networkInspectionSystemEnabled", windowsProtectionState.networkInspectionSystemEnabled);
        writer.writeEnumValue<WindowsDefenderProductStatus>("productStatus", windowsProtectionState.productStatus);
        writer.writeBooleanValue("quickScanOverdue", windowsProtectionState.quickScanOverdue);
        writer.writeBooleanValue("realTimeProtectionEnabled", windowsProtectionState.realTimeProtectionEnabled);
        writer.writeBooleanValue("rebootRequired", windowsProtectionState.rebootRequired);
        writer.writeBooleanValue("signatureUpdateOverdue", windowsProtectionState.signatureUpdateOverdue);
        writer.writeStringValue("signatureVersion", windowsProtectionState.signatureVersion);
        writer.writeBooleanValue("tamperProtectionEnabled", windowsProtectionState.tamperProtectionEnabled);
}
