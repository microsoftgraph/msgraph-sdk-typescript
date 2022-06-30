import {ChatMessagePolicyViolationPolicyTip} from './chatMessagePolicyViolationPolicyTip';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ChatMessagePolicyViolationPolicyTipImpl implements ChatMessagePolicyViolationPolicyTip {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The URL a user can visit to read about the data loss prevention policies for the organization. (ie, policies about what users shouldn't say in chats) */
    private _complianceUrl?: string | undefined;
    /** Explanatory text shown to the sender of the message. */
    private _generalText?: string | undefined;
    /** The list of improper data in the message that was detected by the data loss prevention app. Each DLP app defines its own conditions, examples include 'Credit Card Number' and 'Social Security Number'. */
    private _matchedConditionDescriptions?: string[] | undefined;
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
     * Gets the complianceUrl property value. The URL a user can visit to read about the data loss prevention policies for the organization. (ie, policies about what users shouldn't say in chats)
     * @returns a string
     */
    public get complianceUrl() {
        return this._complianceUrl;
    };
    /**
     * Sets the complianceUrl property value. The URL a user can visit to read about the data loss prevention policies for the organization. (ie, policies about what users shouldn't say in chats)
     * @param value Value to set for the complianceUrl property.
     */
    public set complianceUrl(value: string | undefined) {
        if(value) {
            this._complianceUrl = value;
        }
    };
    /**
     * Instantiates a new chatMessagePolicyViolationPolicyTip and sets the default values.
     * @param chatMessagePolicyViolationPolicyTipParameterValue 
     */
    public constructor(chatMessagePolicyViolationPolicyTipParameterValue?: ChatMessagePolicyViolationPolicyTip | undefined) {
        this._additionalData = chatMessagePolicyViolationPolicyTipParameterValue?.additionalData ? chatMessagePolicyViolationPolicyTipParameterValue?.additionalData! : {};
        this._complianceUrl = chatMessagePolicyViolationPolicyTipParameterValue?.complianceUrl;
        this._generalText = chatMessagePolicyViolationPolicyTipParameterValue?.generalText;
        this._matchedConditionDescriptions = chatMessagePolicyViolationPolicyTipParameterValue?.matchedConditionDescriptions;
    };
    /**
     * Gets the generalText property value. Explanatory text shown to the sender of the message.
     * @returns a string
     */
    public get generalText() {
        return this._generalText;
    };
    /**
     * Sets the generalText property value. Explanatory text shown to the sender of the message.
     * @param value Value to set for the generalText property.
     */
    public set generalText(value: string | undefined) {
        if(value) {
            this._generalText = value;
        }
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
     * Gets the matchedConditionDescriptions property value. The list of improper data in the message that was detected by the data loss prevention app. Each DLP app defines its own conditions, examples include 'Credit Card Number' and 'Social Security Number'.
     * @returns a string
     */
    public get matchedConditionDescriptions() {
        return this._matchedConditionDescriptions;
    };
    /**
     * Sets the matchedConditionDescriptions property value. The list of improper data in the message that was detected by the data loss prevention app. Each DLP app defines its own conditions, examples include 'Credit Card Number' and 'Social Security Number'.
     * @param value Value to set for the matchedConditionDescriptions property.
     */
    public set matchedConditionDescriptions(value: string[] | undefined) {
        if(value) {
            this._matchedConditionDescriptions = value;
        }
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
