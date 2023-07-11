import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceHealthAttestationState extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * TWhen an Attestation Identity Key (AIK) is present on a device, it indicates that the device has an endorsement key (EK) certificate.
     */
    attestationIdentityKey?: string | undefined;
    /**
     * On or Off of BitLocker Drive Encryption
     */
    bitLockerStatus?: string | undefined;
    /**
     * The security version number of the Boot Application
     */
    bootAppSecurityVersion?: string | undefined;
    /**
     * When bootDebugging is enabled, the device is used in development and testing
     */
    bootDebugging?: string | undefined;
    /**
     * The security version number of the Boot Application
     */
    bootManagerSecurityVersion?: string | undefined;
    /**
     * The version of the Boot Manager
     */
    bootManagerVersion?: string | undefined;
    /**
     * The Boot Revision List that was loaded during initial boot on the attested device
     */
    bootRevisionListInfo?: string | undefined;
    /**
     * When code integrity is enabled, code execution is restricted to integrity verified code
     */
    codeIntegrity?: string | undefined;
    /**
     * The version of the Boot Manager
     */
    codeIntegrityCheckVersion?: string | undefined;
    /**
     * The Code Integrity policy that is controlling the security of the boot environment
     */
    codeIntegrityPolicy?: string | undefined;
    /**
     * The DHA report version. (Namespace version)
     */
    contentNamespaceUrl?: string | undefined;
    /**
     * The HealthAttestation state schema version
     */
    contentVersion?: string | undefined;
    /**
     * DEP Policy defines a set of hardware and software technologies that perform additional checks on memory
     */
    dataExcutionPolicy?: string | undefined;
    /**
     * The DHA report version. (Namespace version)
     */
    deviceHealthAttestationStatus?: string | undefined;
    /**
     * ELAM provides protection for the computers in your network when they start up
     */
    earlyLaunchAntiMalwareDriverProtection?: string | undefined;
    /**
     * This attribute indicates if DHA is supported for the device
     */
    healthAttestationSupportedStatus?: string | undefined;
    /**
     * This attribute appears if DHA-Service detects an integrity issue
     */
    healthStatusMismatchInfo?: string | undefined;
    /**
     * The DateTime when device was evaluated or issued to MDM
     */
    issuedDateTime?: Date | undefined;
    /**
     * The Timestamp of the last update.
     */
    lastUpdateDateTime?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * When operatingSystemKernelDebugging is enabled, the device is used in development and testing
     */
    operatingSystemKernelDebugging?: string | undefined;
    /**
     * The Operating System Revision List that was loaded during initial boot on the attested device
     */
    operatingSystemRevListInfo?: string | undefined;
    /**
     * The measurement that is captured in PCR[0]
     */
    pcr0?: string | undefined;
    /**
     * Informational attribute that identifies the HASH algorithm that was used by TPM
     */
    pcrHashAlgorithm?: string | undefined;
    /**
     * The number of times a PC device has hibernated or resumed
     */
    resetCount?: number | undefined;
    /**
     * The number of times a PC device has rebooted
     */
    restartCount?: number | undefined;
    /**
     * Safe mode is a troubleshooting option for Windows that starts your computer in a limited state
     */
    safeMode?: string | undefined;
    /**
     * When Secure Boot is enabled, the core components must have the correct cryptographic signatures
     */
    secureBoot?: string | undefined;
    /**
     * Fingerprint of the Custom Secure Boot Configuration Policy
     */
    secureBootConfigurationPolicyFingerPrint?: string | undefined;
    /**
     * When test signing is allowed, the device does not enforce signature validation during boot
     */
    testSigning?: string | undefined;
    /**
     * The security version number of the Boot Application
     */
    tpmVersion?: string | undefined;
    /**
     * VSM is a container that protects high value assets from a compromised kernel
     */
    virtualSecureMode?: string | undefined;
    /**
     * Operating system running with limited services that is used to prepare a computer for Windows
     */
    windowsPE?: string | undefined;
}
