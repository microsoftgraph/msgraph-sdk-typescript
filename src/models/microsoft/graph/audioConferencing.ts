import {SerializationWriter, ParseNode, Parsable} from '@microsoft/kiota-abstractions';

export class AudioConferencing implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** The conference id of the online meeting.  */
    private _conferenceId?: string | undefined;
    /** A URL to the externally-accessible web page that contains dial-in information.  */
    private _dialinUrl?: string | undefined;
    /** The toll-free number that connects to the Audio Conference Provider.  */
    private _tollFreeNumber?: string | undefined;
    /** The toll number that connects to the Audio Conference Provider.  */
    private _tollNumber?: string | undefined;
    /**
     * Instantiates a new audioConferencing and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the AdditionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Gets the conferenceId property value. The conference id of the online meeting.
     * @returns a string
     */
    public get conferenceId() {
        return this._conferenceId;
    };
    /**
     * Gets the dialinUrl property value. A URL to the externally-accessible web page that contains dial-in information.
     * @returns a string
     */
    public get dialinUrl() {
        return this._dialinUrl;
    };
    /**
     * Gets the tollFreeNumber property value. The toll-free number that connects to the Audio Conference Provider.
     * @returns a string
     */
    public get tollFreeNumber() {
        return this._tollFreeNumber;
    };
    /**
     * Gets the tollNumber property value. The toll number that connects to the Audio Conference Provider.
     * @returns a string
     */
    public get tollNumber() {
        return this._tollNumber;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["conferenceId", (o, n) => { (o as unknown as AudioConferencing).conferenceId = n.getStringValue(); }],
            ["dialinUrl", (o, n) => { (o as unknown as AudioConferencing).dialinUrl = n.getStringValue(); }],
            ["tollFreeNumber", (o, n) => { (o as unknown as AudioConferencing).tollFreeNumber = n.getStringValue(); }],
            ["tollNumber", (o, n) => { (o as unknown as AudioConferencing).tollNumber = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("conferenceId", this.conferenceId);
        writer.writeStringValue("dialinUrl", this.dialinUrl);
        writer.writeStringValue("tollFreeNumber", this.tollFreeNumber);
        writer.writeStringValue("tollNumber", this.tollNumber);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Sets the AdditionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Map<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Sets the conferenceId property value. The conference id of the online meeting.
     * @param value Value to set for the conferenceId property.
     */
    public set conferenceId(value: string | undefined) {
        this._conferenceId = value;
    };
    /**
     * Sets the dialinUrl property value. A URL to the externally-accessible web page that contains dial-in information.
     * @param value Value to set for the dialinUrl property.
     */
    public set dialinUrl(value: string | undefined) {
        this._dialinUrl = value;
    };
    /**
     * Sets the tollFreeNumber property value. The toll-free number that connects to the Audio Conference Provider.
     * @param value Value to set for the tollFreeNumber property.
     */
    public set tollFreeNumber(value: string | undefined) {
        this._tollFreeNumber = value;
    };
    /**
     * Sets the tollNumber property value. The toll number that connects to the Audio Conference Provider.
     * @param value Value to set for the tollNumber property.
     */
    public set tollNumber(value: string | undefined) {
        this._tollNumber = value;
    };
}
