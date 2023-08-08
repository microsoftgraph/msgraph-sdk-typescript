import type {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface UserExperienceAnalyticsCloudManagementDevicesSummary extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Total number of  co-managed devices. Read-only.
     */
    coManagedDeviceCount?: number | undefined;
    /**
     * The count of intune devices that are not autopilot registerd. Read-only.
     */
    intuneDeviceCount?: number | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Total count of tenant attach devices. Read-only.
     */
    tenantAttachDeviceCount?: number | undefined;
}
