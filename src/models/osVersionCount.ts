import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface OsVersionCount extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Count of devices with malware for the OS version
     */
    deviceCount?: number | undefined;
    /**
     * The Timestamp of the last update for the device count in UTC
     */
    lastUpdateDateTime?: Date | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * OS version
     */
    osVersion?: string | undefined;
}
