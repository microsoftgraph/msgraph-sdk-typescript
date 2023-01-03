import {Entity} from './index';
import {LongRunningOperationStatus} from './longRunningOperationStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the admin singleton.
 */
export class LongRunningOperation extends Entity implements Parsable {
    /** The start time of the operation. */
    private _createdDateTime?: Date | undefined;
    /** The time of the last action in the operation. */
    private _lastActionDateTime?: Date | undefined;
    /** URI of the resource that the operation is performed on. */
    private _resourceLocation?: string | undefined;
    /** The status of the operation. The possible values are: notStarted, running, succeeded, failed, unknownFutureValue. */
    private _status?: LongRunningOperationStatus | undefined;
    /** Details about the status of the operation. */
    private _statusDetail?: string | undefined;
    /**
     * Instantiates a new longRunningOperation and sets the default values.
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
            "resourceLocation": n => { this.resourceLocation = n.getStringValue(); },
            "status": n => { this.status = n.getEnumValue<LongRunningOperationStatus>(LongRunningOperationStatus); },
            "statusDetail": n => { this.statusDetail = n.getStringValue(); },
        };
    };
    /**
     * Gets the lastActionDateTime property value. The time of the last action in the operation.
     * @returns a Date
     */
    public get lastActionDateTime() {
        return this._lastActionDateTime;
    };
    /**
     * Sets the lastActionDateTime property value. The time of the last action in the operation.
     * @param value Value to set for the lastActionDateTime property.
     */
    public set lastActionDateTime(value: Date | undefined) {
        this._lastActionDateTime = value;
    };
    /**
     * Gets the resourceLocation property value. URI of the resource that the operation is performed on.
     * @returns a string
     */
    public get resourceLocation() {
        return this._resourceLocation;
    };
    /**
     * Sets the resourceLocation property value. URI of the resource that the operation is performed on.
     * @param value Value to set for the resourceLocation property.
     */
    public set resourceLocation(value: string | undefined) {
        this._resourceLocation = value;
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
        writer.writeStringValue("resourceLocation", this.resourceLocation);
        writer.writeEnumValue<LongRunningOperationStatus>("status", this.status);
        writer.writeStringValue("statusDetail", this.statusDetail);
    };
    /**
     * Gets the status property value. The status of the operation. The possible values are: notStarted, running, succeeded, failed, unknownFutureValue.
     * @returns a longRunningOperationStatus
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. The status of the operation. The possible values are: notStarted, running, succeeded, failed, unknownFutureValue.
     * @param value Value to set for the status property.
     */
    public set status(value: LongRunningOperationStatus | undefined) {
        this._status = value;
    };
    /**
     * Gets the statusDetail property value. Details about the status of the operation.
     * @returns a string
     */
    public get statusDetail() {
        return this._statusDetail;
    };
    /**
     * Sets the statusDetail property value. Details about the status of the operation.
     * @param value Value to set for the statusDetail property.
     */
    public set statusDetail(value: string | undefined) {
        this._statusDetail = value;
    };
}
