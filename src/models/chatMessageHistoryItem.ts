import {ChatMessageActions} from './chatMessageActions';
import {createChatMessageReactionFromDiscriminatorValue} from './createChatMessageReactionFromDiscriminatorValue';
import {ChatMessageReaction} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ChatMessageHistoryItem implements AdditionalDataHolder, Parsable {
    /** The actions property */
    private _actions?: ChatMessageActions | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The modifiedDateTime property */
    private _modifiedDateTime?: Date | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The reaction property */
    private _reaction?: ChatMessageReaction | undefined;
    /**
     * Gets the actions property value. The actions property
     * @returns a chatMessageActions
     */
    public get actions() {
        return this._actions;
    };
    /**
     * Sets the actions property value. The actions property
     * @param value Value to set for the actions property.
     */
    public set actions(value: ChatMessageActions | undefined) {
        this._actions = value;
    };
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
        this._additionalData = value;
    };
    /**
     * Instantiates a new chatMessageHistoryItem and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "actions": n => { this.actions = n.getEnumValue<ChatMessageActions>(ChatMessageActions); },
            "modifiedDateTime": n => { this.modifiedDateTime = n.getDateValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "reaction": n => { this.reaction = n.getObjectValue<ChatMessageReaction>(createChatMessageReactionFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the modifiedDateTime property value. The modifiedDateTime property
     * @returns a Date
     */
    public get modifiedDateTime() {
        return this._modifiedDateTime;
    };
    /**
     * Sets the modifiedDateTime property value. The modifiedDateTime property
     * @param value Value to set for the modifiedDateTime property.
     */
    public set modifiedDateTime(value: Date | undefined) {
        this._modifiedDateTime = value;
    };
    /**
     * Gets the @odata.type property value. The OdataType property
     * @returns a string
     */
    public get odataType() {
        return this._odataType;
    };
    /**
     * Sets the @odata.type property value. The OdataType property
     * @param value Value to set for the OdataType property.
     */
    public set odataType(value: string | undefined) {
        this._odataType = value;
    };
    /**
     * Gets the reaction property value. The reaction property
     * @returns a chatMessageReaction
     */
    public get reaction() {
        return this._reaction;
    };
    /**
     * Sets the reaction property value. The reaction property
     * @param value Value to set for the reaction property.
     */
    public set reaction(value: ChatMessageReaction | undefined) {
        this._reaction = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeEnumValue<ChatMessageActions>("actions", this.actions);
        writer.writeDateValue("modifiedDateTime", this.modifiedDateTime);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeObjectValue<ChatMessageReaction>("reaction", this.reaction);
        writer.writeAdditionalData(this.additionalData);
    };
}
