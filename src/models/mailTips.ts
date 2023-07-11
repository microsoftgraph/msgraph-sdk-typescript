import {AutomaticRepliesMailTips} from './automaticRepliesMailTips';
import {EmailAddress} from './emailAddress';
import {MailTipsError} from './mailTipsError';
import {Recipient} from './recipient';
import {RecipientScopeType} from './recipientScopeType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface MailTips extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Mail tips for automatic reply if it has been set up by the recipient.
     */
    automaticReplies?: AutomaticRepliesMailTips | undefined;
    /**
     * A custom mail tip that can be set on the recipient's mailbox.
     */
    customMailTip?: string | undefined;
    /**
     * Whether the recipient's mailbox is restricted, for example, accepting messages from only a predefined list of senders, rejecting messages from a predefined list of senders, or accepting messages from only authenticated senders.
     */
    deliveryRestricted?: boolean | undefined;
    /**
     * The email address of the recipient to get mailtips for.
     */
    emailAddress?: EmailAddress | undefined;
    /**
     * Errors that occur during the getMailTips action.
     */
    errorEscaped?: MailTipsError | undefined;
    /**
     * The number of external members if the recipient is a distribution list.
     */
    externalMemberCount?: number | undefined;
    /**
     * Whether sending messages to the recipient requires approval. For example, if the recipient is a large distribution list and a moderator has been set up to approve messages sent to that distribution list, or if sending messages to a recipient requires approval of the recipient's manager.
     */
    isModerated?: boolean | undefined;
    /**
     * The mailbox full status of the recipient.
     */
    mailboxFull?: boolean | undefined;
    /**
     * The maximum message size that has been configured for the recipient's organization or mailbox.
     */
    maxMessageSize?: number | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The scope of the recipient. Possible values are: none, internal, external, externalPartner, externalNonParther. For example, an administrator can set another organization to be its 'partner'. The scope is useful if an administrator wants certain mailtips to be accessible to certain scopes. It's also useful to senders to inform them that their message may leave the organization, helping them make the correct decisions about wording, tone and content.
     */
    recipientScope?: RecipientScopeType | undefined;
    /**
     * Recipients suggested based on previous contexts where they appear in the same message.
     */
    recipientSuggestions?: Recipient[] | undefined;
    /**
     * The number of members if the recipient is a distribution list.
     */
    totalMemberCount?: number | undefined;
}
