import {Entity} from './index';
import {OperationStatus} from './operationStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of agreementAcceptance entities. */
export class Operation extends Entity implements Parsable {
    /** The start time of the operation. */
    private _createdDateTime?: Date | undefined;
    /** The time of the last action of the operation. */
    private _lastActionDateTime?: Date | undefined;
    /** The current status of the operation: notStarted, running, completed, failed */
    private _status?: OperationStatus | undefined;
    /**
     * Instantiates a new operation and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.operation";
    };
    /**
     * Gets the createdDateTime property value. The start time of the operation.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. The start time of the operation.
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
            "lastActionDateTime": n => { this.lastActionDateTime = n.getDateValue(); },
            "status": n => { this.status = n.getEnumValue<OperationStatus>(OperationStatus); },
        };
    };
    /**
     * Gets the lastActionDateTime property value. The time of the last action of the operation.
     * @returns a Date
     */
    public get lastActionDateTime() {
        return this._lastActionDateTime;
    };
    /**
     * Sets the lastActionDateTime property value. The time of the last action of the operation.
     * @param value Value to set for the lastActionDateTime property.
     */
    public set lastActionDateTime(value: Date | undefined) {
        this._lastActionDateTime = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeDateValue("lastActionDateTime", this.lastActionDateTime);
        writer.writeEnumValue<OperationStatus>("status", this.status);
    };
    /**
     * Gets the status property value. The current status of the operation: notStarted, running, completed, failed
     * @returns a operationStatus
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. The current status of the operation: notStarted, running, completed, failed
     * @param value Value to set for the status property.
     */
    public set status(value: OperationStatus | undefined) {
        this._status = value;
    };
}
