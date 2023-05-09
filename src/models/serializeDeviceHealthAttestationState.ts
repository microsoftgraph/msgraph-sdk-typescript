import {DeviceHealthAttestationState} from './deviceHealthAttestationState';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeviceHealthAttestationState(writer: SerializationWriter, deviceHealthAttestationState: DeviceHealthAttestationState | undefined = {} as DeviceHealthAttestationState) : void {
        writer.writeStringValue("attestationIdentityKey", deviceHealthAttestationState.attestationIdentityKey);
        writer.writeStringValue("bitLockerStatus", deviceHealthAttestationState.bitLockerStatus);
        writer.writeStringValue("bootAppSecurityVersion", deviceHealthAttestationState.bootAppSecurityVersion);
        writer.writeStringValue("bootDebugging", deviceHealthAttestationState.bootDebugging);
        writer.writeStringValue("bootManagerSecurityVersion", deviceHealthAttestationState.bootManagerSecurityVersion);
        writer.writeStringValue("bootManagerVersion", deviceHealthAttestationState.bootManagerVersion);
        writer.writeStringValue("bootRevisionListInfo", deviceHealthAttestationState.bootRevisionListInfo);
        writer.writeStringValue("codeIntegrity", deviceHealthAttestationState.codeIntegrity);
        writer.writeStringValue("codeIntegrityCheckVersion", deviceHealthAttestationState.codeIntegrityCheckVersion);
        writer.writeStringValue("codeIntegrityPolicy", deviceHealthAttestationState.codeIntegrityPolicy);
        writer.writeStringValue("contentNamespaceUrl", deviceHealthAttestationState.contentNamespaceUrl);
        writer.writeStringValue("contentVersion", deviceHealthAttestationState.contentVersion);
        writer.writeStringValue("dataExcutionPolicy", deviceHealthAttestationState.dataExcutionPolicy);
        writer.writeStringValue("deviceHealthAttestationStatus", deviceHealthAttestationState.deviceHealthAttestationStatus);
        writer.writeStringValue("earlyLaunchAntiMalwareDriverProtection", deviceHealthAttestationState.earlyLaunchAntiMalwareDriverProtection);
        writer.writeStringValue("healthAttestationSupportedStatus", deviceHealthAttestationState.healthAttestationSupportedStatus);
        writer.writeStringValue("healthStatusMismatchInfo", deviceHealthAttestationState.healthStatusMismatchInfo);
        writer.writeDateValue("issuedDateTime", deviceHealthAttestationState.issuedDateTime);
        writer.writeStringValue("lastUpdateDateTime", deviceHealthAttestationState.lastUpdateDateTime);
        writer.writeStringValue("@odata.type", deviceHealthAttestationState.odataType);
        writer.writeStringValue("operatingSystemKernelDebugging", deviceHealthAttestationState.operatingSystemKernelDebugging);
        writer.writeStringValue("operatingSystemRevListInfo", deviceHealthAttestationState.operatingSystemRevListInfo);
        writer.writeStringValue("pcr0", deviceHealthAttestationState.pcr0);
        writer.writeStringValue("pcrHashAlgorithm", deviceHealthAttestationState.pcrHashAlgorithm);
        writer.writeNumberValue("resetCount", deviceHealthAttestationState.resetCount);
        writer.writeNumberValue("restartCount", deviceHealthAttestationState.restartCount);
        writer.writeStringValue("safeMode", deviceHealthAttestationState.safeMode);
        writer.writeStringValue("secureBoot", deviceHealthAttestationState.secureBoot);
        writer.writeStringValue("secureBootConfigurationPolicyFingerPrint", deviceHealthAttestationState.secureBootConfigurationPolicyFingerPrint);
        writer.writeStringValue("testSigning", deviceHealthAttestationState.testSigning);
        writer.writeStringValue("tpmVersion", deviceHealthAttestationState.tpmVersion);
        writer.writeStringValue("virtualSecureMode", deviceHealthAttestationState.virtualSecureMode);
        writer.writeStringValue("windowsPE", deviceHealthAttestationState.windowsPE);
        writer.writeAdditionalData(deviceHealthAttestationState.additionalData);
}
