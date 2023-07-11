import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface UserSimulationEventInfo extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Browser information from where the simulation event was initiated by a user in an attack simulation and training campaign.
     */
    browser?: string | undefined;
    /**
     * Date and time of the simulation event by a user in an attack simulation and training campaign.
     */
    eventDateTime?: Date | undefined;
    /**
     * Name of the simulation event by a user in an attack simulation and training campaign.
     */
    eventName?: string | undefined;
    /**
     * IP address from where the simulation event was initiated by a user in an attack simulation and training campaign.
     */
    ipAddress?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The operating system, platform, and device details from where the simulation event was initiated by a user in an attack simulation and training campaign.
     */
    osPlatformDeviceDetails?: string | undefined;
}
