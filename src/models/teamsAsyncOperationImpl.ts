import {createOperationErrorFromDiscriminatorValue} from './createOperationErrorFromDiscriminatorValue';
import {EntityImpl, OperationErrorImpl} from './index';
import {OperationError} from './operationError';
import {TeamsAsyncOperation} from './teamsAsyncOperation';
import {TeamsAsyncOperationStatus} from './teamsAsyncOperationStatus';
import {TeamsAsyncOperationType} from './teamsAsyncOperationType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to group. */
export class TeamsAsyncOperationImpl extends EntityImpl implements TeamsAsyncOperation {
    /** Number of times the operation was attempted before being marked successful or failed. */
    private _attemptsCount?: number | undefined;
    /** Time when the operation was created. */
    private _createdDateTime?: Date | undefined;
    /** Any error that causes the async operation to fail. */
    private _error_escaped?: OperationError | undefined;
    /** Time when the async operation was last updated. */
    private _lastActionDateTime?: Date | undefined;
    /** Denotes the type of operation being described. */
    private _operationType?: TeamsAsyncOperationType | undefined;
    /** Operation status. */
    private _status?: TeamsAsyncOperationStatus | undefined;
    /** The ID of the object that's created or modified as result of this async operation, typically a team. */
    private _targetResourceId?: string | undefined;
    /** The location of the object that's created or modified as result of this async operation. This URL should be treated as an opaque value and not parsed into its component paths. */
    private _targetResourceLocation?: string | undefined;
    /**
     * Gets the attemptsCount property value. Number of times the operation was attempted before being marked successful or failed.
     * @returns a integer
     */
    public get attemptsCount() {
        return this._attemptsCount;
    };
    /**
     * Sets the attemptsCount property value. Number of times the operation was attempted before being marked successful or failed.
     * @param value Value to set for the attemptsCount property.
     */
    public set attemptsCount(value: number | undefined) {
        if(value) {
            this._attemptsCount = value;
        }
    };
    /**
     * Instantiates a new teamsAsyncOperation and sets the default values.
     * @param teamsAsyncOperationParameterValue 
     */
    public constructor(teamsAsyncOperationParameterValue?: TeamsAsyncOperation | undefined) {
        super(teamsAsyncOperationParameterValue);
        this._attemptsCount = teamsAsyncOperationParameterValue?.attemptsCount;
        this._createdDateTime = teamsAsyncOperationParameterValue?.createdDateTime;
        this._error_escaped = teamsAsyncOperationParameterValue?.error_escaped;
        this._lastActionDateTime = teamsAsyncOperationParameterValue?.lastActionDateTime;
        this._operationType = teamsAsyncOperationParameterValue?.operationType;
        this._status = teamsAsyncOperationParameterValue?.status;
        this._targetResourceId = teamsAsyncOperationParameterValue?.targetResourceId;
        this._targetResourceLocation = teamsAsyncOperationParameterValue?.targetResourceLocation;
    };
    /**
     * Gets the createdDateTime property value. Time when the operation was created.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. Time when the operation was created.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        if(value) {
            this._createdDateTime = value;
        }
    };
    /**
     * Gets the error property value. Any error that causes the async operation to fail.
     * @returns a OperationErrorInterface
     */
    public get error_escaped() {
        return this._error_escaped;
    };
    /**
     * Sets the error property value. Any error that causes the async operation to fail.
     * @param value Value to set for the error_escaped property.
     */
    public set error_escaped(value: OperationError | undefined) {
        if(value) {
            this._error_escaped = value instanceof OperationErrorImpl? value : new OperationErrorImpl(value);
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "attemptsCount": n => { this.attemptsCount = n.getNumberValue(); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "error": n => { this.error_escaped = n.getObjectValue<OperationErrorImpl>(createOperationErrorFromDiscriminatorValue); },
            "lastActionDateTime": n => { this.lastActionDateTime = n.getDateValue(); },
            "operationType": n => { this.operationType = n.getEnumValue<TeamsAsyncOperationType>(TeamsAsyncOperationType); },
            "status": n => { this.status = n.getEnumValue<TeamsAsyncOperationStatus>(TeamsAsyncOperationStatus); },
            "targetResourceId": n => { this.targetResourceId = n.getStringValue(); },
            "targetResourceLocation": n => { this.targetResourceLocation = n.getStringValue(); },
        };
    };
    /**
     * Gets the lastActionDateTime property value. Time when the async operation was last updated.
     * @returns a Date
     */
    public get lastActionDateTime() {
        return this._lastActionDateTime;
    };
    /**
     * Sets the lastActionDateTime property value. Time when the async operation was last updated.
     * @param value Value to set for the lastActionDateTime property.
     */
    public set lastActionDateTime(value: Date | undefined) {
        if(value) {
            this._lastActionDateTime = value;
        }
    };
    /**
     * Gets the operationType property value. Denotes the type of operation being described.
     * @returns a teamsAsyncOperationType
     */
    public get operationType() {
        return this._operationType;
    };
    /**
     * Sets the operationType property value. Denotes the type of operation being described.
     * @param value Value to set for the operationType property.
     */
    public set operationType(value: TeamsAsyncOperationType | undefined) {
        if(value) {
            this._operationType = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.attemptsCount){
            writer.writeNumberValue("attemptsCount", this.attemptsCount);
        }
        if(this.createdDateTime){
            writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
        if(this.error_escaped){
            writer.writeObjectValue<OperationErrorImpl>("error", (!this.error_escaped || this.error_escaped instanceof OperationErrorImpl? this.error_escaped : new OperationErrorImpl(this.error_escaped)));
        }
        if(this.lastActionDateTime){
            writer.writeDateValue("lastActionDateTime", this.lastActionDateTime);
        }
        if(this.operationType){
            writer.writeEnumValue<TeamsAsyncOperationType>("operationType", this.operationType);
        }
        if(this.status){
            writer.writeEnumValue<TeamsAsyncOperationStatus>("status", this.status);
        }
        if(this.targetResourceId){
            writer.writeStringValue("targetResourceId", this.targetResourceId);
        }
        if(this.targetResourceLocation){
            writer.writeStringValue("targetResourceLocation", this.targetResourceLocation);
        }
    };
    /**
     * Gets the status property value. Operation status.
     * @returns a teamsAsyncOperationStatus
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. Operation status.
     * @param value Value to set for the status property.
     */
    public set status(value: TeamsAsyncOperationStatus | undefined) {
        if(value) {
            this._status = value;
        }
    };
    /**
     * Gets the targetResourceId property value. The ID of the object that's created or modified as result of this async operation, typically a team.
     * @returns a string
     */
    public get targetResourceId() {
        return this._targetResourceId;
    };
    /**
     * Sets the targetResourceId property value. The ID of the object that's created or modified as result of this async operation, typically a team.
     * @param value Value to set for the targetResourceId property.
     */
    public set targetResourceId(value: string | undefined) {
        if(value) {
            this._targetResourceId = value;
        }
    };
    /**
     * Gets the targetResourceLocation property value. The location of the object that's created or modified as result of this async operation. This URL should be treated as an opaque value and not parsed into its component paths.
     * @returns a string
     */
    public get targetResourceLocation() {
        return this._targetResourceLocation;
    };
    /**
     * Sets the targetResourceLocation property value. The location of the object that's created or modified as result of this async operation. This URL should be treated as an opaque value and not parsed into its component paths.
     * @param value Value to set for the targetResourceLocation property.
     */
    public set targetResourceLocation(value: string | undefined) {
        if(value) {
            this._targetResourceLocation = value;
        }
    };
}
