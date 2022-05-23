import {createPublicErrorFromDiscriminatorValue} from './createPublicErrorFromDiscriminatorValue';
import {LongRunningOperationImpl, PublicErrorImpl} from './index';
import {PublicError} from './publicError';
import {RichLongRunningOperation} from './richLongRunningOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the drive singleton. */
export class RichLongRunningOperationImpl extends LongRunningOperationImpl implements Parsable, RichLongRunningOperation {
    /** Error due to which the operation failed. */
    public error_escaped?: PublicError | undefined;
    /** A value between 0 and 100 that indicates the progress of the operation. */
    public percentageComplete?: number | undefined;
    /** A unique identifier for the result. */
    public resourceId?: string | undefined;
    /** Type of the operation. */
    public type?: string | undefined;
    /**
     * Instantiates a new richLongRunningOperation and sets the default values.
     * @param richLongRunningOperationParameterValue 
     */
    public constructor(richLongRunningOperationParameterValue?: RichLongRunningOperation | undefined) {
        super();
        this.error_escaped = richLongRunningOperationParameterValue?.error_escaped ;
        this.percentageComplete = richLongRunningOperationParameterValue?.percentageComplete ;
        this.resourceId = richLongRunningOperationParameterValue?.resourceId ;
        this.type = richLongRunningOperationParameterValue?.type ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "error": n => { this.error_escaped = n.getObjectValue<PublicErrorImpl>(createPublicErrorFromDiscriminatorValue); },
            "percentageComplete": n => { this.percentageComplete = n.getNumberValue(); },
            "resourceId": n => { this.resourceId = n.getStringValue(); },
            "type": n => { this.type = n.getStringValue(); },
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
        if(this.percentageComplete){
        writer.writeNumberValue("percentageComplete", this.percentageComplete);
        }
        if(this.resourceId){
        writer.writeStringValue("resourceId", this.resourceId);
        }
        if(this.type){
        writer.writeStringValue("type", this.type);
        }
    };
}
