import {ChatMessagePolicyViolation} from './chatMessagePolicyViolation';
import {ChatMessagePolicyViolationDlpActionTypes} from './chatMessagePolicyViolationDlpActionTypes';
import {ChatMessagePolicyViolationPolicyTip} from './chatMessagePolicyViolationPolicyTip';
import {ChatMessagePolicyViolationUserActionTypes} from './chatMessagePolicyViolationUserActionTypes';
import {ChatMessagePolicyViolationVerdictDetailsTypes} from './chatMessagePolicyViolationVerdictDetailsTypes';
import {createChatMessagePolicyViolationPolicyTipFromDiscriminatorValue} from './createChatMessagePolicyViolationPolicyTipFromDiscriminatorValue';
import {ChatMessagePolicyViolationPolicyTipImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ChatMessagePolicyViolationImpl implements ChatMessagePolicyViolation {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** The action taken by the DLP provider on the message with sensitive content. Supported values are: NoneNotifySender -- Inform the sender of the violation but allow readers to read the message.BlockAccess -- Block readers from reading the message.BlockAccessExternal -- Block users outside the organization from reading the message, while allowing users within the organization to read the message. */
    private _dlpAction?: ChatMessagePolicyViolationDlpActionTypes | undefined;
    /** Justification text provided by the sender of the message when overriding a policy violation. */
    private _justificationText?: string | undefined;
    /** Information to display to the message sender about why the message was flagged as a violation. */
    private _policyTip?: ChatMessagePolicyViolationPolicyTip | undefined;
    /** Indicates the action taken by the user on a message blocked by the DLP provider. Supported values are: NoneOverrideReportFalsePositiveWhen the DLP provider is updating the message for blocking sensitive content, userAction is not required. */
    private _userAction?: ChatMessagePolicyViolationUserActionTypes | undefined;
    /** Indicates what actions the sender may take in response to the policy violation. Supported values are: NoneAllowFalsePositiveOverride -- Allows the sender to declare the policyViolation to be an error in the DLP app and its rules, and allow readers to see the message again if the dlpAction had hidden it.AllowOverrideWithoutJustification -- Allows the sender to overriide the DLP violation and allow readers to see the message again if the dlpAction had hidden it, without needing to provide an explanation for doing so. AllowOverrideWithJustification -- Allows the sender to overriide the DLP violation and allow readers to see the message again if the dlpAction had hidden it, after providing an explanation for doing so.AllowOverrideWithoutJustification and AllowOverrideWithJustification are mutually exclusive. */
    private _verdictDetails?: ChatMessagePolicyViolationVerdictDetailsTypes | undefined;
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
    public set additionalData(value: Record<string, unknown> | undefined) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new chatMessagePolicyViolation and sets the default values.
     * @param chatMessagePolicyViolationParameterValue 
     */
    public constructor(chatMessagePolicyViolationParameterValue?: ChatMessagePolicyViolation | undefined) {
        this._additionalData = chatMessagePolicyViolationParameterValue?.additionalData ? chatMessagePolicyViolationParameterValue?.additionalData! : {};
        this._dlpAction = chatMessagePolicyViolationParameterValue?.dlpAction;
        this._justificationText = chatMessagePolicyViolationParameterValue?.justificationText;
        this._policyTip = chatMessagePolicyViolationParameterValue?.policyTip;
        this._userAction = chatMessagePolicyViolationParameterValue?.userAction;
        this._verdictDetails = chatMessagePolicyViolationParameterValue?.verdictDetails;
    };
    /**
     * Gets the dlpAction property value. The action taken by the DLP provider on the message with sensitive content. Supported values are: NoneNotifySender -- Inform the sender of the violation but allow readers to read the message.BlockAccess -- Block readers from reading the message.BlockAccessExternal -- Block users outside the organization from reading the message, while allowing users within the organization to read the message.
     * @returns a chatMessagePolicyViolationDlpActionTypes
     */
    public get dlpAction() {
        return this._dlpAction;
    };
    /**
     * Sets the dlpAction property value. The action taken by the DLP provider on the message with sensitive content. Supported values are: NoneNotifySender -- Inform the sender of the violation but allow readers to read the message.BlockAccess -- Block readers from reading the message.BlockAccessExternal -- Block users outside the organization from reading the message, while allowing users within the organization to read the message.
     * @param value Value to set for the dlpAction property.
     */
    public set dlpAction(value: ChatMessagePolicyViolationDlpActionTypes | undefined) {
        if(value) {
            this._dlpAction = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "dlpAction": n => { this.dlpAction = n.getEnumValue<ChatMessagePolicyViolationDlpActionTypes>(ChatMessagePolicyViolationDlpActionTypes); },
            "justificationText": n => { this.justificationText = n.getStringValue(); },
            "policyTip": n => { this.policyTip = n.getObjectValue<ChatMessagePolicyViolationPolicyTipImpl>(createChatMessagePolicyViolationPolicyTipFromDiscriminatorValue); },
            "userAction": n => { this.userAction = n.getEnumValue<ChatMessagePolicyViolationUserActionTypes>(ChatMessagePolicyViolationUserActionTypes); },
            "verdictDetails": n => { this.verdictDetails = n.getEnumValue<ChatMessagePolicyViolationVerdictDetailsTypes>(ChatMessagePolicyViolationVerdictDetailsTypes); },
        };
    };
    /**
     * Gets the justificationText property value. Justification text provided by the sender of the message when overriding a policy violation.
     * @returns a string
     */
    public get justificationText() {
        return this._justificationText;
    };
    /**
     * Sets the justificationText property value. Justification text provided by the sender of the message when overriding a policy violation.
     * @param value Value to set for the justificationText property.
     */
    public set justificationText(value: string | undefined) {
        if(value) {
            this._justificationText = value;
        }
    };
    /**
     * Gets the policyTip property value. Information to display to the message sender about why the message was flagged as a violation.
     * @returns a ChatMessagePolicyViolationPolicyTipInterface
     */
    public get policyTip() {
        return this._policyTip;
    };
    /**
     * Sets the policyTip property value. Information to display to the message sender about why the message was flagged as a violation.
     * @param value Value to set for the policyTip property.
     */
    public set policyTip(value: ChatMessagePolicyViolationPolicyTip | undefined) {
        if(value) {
            this._policyTip = value instanceof ChatMessagePolicyViolationPolicyTipImpl? value : new ChatMessagePolicyViolationPolicyTipImpl(value);
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.dlpAction){
            writer.writeEnumValue<ChatMessagePolicyViolationDlpActionTypes>("dlpAction", this.dlpAction);
        }
        if(this.justificationText){
            writer.writeStringValue("justificationText", this.justificationText);
        }
        if(this.policyTip){
            writer.writeObjectValue<ChatMessagePolicyViolationPolicyTipImpl>("policyTip", (!this.policyTip || this.policyTip instanceof ChatMessagePolicyViolationPolicyTipImpl? this.policyTip : new ChatMessagePolicyViolationPolicyTipImpl(this.policyTip)));
        }
        if(this.userAction){
            writer.writeEnumValue<ChatMessagePolicyViolationUserActionTypes>("userAction", this.userAction);
        }
        if(this.verdictDetails){
            writer.writeEnumValue<ChatMessagePolicyViolationVerdictDetailsTypes>("verdictDetails", this.verdictDetails);
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the userAction property value. Indicates the action taken by the user on a message blocked by the DLP provider. Supported values are: NoneOverrideReportFalsePositiveWhen the DLP provider is updating the message for blocking sensitive content, userAction is not required.
     * @returns a chatMessagePolicyViolationUserActionTypes
     */
    public get userAction() {
        return this._userAction;
    };
    /**
     * Sets the userAction property value. Indicates the action taken by the user on a message blocked by the DLP provider. Supported values are: NoneOverrideReportFalsePositiveWhen the DLP provider is updating the message for blocking sensitive content, userAction is not required.
     * @param value Value to set for the userAction property.
     */
    public set userAction(value: ChatMessagePolicyViolationUserActionTypes | undefined) {
        if(value) {
            this._userAction = value;
        }
    };
    /**
     * Gets the verdictDetails property value. Indicates what actions the sender may take in response to the policy violation. Supported values are: NoneAllowFalsePositiveOverride -- Allows the sender to declare the policyViolation to be an error in the DLP app and its rules, and allow readers to see the message again if the dlpAction had hidden it.AllowOverrideWithoutJustification -- Allows the sender to overriide the DLP violation and allow readers to see the message again if the dlpAction had hidden it, without needing to provide an explanation for doing so. AllowOverrideWithJustification -- Allows the sender to overriide the DLP violation and allow readers to see the message again if the dlpAction had hidden it, after providing an explanation for doing so.AllowOverrideWithoutJustification and AllowOverrideWithJustification are mutually exclusive.
     * @returns a chatMessagePolicyViolationVerdictDetailsTypes
     */
    public get verdictDetails() {
        return this._verdictDetails;
    };
    /**
     * Sets the verdictDetails property value. Indicates what actions the sender may take in response to the policy violation. Supported values are: NoneAllowFalsePositiveOverride -- Allows the sender to declare the policyViolation to be an error in the DLP app and its rules, and allow readers to see the message again if the dlpAction had hidden it.AllowOverrideWithoutJustification -- Allows the sender to overriide the DLP violation and allow readers to see the message again if the dlpAction had hidden it, without needing to provide an explanation for doing so. AllowOverrideWithJustification -- Allows the sender to overriide the DLP violation and allow readers to see the message again if the dlpAction had hidden it, after providing an explanation for doing so.AllowOverrideWithoutJustification and AllowOverrideWithJustification are mutually exclusive.
     * @param value Value to set for the verdictDetails property.
     */
    public set verdictDetails(value: ChatMessagePolicyViolationVerdictDetailsTypes | undefined) {
        if(value) {
            this._verdictDetails = value;
        }
    };
}
