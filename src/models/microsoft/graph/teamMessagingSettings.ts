import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TeamMessagingSettings implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Record<string, unknown>;
    /** If set to true, @channel mentions are allowed.  */
    private _allowChannelMentions?: boolean | undefined;
    /** If set to true, owners can delete any message.  */
    private _allowOwnerDeleteMessages?: boolean | undefined;
    /** If set to true, @team mentions are allowed.  */
    private _allowTeamMentions?: boolean | undefined;
    /** If set to true, users can delete their messages.  */
    private _allowUserDeleteMessages?: boolean | undefined;
    /** If set to true, users can edit their messages.  */
    private _allowUserEditMessages?: boolean | undefined;
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
     * Gets the allowChannelMentions property value. If set to true, @channel mentions are allowed.
     * @returns a boolean
     */
    public get allowChannelMentions() {
        return this._allowChannelMentions;
    };
    /**
     * Sets the allowChannelMentions property value. If set to true, @channel mentions are allowed.
     * @param value Value to set for the allowChannelMentions property.
     */
    public set allowChannelMentions(value: boolean | undefined) {
        this._allowChannelMentions = value;
    };
    /**
     * Gets the allowOwnerDeleteMessages property value. If set to true, owners can delete any message.
     * @returns a boolean
     */
    public get allowOwnerDeleteMessages() {
        return this._allowOwnerDeleteMessages;
    };
    /**
     * Sets the allowOwnerDeleteMessages property value. If set to true, owners can delete any message.
     * @param value Value to set for the allowOwnerDeleteMessages property.
     */
    public set allowOwnerDeleteMessages(value: boolean | undefined) {
        this._allowOwnerDeleteMessages = value;
    };
    /**
     * Gets the allowTeamMentions property value. If set to true, @team mentions are allowed.
     * @returns a boolean
     */
    public get allowTeamMentions() {
        return this._allowTeamMentions;
    };
    /**
     * Sets the allowTeamMentions property value. If set to true, @team mentions are allowed.
     * @param value Value to set for the allowTeamMentions property.
     */
    public set allowTeamMentions(value: boolean | undefined) {
        this._allowTeamMentions = value;
    };
    /**
     * Gets the allowUserDeleteMessages property value. If set to true, users can delete their messages.
     * @returns a boolean
     */
    public get allowUserDeleteMessages() {
        return this._allowUserDeleteMessages;
    };
    /**
     * Sets the allowUserDeleteMessages property value. If set to true, users can delete their messages.
     * @param value Value to set for the allowUserDeleteMessages property.
     */
    public set allowUserDeleteMessages(value: boolean | undefined) {
        this._allowUserDeleteMessages = value;
    };
    /**
     * Gets the allowUserEditMessages property value. If set to true, users can edit their messages.
     * @returns a boolean
     */
    public get allowUserEditMessages() {
        return this._allowUserEditMessages;
    };
    /**
     * Sets the allowUserEditMessages property value. If set to true, users can edit their messages.
     * @param value Value to set for the allowUserEditMessages property.
     */
    public set allowUserEditMessages(value: boolean | undefined) {
        this._allowUserEditMessages = value;
    };
    /**
     * Instantiates a new teamMessagingSettings and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {
            "allowChannelMentions": (o, n) => { (o as unknown as TeamMessagingSettings).allowChannelMentions = n.getBooleanValue(); },
            "allowOwnerDeleteMessages": (o, n) => { (o as unknown as TeamMessagingSettings).allowOwnerDeleteMessages = n.getBooleanValue(); },
            "allowTeamMentions": (o, n) => { (o as unknown as TeamMessagingSettings).allowTeamMentions = n.getBooleanValue(); },
            "allowUserDeleteMessages": (o, n) => { (o as unknown as TeamMessagingSettings).allowUserDeleteMessages = n.getBooleanValue(); },
            "allowUserEditMessages": (o, n) => { (o as unknown as TeamMessagingSettings).allowUserEditMessages = n.getBooleanValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("allowChannelMentions", this.allowChannelMentions);
        writer.writeBooleanValue("allowOwnerDeleteMessages", this.allowOwnerDeleteMessages);
        writer.writeBooleanValue("allowTeamMentions", this.allowTeamMentions);
        writer.writeBooleanValue("allowUserDeleteMessages", this.allowUserDeleteMessages);
        writer.writeBooleanValue("allowUserEditMessages", this.allowUserEditMessages);
        writer.writeAdditionalData(this.additionalData);
    };
}
