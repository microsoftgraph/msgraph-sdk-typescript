import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface UserExperienceAnalyticsAutopilotDevicesSummary extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The count of intune devices that are not autopilot registerd. Read-only.
     */
    devicesNotAutopilotRegistered?: number | undefined;
    /**
     * The count of intune devices not autopilot profile assigned. Read-only.
     */
    devicesWithoutAutopilotProfileAssigned?: number | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The count of windows 10 devices that are Intune and co-managed. Read-only.
     */
    totalWindows10DevicesWithoutTenantAttached?: number | undefined;
}
