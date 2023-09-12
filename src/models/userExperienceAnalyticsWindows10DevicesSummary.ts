import { type AdditionalDataHolder, type Parsable } from '@microsoft/kiota-abstractions';

export interface UserExperienceAnalyticsWindows10DevicesSummary extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The count of Windows 10 devices that have unsupported OS versions. Read-only.
     */
    unsupportedOSversionDeviceCount?: number | undefined;
}
