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
     * Indicates device's health state. Possible values are: clean, fullScanPending, rebootPending, manualStepsPending, offlineScanPending, critical. Possible values are: clean, fullScanPending, rebootPending, manualStepsPending, offlineScanPending, critical.
     */
    deviceState?: WindowsDeviceHealthState | undefined;
    /**
     * Current endpoint protection engine's version
     */
    engineVersion?: string | undefined;
    /**
     * When TRUE indicates full scan is overdue, when FALSE indicates full scan is not overdue. Defaults to setting on client device.
     */
    fullScanOverdue?: boolean | undefined;
    /**
     * When TRUE indicates full scan is required, when FALSE indicates full scan is not required. Defaults to setting on client device.
     */
    fullScanRequired?: boolean | undefined;
    /**
     * When TRUE indicates the device is a virtual machine, when FALSE indicates the device is not a virtual machine. Defaults to setting on client device.
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
     * When TRUE indicates anti malware is enabled when FALSE indicates anti malware is not enabled.
     */
    malwareProtectionEnabled?: boolean | undefined;
    /**
     * When TRUE indicates network inspection system enabled, when FALSE indicates network inspection system is not enabled. Defaults to setting on client device.
     */
    networkInspectionSystemEnabled?: boolean | undefined;
    /**
     * Product Status of Windows Defender Antivirus. Possible values are: noStatus, serviceNotRunning, serviceStartedWithoutMalwareProtection, pendingFullScanDueToThreatAction, pendingRebootDueToThreatAction, pendingManualStepsDueToThreatAction, avSignaturesOutOfDate, asSignaturesOutOfDate, noQuickScanHappenedForSpecifiedPeriod, noFullScanHappenedForSpecifiedPeriod, systemInitiatedScanInProgress, systemInitiatedCleanInProgress, samplesPendingSubmission, productRunningInEvaluationMode, productRunningInNonGenuineMode, productExpired, offlineScanRequired, serviceShutdownAsPartOfSystemShutdown, threatRemediationFailedCritically, threatRemediationFailedNonCritically, noStatusFlagsSet, platformOutOfDate, platformUpdateInProgress, platformAboutToBeOutdated, signatureOrPlatformEndOfLifeIsPastOrIsImpending, windowsSModeSignaturesInUseOnNonWin10SInstall. Possible values are: noStatus, serviceNotRunning, serviceStartedWithoutMalwareProtection, pendingFullScanDueToThreatAction, pendingRebootDueToThreatAction, pendingManualStepsDueToThreatAction, avSignaturesOutOfDate, asSignaturesOutOfDate, noQuickScanHappenedForSpecifiedPeriod, noFullScanHappenedForSpecifiedPeriod, systemInitiatedScanInProgress, systemInitiatedCleanInProgress, samplesPendingSubmission, productRunningInEvaluationMode, productRunningInNonGenuineMode, productExpired, offlineScanRequired, serviceShutdownAsPartOfSystemShutdown, threatRemediationFailedCritically, threatRemediationFailedNonCritically, noStatusFlagsSet, platformOutOfDate, platformUpdateInProgress, platformAboutToBeOutdated, signatureOrPlatformEndOfLifeIsPastOrIsImpending, windowsSModeSignaturesInUseOnNonWin10SInstall.
     */
    productStatus?: WindowsDefenderProductStatus | undefined;
    /**
     * When TRUE indicates quick scan is overdue, when FALSE indicates quick scan is not overdue. Defaults to setting on client device.
     */
    quickScanOverdue?: boolean | undefined;
    /**
     * When TRUE indicates real time protection is enabled, when FALSE indicates real time protection is not enabled. Defaults to setting on client device.
     */
    realTimeProtectionEnabled?: boolean | undefined;
    /**
     * When TRUE indicates reboot is required, when FALSE indicates when TRUE indicates reboot is not required. Defaults to setting on client device.
     */
    rebootRequired?: boolean | undefined;
    /**
     * When TRUE indicates signature is out of date, when FALSE indicates signature is not out of date. Defaults to setting on client device.
     */
    signatureUpdateOverdue?: boolean | undefined;
    /**
     * Current malware definitions version
     */
    signatureVersion?: string | undefined;
    /**
     * When TRUE indicates the Windows Defender tamper protection feature is enabled, when FALSE indicates the Windows Defender tamper protection feature is not enabled. Defaults to setting on client device.
     */
    tamperProtectionEnabled?: boolean | undefined;
}
