import {createPrintOperationStatusFromDiscriminatorValue} from './createPrintOperationStatusFromDiscriminatorValue';
import {Entity, PrintOperationStatus} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PrintOperation extends Entity implements Parsable {
    /** The DateTimeOffset when the operation was created. Read-only. */
    private _createdDateTime?: Date | undefined;
    /** The status property */
    private _status?: PrintOperationStatus | undefined;
    /**
     * Instantiates a new PrintOperation and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.printOperation";
    };
    /**
     * Gets the createdDateTime property value. The DateTimeOffset when the operation was created. Read-only.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. The DateTimeOffset when the operation was created. Read-only.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "status": n => { this.status = n.getObjectValue<PrintOperationStatus>(createPrintOperationStatusFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeObjectValue<PrintOperationStatus>("status", this.status);
    };
    /**
     * Gets the status property value. The status property
     * @returns a printOperationStatus
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. The status property
     * @param value Value to set for the status property.
     */
    public set status(value: PrintOperationStatus | undefined) {
        this._status = value;
    };
}
