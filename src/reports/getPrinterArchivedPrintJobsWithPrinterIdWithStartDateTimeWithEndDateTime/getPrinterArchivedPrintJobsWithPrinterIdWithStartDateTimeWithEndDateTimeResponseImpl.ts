import {ArchivedPrintJobImpl} from '../../models/';
import {ArchivedPrintJob} from '../../models/archivedPrintJob';
import {createArchivedPrintJobFromDiscriminatorValue} from '../../models/createArchivedPrintJobFromDiscriminatorValue';
import {GetPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTimeResponse} from './getPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTimeResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the getPrinterArchivedPrintJobs method. */
export class GetPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTimeResponseImpl implements AdditionalDataHolder, GetPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTimeResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The value property */
    public value?: ArchivedPrintJob[] | undefined;
    /**
     * Instantiates a new getPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTimeResponse and sets the default values.
     * @param getPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTimeResponseParameterValue 
     */
    public constructor(getPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTimeResponseParameterValue?: GetPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTimeResponse | undefined) {
        this.additionalData = getPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTimeResponseParameterValue?.additionalData ? getPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTimeResponseParameterValue?.additionalData! : {}
        this.value = getPrinterArchivedPrintJobsWithPrinterIdWithStartDateTimeWithEndDateTimeResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "value": n => { this.value = n.getCollectionOfObjectValues<ArchivedPrintJobImpl>(createArchivedPrintJobFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.value && this.value.length != 0){        const valueArrValue: ArchivedPrintJobImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new ArchivedPrintJobImpl(element));});
        writer.writeCollectionOfObjectValues<ArchivedPrintJobImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
