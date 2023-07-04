import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceProtectionOverview extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Clean device count.
     */
    cleanDeviceCount?: number | undefined;
    /**
     * Critical failures device count.
     */
    criticalFailuresDeviceCount?: number | undefined;
    /**
     * Device with inactive threat agent count
     */
    inactiveThreatAgentDeviceCount?: number | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Pending full scan device count.
     */
    pendingFullScanDeviceCount?: number | undefined;
    /**
     * Pending manual steps device count.
     */
    pendingManualStepsDeviceCount?: number | undefined;
    /**
     * Pending offline scan device count.
     */
    pendingOfflineScanDeviceCount?: number | undefined;
    /**
     * Pending quick scan device count. Valid values -2147483648 to 2147483647
     */
    pendingQuickScanDeviceCount?: number | undefined;
    /**
     * Pending restart device count.
     */
    pendingRestartDeviceCount?: number | undefined;
    /**
     * Device with old signature count.
     */
    pendingSignatureUpdateDeviceCount?: number | undefined;
    /**
     * Total device count.
     */
    totalReportedDeviceCount?: number | undefined;
    /**
     * Device with threat agent state as unknown count.
     */
    unknownStateThreatAgentDeviceCount?: number | undefined;
}
