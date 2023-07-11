import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceExchangeAccessStateSummary extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Total count of devices with Exchange Access State: Allowed.
     */
    allowedDeviceCount?: number | undefined;
    /**
     * Total count of devices with Exchange Access State: Blocked.
     */
    blockedDeviceCount?: number | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Total count of devices with Exchange Access State: Quarantined.
     */
    quarantinedDeviceCount?: number | undefined;
    /**
     * Total count of devices for which no Exchange Access State could be found.
     */
    unavailableDeviceCount?: number | undefined;
    /**
     * Total count of devices with Exchange Access State: Unknown.
     */
    unknownDeviceCount?: number | undefined;
}
