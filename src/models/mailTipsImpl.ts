import {AutomaticRepliesMailTips} from './automaticRepliesMailTips';
import {createAutomaticRepliesMailTipsFromDiscriminatorValue} from './createAutomaticRepliesMailTipsFromDiscriminatorValue';
import {createEmailAddressFromDiscriminatorValue} from './createEmailAddressFromDiscriminatorValue';
import {createMailTipsErrorFromDiscriminatorValue} from './createMailTipsErrorFromDiscriminatorValue';
import {createRecipientFromDiscriminatorValue} from './createRecipientFromDiscriminatorValue';
import {EmailAddress} from './emailAddress';
import {AutomaticRepliesMailTipsImpl, EmailAddressImpl, MailTipsErrorImpl, RecipientImpl} from './index';
import {MailTips} from './mailTips';
import {MailTipsError} from './mailTipsError';
import {Recipient} from './recipient';
import {RecipientScopeType} from './recipientScopeType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MailTipsImpl implements AdditionalDataHolder, MailTips, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Mail tips for automatic reply if it has been set up by the recipient. */
    public automaticReplies?: AutomaticRepliesMailTips | undefined;
    /** A custom mail tip that can be set on the recipient's mailbox. */
    public customMailTip?: string | undefined;
    /** Whether the recipient's mailbox is restricted, for example, accepting messages from only a predefined list of senders, rejecting messages from a predefined list of senders, or accepting messages from only authenticated senders. */
    public deliveryRestricted?: boolean | undefined;
    /** The email address of the recipient to get mailtips for. */
    public emailAddress?: EmailAddress | undefined;
    /** Errors that occur during the getMailTips action. */
    public error_escaped?: MailTipsError | undefined;
    /** The number of external members if the recipient is a distribution list. */
    public externalMemberCount?: number | undefined;
    /** Whether sending messages to the recipient requires approval. For example, if the recipient is a large distribution list and a moderator has been set up to approve messages sent to that distribution list, or if sending messages to a recipient requires approval of the recipient's manager. */
    public isModerated?: boolean | undefined;
    /** The mailbox full status of the recipient. */
    public mailboxFull?: boolean | undefined;
    /** The maximum message size that has been configured for the recipient's organization or mailbox. */
    public maxMessageSize?: number | undefined;
    /** The scope of the recipient. Possible values are: none, internal, external, externalPartner, externalNonParther. For example, an administrator can set another organization to be its 'partner'. The scope is useful if an administrator wants certain mailtips to be accessible to certain scopes. It's also useful to senders to inform them that their message may leave the organization, helping them make the correct decisions about wording, tone and content. */
    public recipientScope?: RecipientScopeType | undefined;
    /** Recipients suggested based on previous contexts where they appear in the same message. */
    public recipientSuggestions?: Recipient[] | undefined;
    /** The number of members if the recipient is a distribution list. */
    public totalMemberCount?: number | undefined;
    /**
     * Instantiates a new mailTips and sets the default values.
     * @param mailTipsParameterValue 
     */
    public constructor(mailTipsParameterValue?: MailTips | undefined) {
        this.additionalData = mailTipsParameterValue?.additionalData ? mailTipsParameterValue?.additionalData! : {}
        this.automaticReplies = mailTipsParameterValue?.automaticReplies ;
        this.customMailTip = mailTipsParameterValue?.customMailTip ;
        this.deliveryRestricted = mailTipsParameterValue?.deliveryRestricted ;
        this.emailAddress = mailTipsParameterValue?.emailAddress ;
        this.error_escaped = mailTipsParameterValue?.error_escaped ;
        this.externalMemberCount = mailTipsParameterValue?.externalMemberCount ;
        this.isModerated = mailTipsParameterValue?.isModerated ;
        this.mailboxFull = mailTipsParameterValue?.mailboxFull ;
        this.maxMessageSize = mailTipsParameterValue?.maxMessageSize ;
        this.recipientScope = mailTipsParameterValue?.recipientScope ;
        this.recipientSuggestions = mailTipsParameterValue?.recipientSuggestions ;
        this.totalMemberCount = mailTipsParameterValue?.totalMemberCount ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "automaticReplies": n => { this.automaticReplies = n.getObjectValue<AutomaticRepliesMailTipsImpl>(createAutomaticRepliesMailTipsFromDiscriminatorValue); },
            "customMailTip": n => { this.customMailTip = n.getStringValue(); },
            "deliveryRestricted": n => { this.deliveryRestricted = n.getBooleanValue(); },
            "emailAddress": n => { this.emailAddress = n.getObjectValue<EmailAddressImpl>(createEmailAddressFromDiscriminatorValue); },
            "error": n => { this.error_escaped = n.getObjectValue<MailTipsErrorImpl>(createMailTipsErrorFromDiscriminatorValue); },
            "externalMemberCount": n => { this.externalMemberCount = n.getNumberValue(); },
            "isModerated": n => { this.isModerated = n.getBooleanValue(); },
            "mailboxFull": n => { this.mailboxFull = n.getBooleanValue(); },
            "maxMessageSize": n => { this.maxMessageSize = n.getNumberValue(); },
            "recipientScope": n => { this.recipientScope = n.getEnumValue<RecipientScopeType>(RecipientScopeType); },
            "recipientSuggestions": n => { this.recipientSuggestions = n.getCollectionOfObjectValues<RecipientImpl>(createRecipientFromDiscriminatorValue); },
            "totalMemberCount": n => { this.totalMemberCount = n.getNumberValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.automaticReplies){
        writer.writeObjectValue<AutomaticRepliesMailTipsImpl>("automaticReplies", new AutomaticRepliesMailTipsImpl(this.automaticReplies));
        }
        if(this.customMailTip){
        writer.writeStringValue("customMailTip", this.customMailTip);
        }
        if(this.deliveryRestricted){
        writer.writeBooleanValue("deliveryRestricted", this.deliveryRestricted);
        }
        if(this.emailAddress){
        writer.writeObjectValue<EmailAddressImpl>("emailAddress", new EmailAddressImpl(this.emailAddress));
        }
        if(this.error_escaped){
        writer.writeObjectValue<MailTipsErrorImpl>("error", new MailTipsErrorImpl(this.error_escaped));
        }
        if(this.externalMemberCount){
        writer.writeNumberValue("externalMemberCount", this.externalMemberCount);
        }
        if(this.isModerated){
        writer.writeBooleanValue("isModerated", this.isModerated);
        }
        if(this.mailboxFull){
        writer.writeBooleanValue("mailboxFull", this.mailboxFull);
        }
        if(this.maxMessageSize){
        writer.writeNumberValue("maxMessageSize", this.maxMessageSize);
        }
        if(this.recipientScope){
        writer.writeEnumValue<RecipientScopeType>("recipientScope", this.recipientScope);
        }
        if(this.recipientSuggestions && this.recipientSuggestions.length != 0){        const recipientSuggestionsArrValue: RecipientImpl[] = []; this.recipientSuggestions?.forEach(element => {recipientSuggestionsArrValue.push(new RecipientImpl(element));});
        writer.writeCollectionOfObjectValues<RecipientImpl>("recipientSuggestions", recipientSuggestionsArrValue);
        }
        if(this.totalMemberCount){
        writer.writeNumberValue("totalMemberCount", this.totalMemberCount);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
