import {ChatMessagePolicyViolationPolicyTip} from './chatMessagePolicyViolationPolicyTip';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ChatMessagePolicyViolationPolicyTipImpl implements AdditionalDataHolder, ChatMessagePolicyViolationPolicyTip, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The URL a user can visit to read about the data loss prevention policies for the organization. (ie, policies about what users shouldn't say in chats) */
    public complianceUrl?: string | undefined;
    /** Explanatory text shown to the sender of the message. */
    public generalText?: string | undefined;
    /** The list of improper data in the message that was detected by the data loss prevention app. Each DLP app defines its own conditions, examples include 'Credit Card Number' and 'Social Security Number'. */
    public matchedConditionDescriptions?: string[] | undefined;
    /**
     * Instantiates a new chatMessagePolicyViolationPolicyTip and sets the default values.
     * @param chatMessagePolicyViolationPolicyTipParameterValue 
     */
    public constructor(chatMessagePolicyViolationPolicyTipParameterValue?: ChatMessagePolicyViolationPolicyTip | undefined) {
        this.additionalData = chatMessagePolicyViolationPolicyTipParameterValue?.additionalData ? chatMessagePolicyViolationPolicyTipParameterValue?.additionalData! : {}
        this.complianceUrl = chatMessagePolicyViolationPolicyTipParameterValue?.complianceUrl ;
        this.generalText = chatMessagePolicyViolationPolicyTipParameterValue?.generalText ;
        this.matchedConditionDescriptions = chatMessagePolicyViolationPolicyTipParameterValue?.matchedConditionDescriptions ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "complianceUrl": n => { this.complianceUrl = n.getStringValue(); },
            "generalText": n => { this.generalText = n.getStringValue(); },
            "matchedConditionDescriptions": n => { this.matchedConditionDescriptions = n.getCollectionOfPrimitiveValues<string>(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.complianceUrl){
        writer.writeStringValue("complianceUrl", this.complianceUrl);
        }
        if(this.generalText){
        writer.writeStringValue("generalText", this.generalText);
        }
        if(this.matchedConditionDescriptions){
        writer.writeCollectionOfPrimitiveValues<string>("matchedConditionDescriptions", this.matchedConditionDescriptions);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
