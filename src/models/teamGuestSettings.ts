import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface TeamGuestSettings extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * If set to true, guests can add and update channels.
     */
    allowCreateUpdateChannels?: boolean | undefined;
    /**
     * If set to true, guests can delete channels.
     */
    allowDeleteChannels?: boolean | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
