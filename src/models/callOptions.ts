import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CallOptions implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Indicates whether to hide the app after the call is escalated. */
    private _hideBotAfterEscalation?: boolean | undefined;
    /** Indicates whether content sharing notifications should be enabled for the call. */
    private _isContentSharingNotificationEnabled?: boolean | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
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
     * Instantiates a new callOptions and sets the default values.
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
            "hideBotAfterEscalation": n => { this.hideBotAfterEscalation = n.getBooleanValue(); },
            "isContentSharingNotificationEnabled": n => { this.isContentSharingNotificationEnabled = n.getBooleanValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
        };
    };
    /**
     * Gets the hideBotAfterEscalation property value. Indicates whether to hide the app after the call is escalated.
     * @returns a boolean
     */
    public get hideBotAfterEscalation() {
        return this._hideBotAfterEscalation;
    };
    /**
     * Sets the hideBotAfterEscalation property value. Indicates whether to hide the app after the call is escalated.
     * @param value Value to set for the hideBotAfterEscalation property.
     */
    public set hideBotAfterEscalation(value: boolean | undefined) {
        this._hideBotAfterEscalation = value;
    };
    /**
     * Gets the isContentSharingNotificationEnabled property value. Indicates whether content sharing notifications should be enabled for the call.
     * @returns a boolean
     */
    public get isContentSharingNotificationEnabled() {
        return this._isContentSharingNotificationEnabled;
    };
    /**
     * Sets the isContentSharingNotificationEnabled property value. Indicates whether content sharing notifications should be enabled for the call.
     * @param value Value to set for the isContentSharingNotificationEnabled property.
     */
    public set isContentSharingNotificationEnabled(value: boolean | undefined) {
        this._isContentSharingNotificationEnabled = value;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("hideBotAfterEscalation", this.hideBotAfterEscalation);
        writer.writeBooleanValue("isContentSharingNotificationEnabled", this.isContentSharingNotificationEnabled);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeAdditionalData(this.additionalData);
    };
}
