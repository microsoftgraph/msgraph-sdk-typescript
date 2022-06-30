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

export class MailTipsImpl implements MailTips {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Mail tips for automatic reply if it has been set up by the recipient. */
    private _automaticReplies?: AutomaticRepliesMailTips | undefined;
    /** A custom mail tip that can be set on the recipient's mailbox. */
    private _customMailTip?: string | undefined;
    /** Whether the recipient's mailbox is restricted, for example, accepting messages from only a predefined list of senders, rejecting messages from a predefined list of senders, or accepting messages from only authenticated senders. */
    private _deliveryRestricted?: boolean | undefined;
    /** The email address of the recipient to get mailtips for. */
    private _emailAddress?: EmailAddress | undefined;
    /** Errors that occur during the getMailTips action. */
    private _error_escaped?: MailTipsError | undefined;
    /** The number of external members if the recipient is a distribution list. */
    private _externalMemberCount?: number | undefined;
    /** Whether sending messages to the recipient requires approval. For example, if the recipient is a large distribution list and a moderator has been set up to approve messages sent to that distribution list, or if sending messages to a recipient requires approval of the recipient's manager. */
    private _isModerated?: boolean | undefined;
    /** The mailbox full status of the recipient. */
    private _mailboxFull?: boolean | undefined;
    /** The maximum message size that has been configured for the recipient's organization or mailbox. */
    private _maxMessageSize?: number | undefined;
    /** The scope of the recipient. Possible values are: none, internal, external, externalPartner, externalNonParther. For example, an administrator can set another organization to be its 'partner'. The scope is useful if an administrator wants certain mailtips to be accessible to certain scopes. It's also useful to senders to inform them that their message may leave the organization, helping them make the correct decisions about wording, tone and content. */
    private _recipientScope?: RecipientScopeType | undefined;
    /** Recipients suggested based on previous contexts where they appear in the same message. */
    private _recipientSuggestions?: Recipient[] | undefined;
    /** The number of members if the recipient is a distribution list. */
    private _totalMemberCount?: number | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown>) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Gets the automaticReplies property value. Mail tips for automatic reply if it has been set up by the recipient.
     * @returns a AutomaticRepliesMailTipsInterface
     */
    public get automaticReplies() {
        return this._automaticReplies;
    };
    /**
     * Sets the automaticReplies property value. Mail tips for automatic reply if it has been set up by the recipient.
     * @param value Value to set for the automaticReplies property.
     */
    public set automaticReplies(value: AutomaticRepliesMailTips | undefined) {
        if(value) {
            this._automaticReplies = value instanceof AutomaticRepliesMailTipsImpl? value : new AutomaticRepliesMailTipsImpl(value);
        }
    };
    /**
     * Instantiates a new mailTips and sets the default values.
     * @param mailTipsParameterValue 
     */
    public constructor(mailTipsParameterValue?: MailTips | undefined) {
        this._additionalData = mailTipsParameterValue?.additionalData ? mailTipsParameterValue?.additionalData! : {};
        this._automaticReplies = mailTipsParameterValue?.automaticReplies;
        this._customMailTip = mailTipsParameterValue?.customMailTip;
        this._deliveryRestricted = mailTipsParameterValue?.deliveryRestricted;
        this._emailAddress = mailTipsParameterValue?.emailAddress;
        this._error_escaped = mailTipsParameterValue?.error_escaped;
        this._externalMemberCount = mailTipsParameterValue?.externalMemberCount;
        this._isModerated = mailTipsParameterValue?.isModerated;
        this._mailboxFull = mailTipsParameterValue?.mailboxFull;
        this._maxMessageSize = mailTipsParameterValue?.maxMessageSize;
        this._recipientScope = mailTipsParameterValue?.recipientScope;
        this._recipientSuggestions = mailTipsParameterValue?.recipientSuggestions;
        this._totalMemberCount = mailTipsParameterValue?.totalMemberCount;
    };
    /**
     * Gets the customMailTip property value. A custom mail tip that can be set on the recipient's mailbox.
     * @returns a string
     */
    public get customMailTip() {
        return this._customMailTip;
    };
    /**
     * Sets the customMailTip property value. A custom mail tip that can be set on the recipient's mailbox.
     * @param value Value to set for the customMailTip property.
     */
    public set customMailTip(value: string | undefined) {
        if(value) {
            this._customMailTip = value;
        }
    };
    /**
     * Gets the deliveryRestricted property value. Whether the recipient's mailbox is restricted, for example, accepting messages from only a predefined list of senders, rejecting messages from a predefined list of senders, or accepting messages from only authenticated senders.
     * @returns a boolean
     */
    public get deliveryRestricted() {
        return this._deliveryRestricted;
    };
    /**
     * Sets the deliveryRestricted property value. Whether the recipient's mailbox is restricted, for example, accepting messages from only a predefined list of senders, rejecting messages from a predefined list of senders, or accepting messages from only authenticated senders.
     * @param value Value to set for the deliveryRestricted property.
     */
    public set deliveryRestricted(value: boolean | undefined) {
        if(value) {
            this._deliveryRestricted = value;
        }
    };
    /**
     * Gets the emailAddress property value. The email address of the recipient to get mailtips for.
     * @returns a EmailAddressInterface
     */
    public get emailAddress() {
        return this._emailAddress;
    };
    /**
     * Sets the emailAddress property value. The email address of the recipient to get mailtips for.
     * @param value Value to set for the emailAddress property.
     */
    public set emailAddress(value: EmailAddress | undefined) {
        if(value) {
            this._emailAddress = value instanceof EmailAddressImpl? value : new EmailAddressImpl(value);
        }
    };
    /**
     * Gets the error property value. Errors that occur during the getMailTips action.
     * @returns a MailTipsErrorInterface
     */
    public get error_escaped() {
        return this._error_escaped;
    };
    /**
     * Sets the error property value. Errors that occur during the getMailTips action.
     * @param value Value to set for the error_escaped property.
     */
    public set error_escaped(value: MailTipsError | undefined) {
        if(value) {
            this._error_escaped = value instanceof MailTipsErrorImpl? value : new MailTipsErrorImpl(value);
        }
    };
    /**
     * Gets the externalMemberCount property value. The number of external members if the recipient is a distribution list.
     * @returns a integer
     */
    public get externalMemberCount() {
        return this._externalMemberCount;
    };
    /**
     * Sets the externalMemberCount property value. The number of external members if the recipient is a distribution list.
     * @param value Value to set for the externalMemberCount property.
     */
    public set externalMemberCount(value: number | undefined) {
        if(value) {
            this._externalMemberCount = value;
        }
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
     * Gets the isModerated property value. Whether sending messages to the recipient requires approval. For example, if the recipient is a large distribution list and a moderator has been set up to approve messages sent to that distribution list, or if sending messages to a recipient requires approval of the recipient's manager.
     * @returns a boolean
     */
    public get isModerated() {
        return this._isModerated;
    };
    /**
     * Sets the isModerated property value. Whether sending messages to the recipient requires approval. For example, if the recipient is a large distribution list and a moderator has been set up to approve messages sent to that distribution list, or if sending messages to a recipient requires approval of the recipient's manager.
     * @param value Value to set for the isModerated property.
     */
    public set isModerated(value: boolean | undefined) {
        if(value) {
            this._isModerated = value;
        }
    };
    /**
     * Gets the mailboxFull property value. The mailbox full status of the recipient.
     * @returns a boolean
     */
    public get mailboxFull() {
        return this._mailboxFull;
    };
    /**
     * Sets the mailboxFull property value. The mailbox full status of the recipient.
     * @param value Value to set for the mailboxFull property.
     */
    public set mailboxFull(value: boolean | undefined) {
        if(value) {
            this._mailboxFull = value;
        }
    };
    /**
     * Gets the maxMessageSize property value. The maximum message size that has been configured for the recipient's organization or mailbox.
     * @returns a integer
     */
    public get maxMessageSize() {
        return this._maxMessageSize;
    };
    /**
     * Sets the maxMessageSize property value. The maximum message size that has been configured for the recipient's organization or mailbox.
     * @param value Value to set for the maxMessageSize property.
     */
    public set maxMessageSize(value: number | undefined) {
        if(value) {
            this._maxMessageSize = value;
        }
    };
    /**
     * Gets the recipientScope property value. The scope of the recipient. Possible values are: none, internal, external, externalPartner, externalNonParther. For example, an administrator can set another organization to be its 'partner'. The scope is useful if an administrator wants certain mailtips to be accessible to certain scopes. It's also useful to senders to inform them that their message may leave the organization, helping them make the correct decisions about wording, tone and content.
     * @returns a recipientScopeType
     */
    public get recipientScope() {
        return this._recipientScope;
    };
    /**
     * Sets the recipientScope property value. The scope of the recipient. Possible values are: none, internal, external, externalPartner, externalNonParther. For example, an administrator can set another organization to be its 'partner'. The scope is useful if an administrator wants certain mailtips to be accessible to certain scopes. It's also useful to senders to inform them that their message may leave the organization, helping them make the correct decisions about wording, tone and content.
     * @param value Value to set for the recipientScope property.
     */
    public set recipientScope(value: RecipientScopeType | undefined) {
        if(value) {
            this._recipientScope = value;
        }
    };
    /**
     * Gets the recipientSuggestions property value. Recipients suggested based on previous contexts where they appear in the same message.
     * @returns a RecipientInterface
     */
    public get recipientSuggestions() {
        return this._recipientSuggestions;
    };
    /**
     * Sets the recipientSuggestions property value. Recipients suggested based on previous contexts where they appear in the same message.
     * @param value Value to set for the recipientSuggestions property.
     */
    public set recipientSuggestions(value: Recipient[] | undefined) {
        if(value) {
            const recipientSuggestionsArrValue: RecipientImpl[] = [];
            this.recipientSuggestions?.forEach(element => {
                recipientSuggestionsArrValue.push((element instanceof RecipientImpl? element:new RecipientImpl(element)));
            });
            this._recipientSuggestions = recipientSuggestionsArrValue;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.automaticReplies){
            writer.writeObjectValue<AutomaticRepliesMailTipsImpl>("automaticReplies", (!this.automaticReplies || this.automaticReplies instanceof AutomaticRepliesMailTipsImpl? this.automaticReplies : new AutomaticRepliesMailTipsImpl(this.automaticReplies)));
        }
        if(this.customMailTip){
            writer.writeStringValue("customMailTip", this.customMailTip);
        }
        if(this.deliveryRestricted){
            writer.writeBooleanValue("deliveryRestricted", this.deliveryRestricted);
        }
        if(this.emailAddress){
            writer.writeObjectValue<EmailAddressImpl>("emailAddress", (!this.emailAddress || this.emailAddress instanceof EmailAddressImpl? this.emailAddress : new EmailAddressImpl(this.emailAddress)));
        }
        if(this.error_escaped){
            writer.writeObjectValue<MailTipsErrorImpl>("error", (!this.error_escaped || this.error_escaped instanceof MailTipsErrorImpl? this.error_escaped : new MailTipsErrorImpl(this.error_escaped)));
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
        if(this.recipientSuggestions && this.recipientSuggestions.length != 0){        const recipientSuggestionsArrValue: RecipientImpl[] = [];
        this.recipientSuggestions?.forEach(element => {
            recipientSuggestionsArrValue.push((element instanceof RecipientImpl? element:new RecipientImpl(element)));
        });
            writer.writeCollectionOfObjectValues<RecipientImpl>("recipientSuggestions", recipientSuggestionsArrValue);
        }
        if(this.totalMemberCount){
            writer.writeNumberValue("totalMemberCount", this.totalMemberCount);
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the totalMemberCount property value. The number of members if the recipient is a distribution list.
     * @returns a integer
     */
    public get totalMemberCount() {
        return this._totalMemberCount;
    };
    /**
     * Sets the totalMemberCount property value. The number of members if the recipient is a distribution list.
     * @param value Value to set for the totalMemberCount property.
     */
    public set totalMemberCount(value: number | undefined) {
        if(value) {
            this._totalMemberCount = value;
        }
    };
}
