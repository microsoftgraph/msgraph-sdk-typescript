import {Entity} from './entity';
import {OperationStatus} from './operationStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Operation extends Entity implements Parsable {
    /** The start time of the operation.  */
    private _createdDateTime?: Date | undefined;
    /** The time of the last action of the operation.  */
    private _lastActionDateTime?: Date | undefined;
    /** Possible values are: notStarted, running, completed, failed. Read-only.  */
    private _status?: OperationStatus | undefined;
    /**
     * Instantiates a new operation and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdDateTime property value. The start time of the operation.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Gets the lastActionDateTime property value. The time of the last action of the operation.
     * @returns a Date
     */
    public get lastActionDateTime() {
        return this._lastActionDateTime;
    };
    /**
     * Gets the status property value. Possible values are: notStarted, running, completed, failed. Read-only.
     * @returns a operationStatus
     */
    public get status() {
        return this._status;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["createdDateTime", (o, n) => { (o as unknown as Operation).createdDateTime = n.getDateValue(); }],
            ["lastActionDateTime", (o, n) => { (o as unknown as Operation).lastActionDateTime = n.getDateValue(); }],
            ["status", (o, n) => { (o as unknown as Operation).status = n.getEnumValue<OperationStatus>(OperationStatus); }],
        ]);
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
     * Sets the createdDateTime property value. The start time of the operation.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * Sets the lastActionDateTime property value. The time of the last action of the operation.
     * @param value Value to set for the lastActionDateTime property.
     */
    public set lastActionDateTime(value: Date | undefined) {
        this._lastActionDateTime = value;
    };
    /**
     * Sets the status property value. Possible values are: notStarted, running, completed, failed. Read-only.
     * @param value Value to set for the status property.
     */
    public set status(value: OperationStatus | undefined) {
        this._status = value;
    };
}
