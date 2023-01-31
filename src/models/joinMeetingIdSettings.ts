import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class JoinMeetingIdSettings implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Indicates whether a passcode is required to join a meeting when using joinMeetingId. Optional. */
    private _isPasscodeRequired?: boolean | undefined;
    /** The meeting ID to be used to join a meeting. Optional. Read-only. */
    private _joinMeetingId?: string | undefined;
    private _odataType?: string | undefined;
    /** The passcode to join a meeting.  Optional. Read-only. */
    private _passcode?: string | undefined;
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
     * Instantiates a new joinMeetingIdSettings and sets the default values.
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
            "isPasscodeRequired": n => { this.isPasscodeRequired = n.getBooleanValue(); },
            "joinMeetingId": n => { this.joinMeetingId = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "passcode": n => { this.passcode = n.getStringValue(); },
        };
    };
    /**
     * Gets the isPasscodeRequired property value. Indicates whether a passcode is required to join a meeting when using joinMeetingId. Optional.
     * @returns a boolean
     */
    public get isPasscodeRequired() {
        return this._isPasscodeRequired;
    };
    /**
     * Sets the isPasscodeRequired property value. Indicates whether a passcode is required to join a meeting when using joinMeetingId. Optional.
     * @param value Value to set for the isPasscodeRequired property.
     */
    public set isPasscodeRequired(value: boolean | undefined) {
        this._isPasscodeRequired = value;
    };
    /**
     * Gets the joinMeetingId property value. The meeting ID to be used to join a meeting. Optional. Read-only.
     * @returns a string
     */
    public get joinMeetingId() {
        return this._joinMeetingId;
    };
    /**
     * Sets the joinMeetingId property value. The meeting ID to be used to join a meeting. Optional. Read-only.
     * @param value Value to set for the joinMeetingId property.
     */
    public set joinMeetingId(value: string | undefined) {
        this._joinMeetingId = value;
    };
    /**
     * Gets the @odata.type property value. 
     * @returns a string
     */
    public get odataType() {
        return this._odataType;
    };
    /**
     * Sets the @odata.type property value. 
     * @param value Value to set for the OdataType property.
     */
    public set odataType(value: string | undefined) {
        this._odataType = value;
    };
    /**
     * Gets the passcode property value. The passcode to join a meeting.  Optional. Read-only.
     * @returns a string
     */
    public get passcode() {
        return this._passcode;
    };
    /**
     * Sets the passcode property value. The passcode to join a meeting.  Optional. Read-only.
     * @param value Value to set for the passcode property.
     */
    public set passcode(value: string | undefined) {
        this._passcode = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("isPasscodeRequired", this.isPasscodeRequired);
        writer.writeStringValue("joinMeetingId", this.joinMeetingId);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("passcode", this.passcode);
        writer.writeAdditionalData(this.additionalData);
    };
}
