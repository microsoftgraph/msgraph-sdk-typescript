import {Json} from '../../../../../models/microsoft/graph/json';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class NetworkDaysRequestBody implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Map<string, unknown>;
    private _endDate?: Json | undefined;
    private _holidays?: Json | undefined;
    private _startDate?: Json | undefined;
    /**
     * Instantiates a new networkDaysRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = new Map<string, unknown>();
    };
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Gets the endDate property value. 
     * @returns a Json
     */
    public get endDate() {
        return this._endDate;
    };
    /**
     * Gets the holidays property value. 
     * @returns a Json
     */
    public get holidays() {
        return this._holidays;
    };
    /**
     * Gets the startDate property value. 
     * @returns a Json
     */
    public get startDate() {
        return this._startDate;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([
            ["endDate", (o, n) => { (o as unknown as NetworkDaysRequestBody).endDate = n.getObjectValue<Json>(Json); }],
            ["holidays", (o, n) => { (o as unknown as NetworkDaysRequestBody).holidays = n.getObjectValue<Json>(Json); }],
            ["startDate", (o, n) => { (o as unknown as NetworkDaysRequestBody).startDate = n.getObjectValue<Json>(Json); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Json>("endDate", this.endDate);
        writer.writeObjectValue<Json>("holidays", this.holidays);
        writer.writeObjectValue<Json>("startDate", this.startDate);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Map<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Sets the endDate property value. 
     * @param value Value to set for the endDate property.
     */
    public set endDate(value: Json | undefined) {
        this._endDate = value;
    };
    /**
     * Sets the holidays property value. 
     * @param value Value to set for the holidays property.
     */
    public set holidays(value: Json | undefined) {
        this._holidays = value;
    };
    /**
     * Sets the startDate property value. 
     * @param value Value to set for the startDate property.
     */
    public set startDate(value: Json | undefined) {
        this._startDate = value;
    };
}
