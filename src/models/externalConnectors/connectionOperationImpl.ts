import {EntityImpl, PublicErrorImpl} from '../';
import {createPublicErrorFromDiscriminatorValue} from '../createPublicErrorFromDiscriminatorValue';
import {PublicError} from '../publicError';
import {ConnectionOperation} from './connectionOperation';
import {ConnectionOperationStatus} from './connectionOperationStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of externalConnection entities. */
export class ConnectionOperationImpl extends EntityImpl implements ConnectionOperation {
    /** If status is failed, provides more information about the error that caused the failure. */
    private _error_escaped?: PublicError | undefined;
    /** Indicates the status of the asynchronous operation. Possible values are: unspecified, inprogress, completed, failed. */
    private _status?: ConnectionOperationStatus | undefined;
    /**
     * Instantiates a new connectionOperation and sets the default values.
     * @param connectionOperationParameterValue 
     */
    public constructor(connectionOperationParameterValue?: ConnectionOperation | undefined) {
        super(connectionOperationParameterValue);
        this._error_escaped = connectionOperationParameterValue?.error_escaped;
        this._status = connectionOperationParameterValue?.status;
    };
    /**
     * Gets the error property value. If status is failed, provides more information about the error that caused the failure.
     * @returns a PublicErrorInterface
     */
    public get error_escaped() {
        return this._error_escaped;
    };
    /**
     * Sets the error property value. If status is failed, provides more information about the error that caused the failure.
     * @param value Value to set for the error_escaped property.
     */
    public set error_escaped(value: PublicError | undefined) {
        if(value) {
            this._error_escaped = value instanceof PublicErrorImpl? value as PublicErrorImpl: new PublicErrorImpl(value);
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "error": n => { this.error_escaped = n.getObjectValue<PublicErrorImpl>(createPublicErrorFromDiscriminatorValue); },
            "status": n => { this.status = n.getEnumValue<ConnectionOperationStatus>(ConnectionOperationStatus); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.error_escaped){
            writer.writeObjectValue<PublicErrorImpl>("error", (this.error_escaped instanceof PublicErrorImpl? this.error_escaped as PublicErrorImpl: new PublicErrorImpl(this.error_escaped)));
        }
        if(this.status){
            writer.writeEnumValue<ConnectionOperationStatus>("status", this.status);
        }
    };
    /**
     * Gets the status property value. Indicates the status of the asynchronous operation. Possible values are: unspecified, inprogress, completed, failed.
     * @returns a connectionOperationStatus
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. Indicates the status of the asynchronous operation. Possible values are: unspecified, inprogress, completed, failed.
     * @param value Value to set for the status property.
     */
    public set status(value: ConnectionOperationStatus | undefined) {
        if(value) {
            this._status = value;
        }
    };
}
