import {createWorkbookOperationErrorFromDiscriminatorValue} from './createWorkbookOperationErrorFromDiscriminatorValue';
import {WorkbookOperationError} from './workbookOperationError';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WorkbookOperationErrorImpl implements AdditionalDataHolder, Parsable, WorkbookOperationError {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The error code. */
    public code?: string | undefined;
    /** The innerError property */
    public innerError?: WorkbookOperationError | undefined;
    /** The error message. */
    public message?: string | undefined;
    /**
     * Instantiates a new workbookOperationError and sets the default values.
     * @param workbookOperationErrorParameterValue 
     */
    public constructor(workbookOperationErrorParameterValue?: WorkbookOperationError | undefined) {
        this.additionalData = workbookOperationErrorParameterValue?.additionalData ? workbookOperationErrorParameterValue?.additionalData! : {}
        this.code = workbookOperationErrorParameterValue?.code ;
        this.innerError = workbookOperationErrorParameterValue?.innerError ;
        this.message = workbookOperationErrorParameterValue?.message ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "code": n => { this.code = n.getStringValue(); },
            "innerError": n => { this.innerError = n.getObjectValue<WorkbookOperationErrorImpl>(createWorkbookOperationErrorFromDiscriminatorValue); },
            "message": n => { this.message = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.code){
        writer.writeStringValue("code", this.code);
        }
        if(this.innerError){
        writer.writeObjectValue<WorkbookOperationErrorImpl>("innerError", new WorkbookOperationErrorImpl(this.innerError));
        }
        if(this.message){
        writer.writeStringValue("message", this.message);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
