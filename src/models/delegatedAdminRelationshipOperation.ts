import {DelegatedAdminRelationshipOperationType} from './delegatedAdminRelationshipOperationType';
import {Entity} from './index';
import {LongRunningOperationStatus} from './longRunningOperationStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DelegatedAdminRelationshipOperation extends Entity implements Parsable {
    /** The time in ISO 8601 format and in UTC time when the long-running operation was created. Read-only. */
    private _createdDateTime?: Date | undefined;
    /** The data (payload) for the operation. Read-only. */
    private _data?: string | undefined;
    /** The time in ISO 8601 format and in UTC time when the long-running operation was last modified. Read-only. */
    private _lastModifiedDateTime?: Date | undefined;
    /** The operationType property */
    private _operationType?: DelegatedAdminRelationshipOperationType | undefined;
    /** The status property */
    private _status?: LongRunningOperationStatus | undefined;
    /**
     * Instantiates a new delegatedAdminRelationshipOperation and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdDateTime property value. The time in ISO 8601 format and in UTC time when the long-running operation was created. Read-only.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. The time in ISO 8601 format and in UTC time when the long-running operation was created. Read-only.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * Gets the data property value. The data (payload) for the operation. Read-only.
     * @returns a string
     */
    public get data() {
        return this._data;
    };
    /**
     * Sets the data property value. The data (payload) for the operation. Read-only.
     * @param value Value to set for the data property.
     */
    public set data(value: string | undefined) {
        this._data = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "data": n => { this.data = n.getStringValue(); },
            "lastModifiedDateTime": n => { this.lastModifiedDateTime = n.getDateValue(); },
            "operationType": n => { this.operationType = n.getEnumValue<DelegatedAdminRelationshipOperationType>(DelegatedAdminRelationshipOperationType); },
            "status": n => { this.status = n.getEnumValue<LongRunningOperationStatus>(LongRunningOperationStatus); },
        };
    };
    /**
     * Gets the lastModifiedDateTime property value. The time in ISO 8601 format and in UTC time when the long-running operation was last modified. Read-only.
     * @returns a Date
     */
    public get lastModifiedDateTime() {
        return this._lastModifiedDateTime;
    };
    /**
     * Sets the lastModifiedDateTime property value. The time in ISO 8601 format and in UTC time when the long-running operation was last modified. Read-only.
     * @param value Value to set for the lastModifiedDateTime property.
     */
    public set lastModifiedDateTime(value: Date | undefined) {
        this._lastModifiedDateTime = value;
    };
    /**
     * Gets the operationType property value. The operationType property
     * @returns a delegatedAdminRelationshipOperationType
     */
    public get operationType() {
        return this._operationType;
    };
    /**
     * Sets the operationType property value. The operationType property
     * @param value Value to set for the operationType property.
     */
    public set operationType(value: DelegatedAdminRelationshipOperationType | undefined) {
        this._operationType = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeStringValue("data", this.data);
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        writer.writeEnumValue<DelegatedAdminRelationshipOperationType>("operationType", this.operationType);
        writer.writeEnumValue<LongRunningOperationStatus>("status", this.status);
    };
    /**
     * Gets the status property value. The status property
     * @returns a longRunningOperationStatus
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. The status property
     * @param value Value to set for the status property.
     */
    public set status(value: LongRunningOperationStatus | undefined) {
        this._status = value;
    };
}
