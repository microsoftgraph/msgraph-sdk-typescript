import {ChatMessageMentionedIdentitySet} from './chatMessageMentionedIdentitySet';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ChatMessageMention extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Index of an entity being mentioned in the specified chatMessage. Matches the {index} value in the corresponding <at id='{index}'> tag in the message body.
     */
    id?: number | undefined;
    /**
     * The entity (user, application, team, or channel) that was @mentioned.
     */
    mentioned?: ChatMessageMentionedIdentitySet | undefined;
    /**
     * String used to represent the mention. For example, a user's display name, a team name.
     */
    mentionText?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
