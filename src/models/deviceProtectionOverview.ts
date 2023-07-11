import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceProtectionOverview extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Indicates number of devices reporting as clean
     */
    cleanDeviceCount?: number | undefined;
    /**
     * Indicates number of devices with critical failures
     */
    criticalFailuresDeviceCount?: number | undefined;
    /**
     * Indicates number of devices with inactive threat agent
     */
    inactiveThreatAgentDeviceCount?: number | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Indicates number of devices pending full scan
     */
    pendingFullScanDeviceCount?: number | undefined;
    /**
     * Indicates number of devices with pending manual steps
     */
    pendingManualStepsDeviceCount?: number | undefined;
    /**
     * Indicates number of pending offline scan devices
     */
    pendingOfflineScanDeviceCount?: number | undefined;
    /**
     * Indicates the number of devices that have a pending full scan. Valid values -2147483648 to 2147483647
     */
    pendingQuickScanDeviceCount?: number | undefined;
    /**
     * Indicates number of devices pending restart
     */
    pendingRestartDeviceCount?: number | undefined;
    /**
     * Indicates number of devices with an old signature
     */
    pendingSignatureUpdateDeviceCount?: number | undefined;
    /**
     * Total device count.
     */
    totalReportedDeviceCount?: number | undefined;
    /**
     * Indicates number of devices with threat agent state as unknown
     */
    unknownStateThreatAgentDeviceCount?: number | undefined;
}
