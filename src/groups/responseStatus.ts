import {ResponseType} from './responseType';
import {SerializationWriter, ParseNode, Parsable} from '@microsoft/kiota-abstractions';

export class ResponseStatus implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    /** The response type. Possible values are: None, Organizer, TentativelyAccepted, Accepted, Declined, NotResponded.  */
    private _response?: ResponseType | undefined;
    /** The date and time that the response was returned. It uses ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z  */
    private _time?: Date | undefined;
    /**
     * Instantiates a new responseStatus and sets the default values.
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
     * Gets the response property value. The response type. Possible values are: None, Organizer, TentativelyAccepted, Accepted, Declined, NotResponded.
     * @returns a responseType
     */
    public get response() {
        return this._response;
    };
    /**
     * Gets the time property value. The date and time that the response was returned. It uses ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @returns a Date
     */
    public get time() {
        return this._time;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["response", (o, n) => { (o as unknown as ResponseStatus).response = n.getEnumValue<ResponseType>(ResponseType); }],
            ["time", (o, n) => { (o as unknown as ResponseStatus).time = n.getDateValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeEnumValue<ResponseType>("response", this.response);
        writer.writeDateValue("time", this.time);
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
     * Sets the response property value. The response type. Possible values are: None, Organizer, TentativelyAccepted, Accepted, Declined, NotResponded.
     * @param value Value to set for the response property.
     */
    public set response(value: ResponseType | undefined) {
        this._response = value;
    };
    /**
     * Sets the time property value. The date and time that the response was returned. It uses ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @param value Value to set for the time property.
     */
    public set time(value: Date | undefined) {
        this._time = value;
    };
}
