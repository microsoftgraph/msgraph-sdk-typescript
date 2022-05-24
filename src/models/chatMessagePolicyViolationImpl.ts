import {ChatMessagePolicyViolation} from './chatMessagePolicyViolation';
import {ChatMessagePolicyViolationDlpActionTypes} from './chatMessagePolicyViolationDlpActionTypes';
import {ChatMessagePolicyViolationPolicyTip} from './chatMessagePolicyViolationPolicyTip';
import {ChatMessagePolicyViolationUserActionTypes} from './chatMessagePolicyViolationUserActionTypes';
import {ChatMessagePolicyViolationVerdictDetailsTypes} from './chatMessagePolicyViolationVerdictDetailsTypes';
import {createChatMessagePolicyViolationPolicyTipFromDiscriminatorValue} from './createChatMessagePolicyViolationPolicyTipFromDiscriminatorValue';
import {ChatMessagePolicyViolationPolicyTipImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ChatMessagePolicyViolationImpl implements AdditionalDataHolder, ChatMessagePolicyViolation, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The action taken by the DLP provider on the message with sensitive content. Supported values are: NoneNotifySender -- Inform the sender of the violation but allow readers to read the message.BlockAccess -- Block readers from reading the message.BlockAccessExternal -- Block users outside the organization from reading the message, while allowing users within the organization to read the message. */
    public dlpAction?: ChatMessagePolicyViolationDlpActionTypes | undefined;
    /** Justification text provided by the sender of the message when overriding a policy violation. */
    public justificationText?: string | undefined;
    /** Information to display to the message sender about why the message was flagged as a violation. */
    public policyTip?: ChatMessagePolicyViolationPolicyTip | undefined;
    /** Indicates the action taken by the user on a message blocked by the DLP provider. Supported values are: NoneOverrideReportFalsePositiveWhen the DLP provider is updating the message for blocking sensitive content, userAction is not required. */
    public userAction?: ChatMessagePolicyViolationUserActionTypes | undefined;
    /** Indicates what actions the sender may take in response to the policy violation. Supported values are: NoneAllowFalsePositiveOverride -- Allows the sender to declare the policyViolation to be an error in the DLP app and its rules, and allow readers to see the message again if the dlpAction had hidden it.AllowOverrideWithoutJustification -- Allows the sender to overriide the DLP violation and allow readers to see the message again if the dlpAction had hidden it, without needing to provide an explanation for doing so. AllowOverrideWithJustification -- Allows the sender to overriide the DLP violation and allow readers to see the message again if the dlpAction had hidden it, after providing an explanation for doing so.AllowOverrideWithoutJustification and AllowOverrideWithJustification are mutually exclusive. */
    public verdictDetails?: ChatMessagePolicyViolationVerdictDetailsTypes | undefined;
    /**
     * Instantiates a new chatMessagePolicyViolation and sets the default values.
     * @param chatMessagePolicyViolationParameterValue 
     */
    public constructor(chatMessagePolicyViolationParameterValue?: ChatMessagePolicyViolation | undefined) {
        this.additionalData = chatMessagePolicyViolationParameterValue?.additionalData ? chatMessagePolicyViolationParameterValue?.additionalData! : {}
        this.dlpAction = chatMessagePolicyViolationParameterValue?.dlpAction ;
        this.justificationText = chatMessagePolicyViolationParameterValue?.justificationText ;
        this.policyTip = chatMessagePolicyViolationParameterValue?.policyTip ;
        this.userAction = chatMessagePolicyViolationParameterValue?.userAction ;
        this.verdictDetails = chatMessagePolicyViolationParameterValue?.verdictDetails ;
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
        writer.writeObjectValue<ChatMessagePolicyViolationPolicyTipImpl>("policyTip", new ChatMessagePolicyViolationPolicyTipImpl(this.policyTip));
        }
        if(this.userAction){
        writer.writeEnumValue<ChatMessagePolicyViolationUserActionTypes>("userAction", this.userAction);
        }
        if(this.verdictDetails){
        writer.writeEnumValue<ChatMessagePolicyViolationVerdictDetailsTypes>("verdictDetails", this.verdictDetails);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
