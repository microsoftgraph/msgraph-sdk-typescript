import {EntityImpl, PublicErrorImpl} from '../';
import {createPublicErrorFromDiscriminatorValue} from '../createPublicErrorFromDiscriminatorValue';
import {PublicError} from '../publicError';
import {ConnectionOperation} from './connectionOperation';
import {ConnectionOperationStatus} from './connectionOperationStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of externalConnection entities. */
export class ConnectionOperationImpl extends EntityImpl implements ConnectionOperation, Parsable {
    /** If status is failed, provides more information about the error that caused the failure. */
    public error_escaped?: PublicError | undefined;
    /** Indicates the status of the asynchronous operation. Possible values are: unspecified, inprogress, completed, failed. */
    public status?: ConnectionOperationStatus | undefined;
    /**
     * Instantiates a new connectionOperation and sets the default values.
     * @param connectionOperationParameterValue 
     */
    public constructor(connectionOperationParameterValue?: ConnectionOperation | undefined) {
        super();
        this.error_escaped = connectionOperationParameterValue?.error_escaped ;
        this.status = connectionOperationParameterValue?.status ;
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
        writer.writeObjectValue<PublicErrorImpl>("error", new PublicErrorImpl(this.error_escaped));
        }
        if(this.status){
        writer.writeEnumValue<ConnectionOperationStatus>("status", this.status);
        }
    };
}
