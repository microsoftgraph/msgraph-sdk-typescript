import {DeviceHealthAttestationState} from './deviceHealthAttestationState';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DeviceHealthAttestationStateImpl implements AdditionalDataHolder, DeviceHealthAttestationState, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData: Record<string, unknown>;
    /** TWhen an Attestation Identity Key (AIK) is present on a device, it indicates that the device has an endorsement key (EK) certificate. */
    attestationIdentityKey?: string | undefined;
    /** On or Off of BitLocker Drive Encryption */
    bitLockerStatus?: string | undefined;
    /** The security version number of the Boot Application */
    bootAppSecurityVersion?: string | undefined;
    /** When bootDebugging is enabled, the device is used in development and testing */
    bootDebugging?: string | undefined;
    /** The security version number of the Boot Application */
    bootManagerSecurityVersion?: string | undefined;
    /** The version of the Boot Manager */
    bootManagerVersion?: string | undefined;
    /** The Boot Revision List that was loaded during initial boot on the attested device */
    bootRevisionListInfo?: string | undefined;
    /** When code integrity is enabled, code execution is restricted to integrity verified code */
    codeIntegrity?: string | undefined;
    /** The version of the Boot Manager */
    codeIntegrityCheckVersion?: string | undefined;
    /** The Code Integrity policy that is controlling the security of the boot environment */
    codeIntegrityPolicy?: string | undefined;
    /** The DHA report version. (Namespace version) */
    contentNamespaceUrl?: string | undefined;
    /** The HealthAttestation state schema version */
    contentVersion?: string | undefined;
    /** DEP Policy defines a set of hardware and software technologies that perform additional checks on memory */
    dataExcutionPolicy?: string | undefined;
    /** The DHA report version. (Namespace version) */
    deviceHealthAttestationStatus?: string | undefined;
    /** ELAM provides protection for the computers in your network when they start up */
    earlyLaunchAntiMalwareDriverProtection?: string | undefined;
    /** This attribute indicates if DHA is supported for the device */
    healthAttestationSupportedStatus?: string | undefined;
    /** This attribute appears if DHA-Service detects an integrity issue */
    healthStatusMismatchInfo?: string | undefined;
    /** The DateTime when device was evaluated or issued to MDM */
    issuedDateTime?: Date | undefined;
    /** The Timestamp of the last update. */
    lastUpdateDateTime?: string | undefined;
    /** When operatingSystemKernelDebugging is enabled, the device is used in development and testing */
    operatingSystemKernelDebugging?: string | undefined;
    /** The Operating System Revision List that was loaded during initial boot on the attested device */
    operatingSystemRevListInfo?: string | undefined;
    /** The measurement that is captured in PCR[0] */
    pcr0?: string | undefined;
    /** Informational attribute that identifies the HASH algorithm that was used by TPM */
    pcrHashAlgorithm?: string | undefined;
    /** The number of times a PC device has hibernated or resumed */
    resetCount?: number | undefined;
    /** The number of times a PC device has rebooted */
    restartCount?: number | undefined;
    /** Safe mode is a troubleshooting option for Windows that starts your computer in a limited state */
    safeMode?: string | undefined;
    /** When Secure Boot is enabled, the core components must have the correct cryptographic signatures */
    secureBoot?: string | undefined;
    /** Fingerprint of the Custom Secure Boot Configuration Policy */
    secureBootConfigurationPolicyFingerPrint?: string | undefined;
    /** When test signing is allowed, the device does not enforce signature validation during boot */
    testSigning?: string | undefined;
    /** The security version number of the Boot Application */
    tpmVersion?: string | undefined;
    /** VSM is a container that protects high value assets from a compromised kernel */
    virtualSecureMode?: string | undefined;
    /** Operating system running with limited services that is used to prepare a computer for Windows */
    windowsPE?: string | undefined;
    /**
     * Instantiates a new deviceHealthAttestationState and sets the default values.
     * @param deviceHealthAttestationStateParameterValue 
     */
    public constructor(deviceHealthAttestationStateParameterValue?: DeviceHealthAttestationState | undefined) {
        this.additionalData = {};
        this.additionalData = deviceHealthAttestationStateParameterValue?.additionalData ? {} : deviceHealthAttestationStateParameterValue?.additionalData!
        this.attestationIdentityKey = deviceHealthAttestationStateParameterValue?.attestationIdentityKey ;
        this.bitLockerStatus = deviceHealthAttestationStateParameterValue?.bitLockerStatus ;
        this.bootAppSecurityVersion = deviceHealthAttestationStateParameterValue?.bootAppSecurityVersion ;
        this.bootDebugging = deviceHealthAttestationStateParameterValue?.bootDebugging ;
        this.bootManagerSecurityVersion = deviceHealthAttestationStateParameterValue?.bootManagerSecurityVersion ;
        this.bootManagerVersion = deviceHealthAttestationStateParameterValue?.bootManagerVersion ;
        this.bootRevisionListInfo = deviceHealthAttestationStateParameterValue?.bootRevisionListInfo ;
        this.codeIntegrity = deviceHealthAttestationStateParameterValue?.codeIntegrity ;
        this.codeIntegrityCheckVersion = deviceHealthAttestationStateParameterValue?.codeIntegrityCheckVersion ;
        this.codeIntegrityPolicy = deviceHealthAttestationStateParameterValue?.codeIntegrityPolicy ;
        this.contentNamespaceUrl = deviceHealthAttestationStateParameterValue?.contentNamespaceUrl ;
        this.contentVersion = deviceHealthAttestationStateParameterValue?.contentVersion ;
        this.dataExcutionPolicy = deviceHealthAttestationStateParameterValue?.dataExcutionPolicy ;
        this.deviceHealthAttestationStatus = deviceHealthAttestationStateParameterValue?.deviceHealthAttestationStatus ;
        this.earlyLaunchAntiMalwareDriverProtection = deviceHealthAttestationStateParameterValue?.earlyLaunchAntiMalwareDriverProtection ;
        this.healthAttestationSupportedStatus = deviceHealthAttestationStateParameterValue?.healthAttestationSupportedStatus ;
        this.healthStatusMismatchInfo = deviceHealthAttestationStateParameterValue?.healthStatusMismatchInfo ;
        this.issuedDateTime = deviceHealthAttestationStateParameterValue?.issuedDateTime ;
        this.lastUpdateDateTime = deviceHealthAttestationStateParameterValue?.lastUpdateDateTime ;
        this.operatingSystemKernelDebugging = deviceHealthAttestationStateParameterValue?.operatingSystemKernelDebugging ;
        this.operatingSystemRevListInfo = deviceHealthAttestationStateParameterValue?.operatingSystemRevListInfo ;
        this.pcr0 = deviceHealthAttestationStateParameterValue?.pcr0 ;
        this.pcrHashAlgorithm = deviceHealthAttestationStateParameterValue?.pcrHashAlgorithm ;
        this.resetCount = deviceHealthAttestationStateParameterValue?.resetCount ;
        this.restartCount = deviceHealthAttestationStateParameterValue?.restartCount ;
        this.safeMode = deviceHealthAttestationStateParameterValue?.safeMode ;
        this.secureBoot = deviceHealthAttestationStateParameterValue?.secureBoot ;
        this.secureBootConfigurationPolicyFingerPrint = deviceHealthAttestationStateParameterValue?.secureBootConfigurationPolicyFingerPrint ;
        this.testSigning = deviceHealthAttestationStateParameterValue?.testSigning ;
        this.tpmVersion = deviceHealthAttestationStateParameterValue?.tpmVersion ;
        this.virtualSecureMode = deviceHealthAttestationStateParameterValue?.virtualSecureMode ;
        this.windowsPE = deviceHealthAttestationStateParameterValue?.windowsPE ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "attestationIdentityKey": n => { this.attestationIdentityKey = n.getStringValue(); },
            "bitLockerStatus": n => { this.bitLockerStatus = n.getStringValue(); },
            "bootAppSecurityVersion": n => { this.bootAppSecurityVersion = n.getStringValue(); },
            "bootDebugging": n => { this.bootDebugging = n.getStringValue(); },
            "bootManagerSecurityVersion": n => { this.bootManagerSecurityVersion = n.getStringValue(); },
            "bootManagerVersion": n => { this.bootManagerVersion = n.getStringValue(); },
            "bootRevisionListInfo": n => { this.bootRevisionListInfo = n.getStringValue(); },
            "codeIntegrity": n => { this.codeIntegrity = n.getStringValue(); },
            "codeIntegrityCheckVersion": n => { this.codeIntegrityCheckVersion = n.getStringValue(); },
            "codeIntegrityPolicy": n => { this.codeIntegrityPolicy = n.getStringValue(); },
            "contentNamespaceUrl": n => { this.contentNamespaceUrl = n.getStringValue(); },
            "contentVersion": n => { this.contentVersion = n.getStringValue(); },
            "dataExcutionPolicy": n => { this.dataExcutionPolicy = n.getStringValue(); },
            "deviceHealthAttestationStatus": n => { this.deviceHealthAttestationStatus = n.getStringValue(); },
            "earlyLaunchAntiMalwareDriverProtection": n => { this.earlyLaunchAntiMalwareDriverProtection = n.getStringValue(); },
            "healthAttestationSupportedStatus": n => { this.healthAttestationSupportedStatus = n.getStringValue(); },
            "healthStatusMismatchInfo": n => { this.healthStatusMismatchInfo = n.getStringValue(); },
            "issuedDateTime": n => { this.issuedDateTime = n.getDateValue(); },
            "lastUpdateDateTime": n => { this.lastUpdateDateTime = n.getStringValue(); },
            "operatingSystemKernelDebugging": n => { this.operatingSystemKernelDebugging = n.getStringValue(); },
            "operatingSystemRevListInfo": n => { this.operatingSystemRevListInfo = n.getStringValue(); },
            "pcr0": n => { this.pcr0 = n.getStringValue(); },
            "pcrHashAlgorithm": n => { this.pcrHashAlgorithm = n.getStringValue(); },
            "resetCount": n => { this.resetCount = n.getNumberValue(); },
            "restartCount": n => { this.restartCount = n.getNumberValue(); },
            "safeMode": n => { this.safeMode = n.getStringValue(); },
            "secureBoot": n => { this.secureBoot = n.getStringValue(); },
            "secureBootConfigurationPolicyFingerPrint": n => { this.secureBootConfigurationPolicyFingerPrint = n.getStringValue(); },
            "testSigning": n => { this.testSigning = n.getStringValue(); },
            "tpmVersion": n => { this.tpmVersion = n.getStringValue(); },
            "virtualSecureMode": n => { this.virtualSecureMode = n.getStringValue(); },
            "windowsPE": n => { this.windowsPE = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.attestationIdentityKey){
        if(this.attestationIdentityKey)
        writer.writeStringValue("attestationIdentityKey", this.attestationIdentityKey);
        }
        if(this.bitLockerStatus){
        if(this.bitLockerStatus)
        writer.writeStringValue("bitLockerStatus", this.bitLockerStatus);
        }
        if(this.bootAppSecurityVersion){
        if(this.bootAppSecurityVersion)
        writer.writeStringValue("bootAppSecurityVersion", this.bootAppSecurityVersion);
        }
        if(this.bootDebugging){
        if(this.bootDebugging)
        writer.writeStringValue("bootDebugging", this.bootDebugging);
        }
        if(this.bootManagerSecurityVersion){
        if(this.bootManagerSecurityVersion)
        writer.writeStringValue("bootManagerSecurityVersion", this.bootManagerSecurityVersion);
        }
        if(this.bootManagerVersion){
        if(this.bootManagerVersion)
        writer.writeStringValue("bootManagerVersion", this.bootManagerVersion);
        }
        if(this.bootRevisionListInfo){
        if(this.bootRevisionListInfo)
        writer.writeStringValue("bootRevisionListInfo", this.bootRevisionListInfo);
        }
        if(this.codeIntegrity){
        if(this.codeIntegrity)
        writer.writeStringValue("codeIntegrity", this.codeIntegrity);
        }
        if(this.codeIntegrityCheckVersion){
        if(this.codeIntegrityCheckVersion)
        writer.writeStringValue("codeIntegrityCheckVersion", this.codeIntegrityCheckVersion);
        }
        if(this.codeIntegrityPolicy){
        if(this.codeIntegrityPolicy)
        writer.writeStringValue("codeIntegrityPolicy", this.codeIntegrityPolicy);
        }
        if(this.contentNamespaceUrl){
        if(this.contentNamespaceUrl)
        writer.writeStringValue("contentNamespaceUrl", this.contentNamespaceUrl);
        }
        if(this.contentVersion){
        if(this.contentVersion)
        writer.writeStringValue("contentVersion", this.contentVersion);
        }
        if(this.dataExcutionPolicy){
        if(this.dataExcutionPolicy)
        writer.writeStringValue("dataExcutionPolicy", this.dataExcutionPolicy);
        }
        if(this.deviceHealthAttestationStatus){
        if(this.deviceHealthAttestationStatus)
        writer.writeStringValue("deviceHealthAttestationStatus", this.deviceHealthAttestationStatus);
        }
        if(this.earlyLaunchAntiMalwareDriverProtection){
        if(this.earlyLaunchAntiMalwareDriverProtection)
        writer.writeStringValue("earlyLaunchAntiMalwareDriverProtection", this.earlyLaunchAntiMalwareDriverProtection);
        }
        if(this.healthAttestationSupportedStatus){
        if(this.healthAttestationSupportedStatus)
        writer.writeStringValue("healthAttestationSupportedStatus", this.healthAttestationSupportedStatus);
        }
        if(this.healthStatusMismatchInfo){
        if(this.healthStatusMismatchInfo)
        writer.writeStringValue("healthStatusMismatchInfo", this.healthStatusMismatchInfo);
        }
        if(this.issuedDateTime){
        if(this.issuedDateTime)
        writer.writeDateValue("issuedDateTime", this.issuedDateTime);
        }
        if(this.lastUpdateDateTime){
        if(this.lastUpdateDateTime)
        writer.writeStringValue("lastUpdateDateTime", this.lastUpdateDateTime);
        }
        if(this.operatingSystemKernelDebugging){
        if(this.operatingSystemKernelDebugging)
        writer.writeStringValue("operatingSystemKernelDebugging", this.operatingSystemKernelDebugging);
        }
        if(this.operatingSystemRevListInfo){
        if(this.operatingSystemRevListInfo)
        writer.writeStringValue("operatingSystemRevListInfo", this.operatingSystemRevListInfo);
        }
        if(this.pcr0){
        if(this.pcr0)
        writer.writeStringValue("pcr0", this.pcr0);
        }
        if(this.pcrHashAlgorithm){
        if(this.pcrHashAlgorithm)
        writer.writeStringValue("pcrHashAlgorithm", this.pcrHashAlgorithm);
        }
        if(this.resetCount){
        if(this.resetCount)
        writer.writeNumberValue("resetCount", this.resetCount);
        }
        if(this.restartCount){
        if(this.restartCount)
        writer.writeNumberValue("restartCount", this.restartCount);
        }
        if(this.safeMode){
        if(this.safeMode)
        writer.writeStringValue("safeMode", this.safeMode);
        }
        if(this.secureBoot){
        if(this.secureBoot)
        writer.writeStringValue("secureBoot", this.secureBoot);
        }
        if(this.secureBootConfigurationPolicyFingerPrint){
        if(this.secureBootConfigurationPolicyFingerPrint)
        writer.writeStringValue("secureBootConfigurationPolicyFingerPrint", this.secureBootConfigurationPolicyFingerPrint);
        }
        if(this.testSigning){
        if(this.testSigning)
        writer.writeStringValue("testSigning", this.testSigning);
        }
        if(this.tpmVersion){
        if(this.tpmVersion)
        writer.writeStringValue("tpmVersion", this.tpmVersion);
        }
        if(this.virtualSecureMode){
        if(this.virtualSecureMode)
        writer.writeStringValue("virtualSecureMode", this.virtualSecureMode);
        }
        if(this.windowsPE){
        if(this.windowsPE)
        writer.writeStringValue("windowsPE", this.windowsPE);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
