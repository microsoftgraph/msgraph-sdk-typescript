import {createPrintOperationStatusFromDiscriminatorValue} from './createPrintOperationStatusFromDiscriminatorValue';
import {EntityImpl, PrintOperationStatusImpl} from './index';
import {PrintOperation} from './printOperation';
import {PrintOperationStatus} from './printOperationStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the print singleton. */
export class PrintOperationImpl extends EntityImpl implements Parsable, PrintOperation {
    /** The DateTimeOffset when the operation was created. Read-only. */
    public createdDateTime?: Date | undefined;
    /** The status property */
    public status?: PrintOperationStatus | undefined;
    /**
     * Instantiates a new printOperation and sets the default values.
     * @param printOperationParameterValue 
     */
    public constructor(printOperationParameterValue?: PrintOperation | undefined) {
        super();
        this.createdDateTime = printOperationParameterValue?.createdDateTime ;
        this.status = printOperationParameterValue?.status ;
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
    };
}
