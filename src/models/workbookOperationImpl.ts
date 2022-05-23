import {createWorkbookOperationErrorFromDiscriminatorValue} from './createWorkbookOperationErrorFromDiscriminatorValue';
import {EntityImpl, WorkbookOperationErrorImpl} from './index';
import {WorkbookOperation} from './workbookOperation';
import {WorkbookOperationError} from './workbookOperationError';
import {WorkbookOperationStatus} from './workbookOperationStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to user. */
export class WorkbookOperationImpl extends EntityImpl implements Parsable, WorkbookOperation {
    /** The error returned by the operation. */
    public error_escaped?: WorkbookOperationError | undefined;
    /** The resource URI for the result. */
    public resourceLocation?: string | undefined;
    /** The current status of the operation. Possible values are: notStarted, running, succeeded, failed. */
    public status?: WorkbookOperationStatus | undefined;
    /**
     * Instantiates a new workbookOperation and sets the default values.
     * @param workbookOperationParameterValue 
     */
    public constructor(workbookOperationParameterValue?: WorkbookOperation | undefined) {
        super();
        this.error_escaped = workbookOperationParameterValue?.error_escaped ;
        this.resourceLocation = workbookOperationParameterValue?.resourceLocation ;
        this.status = workbookOperationParameterValue?.status ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "error": n => { this.error_escaped = n.getObjectValue<WorkbookOperationErrorImpl>(createWorkbookOperationErrorFromDiscriminatorValue); },
            "resourceLocation": n => { this.resourceLocation = n.getStringValue(); },
            "status": n => { this.status = n.getEnumValue<WorkbookOperationStatus>(WorkbookOperationStatus); },
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
        writer.writeObjectValue<WorkbookOperationErrorImpl>("error", new WorkbookOperationErrorImpl(this.error_escaped));
        }
        if(this.resourceLocation){
        writer.writeStringValue("resourceLocation", this.resourceLocation);
        }
        if(this.status){
        writer.writeEnumValue<WorkbookOperationStatus>("status", this.status);
        }
    };
}
