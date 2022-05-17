import {ArchivedPrintJob} from './archivedPrintJob';
import {createUserIdentityFromDiscriminatorValue} from './createUserIdentityFromDiscriminatorValue';
import {UserIdentityImpl} from './index';
import {PrintJobProcessingState} from './printJobProcessingState';
import {UserIdentity} from './userIdentity';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ArchivedPrintJobImpl implements AdditionalDataHolder, ArchivedPrintJob, Parsable {
    /** True if the job was acquired by a printer; false otherwise. Read-only. */
    acquiredByPrinter?: boolean | undefined;
    /** The dateTimeOffset when the job was acquired by the printer, if any. Read-only. */
    acquiredDateTime?: Date | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData: Record<string, unknown>;
    /** The dateTimeOffset when the job was completed, canceled or aborted. Read-only. */
    completionDateTime?: Date | undefined;
    /** The number of copies that were printed. Read-only. */
    copiesPrinted?: number | undefined;
    /** The user who created the print job. Read-only. */
    createdBy?: UserIdentity | undefined;
    /** The dateTimeOffset when the job was created. Read-only. */
    createdDateTime?: Date | undefined;
    /** The archived print job's GUID. Read-only. */
    id?: string | undefined;
    /** The printer ID that the job was queued for. Read-only. */
    printerId?: string | undefined;
    /** The print job's final processing state. Read-only. */
    processingState?: PrintJobProcessingState | undefined;
    /**
     * Instantiates a new archivedPrintJob and sets the default values.
     * @param archivedPrintJobParameterValue 
     */
    public constructor(archivedPrintJobParameterValue?: ArchivedPrintJob | undefined) {
        this.additionalData = {};
        this.acquiredByPrinter = archivedPrintJobParameterValue?.acquiredByPrinter ;
        this.acquiredDateTime = archivedPrintJobParameterValue?.acquiredDateTime ;
        this.additionalData = archivedPrintJobParameterValue?.additionalData ? {} : archivedPrintJobParameterValue?.additionalData!
        this.completionDateTime = archivedPrintJobParameterValue?.completionDateTime ;
        this.copiesPrinted = archivedPrintJobParameterValue?.copiesPrinted ;
        this.createdBy = archivedPrintJobParameterValue?.createdBy ;
        this.createdDateTime = archivedPrintJobParameterValue?.createdDateTime ;
        this.id = archivedPrintJobParameterValue?.id ;
        this.printerId = archivedPrintJobParameterValue?.printerId ;
        this.processingState = archivedPrintJobParameterValue?.processingState ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "acquiredByPrinter": n => { this.acquiredByPrinter = n.getBooleanValue(); },
            "acquiredDateTime": n => { this.acquiredDateTime = n.getDateValue(); },
            "completionDateTime": n => { this.completionDateTime = n.getDateValue(); },
            "copiesPrinted": n => { this.copiesPrinted = n.getNumberValue(); },
            "createdBy": n => { this.createdBy = n.getObjectValue<UserIdentityImpl>(createUserIdentityFromDiscriminatorValue); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "id": n => { this.id = n.getStringValue(); },
            "printerId": n => { this.printerId = n.getStringValue(); },
            "processingState": n => { this.processingState = n.getEnumValue<PrintJobProcessingState>(PrintJobProcessingState); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.acquiredByPrinter){
        if(this.acquiredByPrinter)
        writer.writeBooleanValue("acquiredByPrinter", this.acquiredByPrinter);
        }
        if(this.acquiredDateTime){
        if(this.acquiredDateTime)
        writer.writeDateValue("acquiredDateTime", this.acquiredDateTime);
        }
        if(this.completionDateTime){
        if(this.completionDateTime)
        writer.writeDateValue("completionDateTime", this.completionDateTime);
        }
        if(this.copiesPrinted){
        if(this.copiesPrinted)
        writer.writeNumberValue("copiesPrinted", this.copiesPrinted);
        }
        if(this.createdBy){
        if(this.createdBy)
        writer.writeObjectValue<UserIdentityImpl>("createdBy", new UserIdentityImpl(this.createdBy));
        }
        if(this.createdDateTime){
        if(this.createdDateTime)
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
        if(this.id){
        if(this.id)
        writer.writeStringValue("id", this.id);
        }
        if(this.printerId){
        if(this.printerId)
        writer.writeStringValue("printerId", this.printerId);
        }
        if(this.processingState){
        if(this.processingState)
        writer.writeEnumValue<PrintJobProcessingState>("processingState", this.processingState);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
