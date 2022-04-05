import {PrinterProcessingState} from './printerProcessingState';
import {PrinterProcessingStateDetail} from './printerProcessingStateDetail';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PrinterStatus implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Record<string, unknown>;
    /** A human-readable description of the printer's current processing state. Read-only.  */
    private _description?: string | undefined;
    /** The list of details describing why the printer is in the current state. Valid values are described in the following table. Read-only.  */
    private _details?: PrinterProcessingStateDetail[] | undefined;
    /** The current processing state. Valid values are described in the following table. Read-only.  */
    private _state?: PrinterProcessingState | undefined;
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
     * Instantiates a new printerStatus and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the description property value. A human-readable description of the printer's current processing state. Read-only.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. A human-readable description of the printer's current processing state. Read-only.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Gets the details property value. The list of details describing why the printer is in the current state. Valid values are described in the following table. Read-only.
     * @returns a printerProcessingStateDetail
     */
    public get details() {
        return this._details;
    };
    /**
     * Sets the details property value. The list of details describing why the printer is in the current state. Valid values are described in the following table. Read-only.
     * @param value Value to set for the details property.
     */
    public set details(value: PrinterProcessingStateDetail[] | undefined) {
        this._details = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {
            "description": (o, n) => { (o as unknown as PrinterStatus).description = n.getStringValue(); },
            "details": (o, n) => { (o as unknown as PrinterStatus).details = n.getEnumValues<PrinterProcessingStateDetail>(PrinterProcessingStateDetail); },
            "state": (o, n) => { (o as unknown as PrinterStatus).state = n.getEnumValue<PrinterProcessingState>(PrinterProcessingState); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("description", this.description);
        this.details && writer.writeEnumValue<PrinterProcessingStateDetail>("details", ...this.details);
        writer.writeEnumValue<PrinterProcessingState>("state", this.state);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the state property value. The current processing state. Valid values are described in the following table. Read-only.
     * @returns a printerProcessingState
     */
    public get state() {
        return this._state;
    };
    /**
     * Sets the state property value. The current processing state. Valid values are described in the following table. Read-only.
     * @param value Value to set for the state property.
     */
    public set state(value: PrinterProcessingState | undefined) {
        this._state = value;
    };
}
