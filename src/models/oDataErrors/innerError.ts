import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class InnerError implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Client request Id as sent by the client application. */
    private _clientRequestId?: string | undefined;
    /** Date when the error occured. */
    private _date?: Date | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** Request Id as tracked internally by the service */
    private _requestId?: string | undefined;
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
     * Gets the client-request-id property value. Client request Id as sent by the client application.
     * @returns a string
     */
    public get clientRequestId() {
        return this._clientRequestId;
    };
    /**
     * Sets the client-request-id property value. Client request Id as sent by the client application.
     * @param value Value to set for the clientRequestId property.
     */
    public set clientRequestId(value: string | undefined) {
        this._clientRequestId = value;
    };
    /**
     * Instantiates a new InnerError and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the date property value. Date when the error occured.
     * @returns a Date
     */
    public get date() {
        return this._date;
    };
    /**
     * Sets the date property value. Date when the error occured.
     * @param value Value to set for the Date property.
     */
    public set date(value: Date | undefined) {
        this._date = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "client-request-id": n => { this.clientRequestId = n.getStringValue(); },
            "date": n => { this.date = n.getDateValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "request-id": n => { this.requestId = n.getStringValue(); },
        };
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
     * Gets the request-id property value. Request Id as tracked internally by the service
     * @returns a string
     */
    public get requestId() {
        return this._requestId;
    };
    /**
     * Sets the request-id property value. Request Id as tracked internally by the service
     * @param value Value to set for the requestId property.
     */
    public set requestId(value: string | undefined) {
        this._requestId = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("client-request-id", this.clientRequestId);
        writer.writeDateValue("date", this.date);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("request-id", this.requestId);
        writer.writeAdditionalData(this.additionalData);
    };
}
