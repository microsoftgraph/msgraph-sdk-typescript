import {createOnenoteOperationErrorFromDiscriminatorValue} from './createOnenoteOperationErrorFromDiscriminatorValue';
import {OnenoteOperationErrorImpl, OperationImpl} from './index';
import {OnenoteOperation} from './onenoteOperation';
import {OnenoteOperationError} from './onenoteOperationError';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to group. */
export class OnenoteOperationImpl extends OperationImpl implements OnenoteOperation, Parsable {
    /** The error returned by the operation. */
    public error_escaped?: OnenoteOperationError | undefined;
    /** The operation percent complete if the operation is still in running status. */
    public percentComplete?: string | undefined;
    /** The resource id. */
    public resourceId?: string | undefined;
    /** The resource URI for the object. For example, the resource URI for a copied page or section. */
    public resourceLocation?: string | undefined;
    /**
     * Instantiates a new onenoteOperation and sets the default values.
     * @param onenoteOperationParameterValue 
     */
    public constructor(onenoteOperationParameterValue?: OnenoteOperation | undefined) {
        super();
        this.error_escaped = onenoteOperationParameterValue?.error_escaped ;
        this.percentComplete = onenoteOperationParameterValue?.percentComplete ;
        this.resourceId = onenoteOperationParameterValue?.resourceId ;
        this.resourceLocation = onenoteOperationParameterValue?.resourceLocation ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "error": n => { this.error_escaped = n.getObjectValue<OnenoteOperationErrorImpl>(createOnenoteOperationErrorFromDiscriminatorValue); },
            "percentComplete": n => { this.percentComplete = n.getStringValue(); },
            "resourceId": n => { this.resourceId = n.getStringValue(); },
            "resourceLocation": n => { this.resourceLocation = n.getStringValue(); },
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
        writer.writeObjectValue<OnenoteOperationErrorImpl>("error", new OnenoteOperationErrorImpl(this.error_escaped));
        }
        if(this.percentComplete){
        writer.writeStringValue("percentComplete", this.percentComplete);
        }
        if(this.resourceId){
        writer.writeStringValue("resourceId", this.resourceId);
        }
        if(this.resourceLocation){
        writer.writeStringValue("resourceLocation", this.resourceLocation);
        }
    };
}
