import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface UserExperienceAnalyticsSettings extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * When TRUE, indicates Tenant attach is configured properly and System Center Configuration Manager (SCCM) tenant attached devices will show up in endpoint analytics reporting. When FALSE, indicates Tenant attach is not configured. FALSE by default.
     */
    configurationManagerDataConnectorConfigured?: boolean | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
