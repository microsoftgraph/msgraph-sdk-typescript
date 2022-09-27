import {Entity, PublicError} from '../';
import {createPublicErrorFromDiscriminatorValue} from '../createPublicErrorFromDiscriminatorValue';
import {ConnectionOperationStatus} from './connectionOperationStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ConnectionOperation extends Entity implements Parsable {
    /** If status is failed, provides more information about the error that caused the failure. */
    private _error_escaped?: PublicError | undefined;
    /** Indicates the status of the asynchronous operation. Possible values are: unspecified, inprogress, completed, failed, unknownFutureValue. */
    private _status?: ConnectionOperationStatus | undefined;
    /**
     * Instantiates a new ConnectionOperation and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.externalConnectors.connectionOperation";
    };
    /**
     * Gets the error property value. If status is failed, provides more information about the error that caused the failure.
     * @returns a publicError
     */
    public get error_escaped() {
        return this._error_escaped;
    };
    /**
     * Sets the error property value. If status is failed, provides more information about the error that caused the failure.
     * @param value Value to set for the error_escaped property.
     */
    public set error_escaped(value: PublicError | undefined) {
        this._error_escaped = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "error": n => { this.error_escaped = n.getObjectValue<PublicError>(createPublicErrorFromDiscriminatorValue); },
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
        writer.writeObjectValue<PublicError>("error", this.error_escaped);
        writer.writeEnumValue<ConnectionOperationStatus>("status", this.status);
    };
    /**
     * Gets the status property value. Indicates the status of the asynchronous operation. Possible values are: unspecified, inprogress, completed, failed, unknownFutureValue.
     * @returns a connectionOperationStatus
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. Indicates the status of the asynchronous operation. Possible values are: unspecified, inprogress, completed, failed, unknownFutureValue.
     * @param value Value to set for the status property.
     */
    public set status(value: ConnectionOperationStatus | undefined) {
        this._status = value;
    };
}
