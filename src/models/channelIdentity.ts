import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ChannelIdentity extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The identity of the channel in which the message was posted.
     */
    channelId?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The identity of the team in which the message was posted.
     */
    teamId?: string | undefined;
}
