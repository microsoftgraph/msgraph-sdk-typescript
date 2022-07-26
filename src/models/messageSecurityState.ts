import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MessageSecurityState implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The connectingIP property */
    private _connectingIP?: string | undefined;
    /** The deliveryAction property */
    private _deliveryAction?: string | undefined;
    /** The deliveryLocation property */
    private _deliveryLocation?: string | undefined;
    /** The directionality property */
    private _directionality?: string | undefined;
    /** The internetMessageId property */
    private _internetMessageId?: string | undefined;
    /** The messageFingerprint property */
    private _messageFingerprint?: string | undefined;
    /** The messageReceivedDateTime property */
    private _messageReceivedDateTime?: Date | undefined;
    /** The messageSubject property */
    private _messageSubject?: string | undefined;
    /** The networkMessageId property */
    private _networkMessageId?: string | undefined;
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
     * Gets the connectingIP property value. The connectingIP property
     * @returns a string
     */
    public get connectingIP() {
        return this._connectingIP;
    };
    /**
     * Sets the connectingIP property value. The connectingIP property
     * @param value Value to set for the connectingIP property.
     */
    public set connectingIP(value: string | undefined) {
        this._connectingIP = value;
    };
    /**
     * Instantiates a new messageSecurityState and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
        this.odataType = "#microsoft.graph.messageSecurityState";
    };
    /**
     * Gets the deliveryAction property value. The deliveryAction property
     * @returns a string
     */
    public get deliveryAction() {
        return this._deliveryAction;
    };
    /**
     * Sets the deliveryAction property value. The deliveryAction property
     * @param value Value to set for the deliveryAction property.
     */
    public set deliveryAction(value: string | undefined) {
        this._deliveryAction = value;
    };
    /**
     * Gets the deliveryLocation property value. The deliveryLocation property
     * @returns a string
     */
    public get deliveryLocation() {
        return this._deliveryLocation;
    };
    /**
     * Sets the deliveryLocation property value. The deliveryLocation property
     * @param value Value to set for the deliveryLocation property.
     */
    public set deliveryLocation(value: string | undefined) {
        this._deliveryLocation = value;
    };
    /**
     * Gets the directionality property value. The directionality property
     * @returns a string
     */
    public get directionality() {
        return this._directionality;
    };
    /**
     * Sets the directionality property value. The directionality property
     * @param value Value to set for the directionality property.
     */
    public set directionality(value: string | undefined) {
        this._directionality = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "connectingIP": n => { this.connectingIP = n.getStringValue(); },
            "deliveryAction": n => { this.deliveryAction = n.getStringValue(); },
            "deliveryLocation": n => { this.deliveryLocation = n.getStringValue(); },
            "directionality": n => { this.directionality = n.getStringValue(); },
            "internetMessageId": n => { this.internetMessageId = n.getStringValue(); },
            "messageFingerprint": n => { this.messageFingerprint = n.getStringValue(); },
            "messageReceivedDateTime": n => { this.messageReceivedDateTime = n.getDateValue(); },
            "messageSubject": n => { this.messageSubject = n.getStringValue(); },
            "networkMessageId": n => { this.networkMessageId = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
        };
    };
    /**
     * Gets the internetMessageId property value. The internetMessageId property
     * @returns a string
     */
    public get internetMessageId() {
        return this._internetMessageId;
    };
    /**
     * Sets the internetMessageId property value. The internetMessageId property
     * @param value Value to set for the internetMessageId property.
     */
    public set internetMessageId(value: string | undefined) {
        this._internetMessageId = value;
    };
    /**
     * Gets the messageFingerprint property value. The messageFingerprint property
     * @returns a string
     */
    public get messageFingerprint() {
        return this._messageFingerprint;
    };
    /**
     * Sets the messageFingerprint property value. The messageFingerprint property
     * @param value Value to set for the messageFingerprint property.
     */
    public set messageFingerprint(value: string | undefined) {
        this._messageFingerprint = value;
    };
    /**
     * Gets the messageReceivedDateTime property value. The messageReceivedDateTime property
     * @returns a Date
     */
    public get messageReceivedDateTime() {
        return this._messageReceivedDateTime;
    };
    /**
     * Sets the messageReceivedDateTime property value. The messageReceivedDateTime property
     * @param value Value to set for the messageReceivedDateTime property.
     */
    public set messageReceivedDateTime(value: Date | undefined) {
        this._messageReceivedDateTime = value;
    };
    /**
     * Gets the messageSubject property value. The messageSubject property
     * @returns a string
     */
    public get messageSubject() {
        return this._messageSubject;
    };
    /**
     * Sets the messageSubject property value. The messageSubject property
     * @param value Value to set for the messageSubject property.
     */
    public set messageSubject(value: string | undefined) {
        this._messageSubject = value;
    };
    /**
     * Gets the networkMessageId property value. The networkMessageId property
     * @returns a string
     */
    public get networkMessageId() {
        return this._networkMessageId;
    };
    /**
     * Sets the networkMessageId property value. The networkMessageId property
     * @param value Value to set for the networkMessageId property.
     */
    public set networkMessageId(value: string | undefined) {
        this._networkMessageId = value;
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
        writer.writeStringValue("connectingIP", this.connectingIP);
        writer.writeStringValue("deliveryAction", this.deliveryAction);
        writer.writeStringValue("deliveryLocation", this.deliveryLocation);
        writer.writeStringValue("directionality", this.directionality);
        writer.writeStringValue("internetMessageId", this.internetMessageId);
        writer.writeStringValue("messageFingerprint", this.messageFingerprint);
        writer.writeDateValue("messageReceivedDateTime", this.messageReceivedDateTime);
        writer.writeStringValue("messageSubject", this.messageSubject);
        writer.writeStringValue("networkMessageId", this.networkMessageId);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeAdditionalData(this.additionalData);
    };
}
