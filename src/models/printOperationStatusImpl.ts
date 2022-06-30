import {PrintOperationProcessingState} from './printOperationProcessingState';
import {PrintOperationStatus} from './printOperationStatus';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PrintOperationStatusImpl implements PrintOperationStatus {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** A human-readable description of the printOperation's current processing state. Read-only. */
    private _description?: string | undefined;
    /** The printOperation's current processing state. Valid values are described in the following table. Read-only. */
    private _state?: PrintOperationProcessingState | undefined;
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
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new printOperationStatus and sets the default values.
     * @param printOperationStatusParameterValue 
     */
    public constructor(printOperationStatusParameterValue?: PrintOperationStatus | undefined) {
        this._additionalData = printOperationStatusParameterValue?.additionalData ? printOperationStatusParameterValue?.additionalData! : {};
        this._description = printOperationStatusParameterValue?.description;
        this._state = printOperationStatusParameterValue?.state;
    };
    /**
     * Gets the description property value. A human-readable description of the printOperation's current processing state. Read-only.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. A human-readable description of the printOperation's current processing state. Read-only.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        if(value) {
            this._description = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "description": n => { this.description = n.getStringValue(); },
            "state": n => { this.state = n.getEnumValue<PrintOperationProcessingState>(PrintOperationProcessingState); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.description){
            writer.writeStringValue("description", this.description);
        }
        if(this.state){
            writer.writeEnumValue<PrintOperationProcessingState>("state", this.state);
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the state property value. The printOperation's current processing state. Valid values are described in the following table. Read-only.
     * @returns a printOperationProcessingState
     */
    public get state() {
        return this._state;
    };
    /**
     * Sets the state property value. The printOperation's current processing state. Valid values are described in the following table. Read-only.
     * @param value Value to set for the state property.
     */
    public set state(value: PrintOperationProcessingState | undefined) {
        if(value) {
            this._state = value;
        }
    };
}
