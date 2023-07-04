import {Entity} from './entity';
import {WindowsDefenderProductStatus} from './windowsDefenderProductStatus';
import {WindowsDeviceHealthState} from './windowsDeviceHealthState';
import {WindowsDeviceMalwareState} from './windowsDeviceMalwareState';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WindowsProtectionState extends Entity, Parsable {
    /**
     * Current anti malware version
     */
    antiMalwareVersion?: string | undefined;
    /**
     * Device malware list
     */
    detectedMalwareState?: WindowsDeviceMalwareState[] | undefined;
    /**
     * Computer's state (like clean or pending full scan or pending reboot etc). Possible values are: clean, fullScanPending, rebootPending, manualStepsPending, offlineScanPending, critical.
     */
    deviceState?: WindowsDeviceHealthState | undefined;
    /**
     * Current endpoint protection engine's version
     */
    engineVersion?: string | undefined;
    /**
     * Full scan overdue or not?
     */
    fullScanOverdue?: boolean | undefined;
    /**
     * Full scan required or not?
     */
    fullScanRequired?: boolean | undefined;
    /**
     * Indicates whether the device is a virtual machine.
     */
    isVirtualMachine?: boolean | undefined;
    /**
     * Last quick scan datetime
     */
    lastFullScanDateTime?: Date | undefined;
    /**
     * Last full scan signature version
     */
    lastFullScanSignatureVersion?: string | undefined;
    /**
     * Last quick scan datetime
     */
    lastQuickScanDateTime?: Date | undefined;
    /**
     * Last quick scan signature version
     */
    lastQuickScanSignatureVersion?: string | undefined;
    /**
     * Last device health status reported time
     */
    lastReportedDateTime?: Date | undefined;
    /**
     * Anti malware is enabled or not
     */
    malwareProtectionEnabled?: boolean | undefined;
    /**
     * Network inspection system enabled or not?
     */
    networkInspectionSystemEnabled?: boolean | undefined;
    /**
     * Product Status of Windows Defender Antivirus. Possible values are: noStatus, serviceNotRunning, serviceStartedWithoutMalwareProtection, pendingFullScanDueToThreatAction, pendingRebootDueToThreatAction, pendingManualStepsDueToThreatAction, avSignaturesOutOfDate, asSignaturesOutOfDate, noQuickScanHappenedForSpecifiedPeriod, noFullScanHappenedForSpecifiedPeriod, systemInitiatedScanInProgress, systemInitiatedCleanInProgress, samplesPendingSubmission, productRunningInEvaluationMode, productRunningInNonGenuineMode, productExpired, offlineScanRequired, serviceShutdownAsPartOfSystemShutdown, threatRemediationFailedCritically, threatRemediationFailedNonCritically, noStatusFlagsSet, platformOutOfDate, platformUpdateInProgress, platformAboutToBeOutdated, signatureOrPlatformEndOfLifeIsPastOrIsImpending, windowsSModeSignaturesInUseOnNonWin10SInstall.
     */
    productStatus?: WindowsDefenderProductStatus | undefined;
    /**
     * Quick scan overdue or not?
     */
    quickScanOverdue?: boolean | undefined;
    /**
     * Real time protection is enabled or not?
     */
    realTimeProtectionEnabled?: boolean | undefined;
    /**
     * Reboot required or not?
     */
    rebootRequired?: boolean | undefined;
    /**
     * Signature out of date or not?
     */
    signatureUpdateOverdue?: boolean | undefined;
    /**
     * Current malware definitions version
     */
    signatureVersion?: string | undefined;
    /**
     * Indicates whether the Windows Defender tamper protection feature is enabled.
     */
    tamperProtectionEnabled?: boolean | undefined;
}
