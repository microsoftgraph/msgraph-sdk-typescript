import {createPrintOperationStatusFromDiscriminatorValue} from './createPrintOperationStatusFromDiscriminatorValue';
import {EntityImpl, PrintOperationStatusImpl} from './index';
import {PrintOperation} from './printOperation';
import {PrintOperationStatus} from './printOperationStatus';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PrintOperationImpl extends EntityImpl implements PrintOperation {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The DateTimeOffset when the operation was created. Read-only. */
    public createdDateTime?: Date | undefined;
    /** The status property */
    public status?: PrintOperationStatus | undefined;
    /**
     * Instantiates a new PrintOperation and sets the default values.
     * @param printOperationParameterValue 
     */
    public constructor(printOperationParameterValue?: PrintOperation | undefined) {
        super(printOperationParameterValue);
        this.additionalData = printOperationParameterValue?.additionalData ? printOperationParameterValue?.additionalData! : {};
        this.createdDateTime = printOperationParameterValue?.createdDateTime;
        this.status = printOperationParameterValue?.status instanceof PrintOperationStatusImpl? printOperationParameterValue?.status:new PrintOperationStatusImpl(printOperationParameterValue?.status);
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "status": n => { this.status = n.getObjectValue<PrintOperationStatusImpl>(createPrintOperationStatusFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.createdDateTime){
            writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
        if(this.status){
            writer.writeObjectValue<PrintOperationStatusImpl>("status", new PrintOperationStatusImpl(this.status));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
