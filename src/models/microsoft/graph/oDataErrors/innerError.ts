import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the admin singleton.  */
export class InnerError implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** Client request Id as sent by the client application.  */
    private _client-request-id?: string | undefined;
    /** Date when the error occured.  */
    private _date?: Date | undefined;
    /** Request Id as tracked internally by the service  */
    private _request-id?: string | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Map<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Gets the client-request-id property value. Client request Id as sent by the client application.
     * @returns a string
     */
    public get client-request-id() {
        return this._client-request-id;
    };
    /**
     * Sets the client-request-id property value. Client request Id as sent by the client application.
     * @param value Value to set for the client-request-id property.
     */
    public set client-request-id(value: string | undefined) {
        this._client-request-id = value;
    };
    /**
     * Instantiates a new InnerError and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
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
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["client-request-id", (o, n) => { (o as unknown as InnerError).client-request-id = n.getStringValue(); }],
            ["date", (o, n) => { (o as unknown as InnerError).date = n.getDateValue(); }],
            ["request-id", (o, n) => { (o as unknown as InnerError).request-id = n.getStringValue(); }],
        ]);
    };
    /**
     * Gets the request-id property value. Request Id as tracked internally by the service
     * @returns a string
     */
    public get request-id() {
        return this._request-id;
    };
    /**
     * Sets the request-id property value. Request Id as tracked internally by the service
     * @param value Value to set for the request-id property.
     */
    public set request-id(value: string | undefined) {
        this._request-id = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("client-request-id", this.client-request-id);
        writer.writeDateValue("date", this.date);
        writer.writeStringValue("request-id", this.request-id);
        writer.writeAdditionalData(this.additionalData);
    };
}
