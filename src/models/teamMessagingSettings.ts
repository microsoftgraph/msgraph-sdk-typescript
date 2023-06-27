import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface TeamMessagingSettings extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * If set to true, @channel mentions are allowed.
     */
    allowChannelMentions?: boolean | undefined;
    /**
     * If set to true, owners can delete any message.
     */
    allowOwnerDeleteMessages?: boolean | undefined;
    /**
     * If set to true, @team mentions are allowed.
     */
    allowTeamMentions?: boolean | undefined;
    /**
     * If set to true, users can delete their messages.
     */
    allowUserDeleteMessages?: boolean | undefined;
    /**
     * If set to true, users can edit their messages.
     */
    allowUserEditMessages?: boolean | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
