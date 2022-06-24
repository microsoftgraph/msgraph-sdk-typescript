import {ArchivedPrintJobImpl} from '../../models/';
import {ArchivedPrintJob} from '../../models/archivedPrintJob';
import {createArchivedPrintJobFromDiscriminatorValue} from '../../models/createArchivedPrintJobFromDiscriminatorValue';
import {GetGroupArchivedPrintJobsWithGroupIdWithStartDateTimeWithEndDateTimeResponse} from './getGroupArchivedPrintJobsWithGroupIdWithStartDateTimeWithEndDateTimeResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the getGroupArchivedPrintJobs method. */
export class GetGroupArchivedPrintJobsWithGroupIdWithStartDateTimeWithEndDateTimeResponseImpl implements GetGroupArchivedPrintJobsWithGroupIdWithStartDateTimeWithEndDateTimeResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The value property */
    public value?: ArchivedPrintJob[] | undefined;
    /**
     * Instantiates a new getGroupArchivedPrintJobsWithGroupIdWithStartDateTimeWithEndDateTimeResponse and sets the default values.
     * @param getGroupArchivedPrintJobsWithGroupIdWithStartDateTimeWithEndDateTimeResponseParameterValue 
     */
    public constructor(getGroupArchivedPrintJobsWithGroupIdWithStartDateTimeWithEndDateTimeResponseParameterValue?: GetGroupArchivedPrintJobsWithGroupIdWithStartDateTimeWithEndDateTimeResponse | undefined) {
        this.additionalData = getGroupArchivedPrintJobsWithGroupIdWithStartDateTimeWithEndDateTimeResponseParameterValue?.additionalData ? getGroupArchivedPrintJobsWithGroupIdWithStartDateTimeWithEndDateTimeResponseParameterValue?.additionalData! : {};
        const valueArrValue: ArchivedPrintJobImpl[] = []; this.value?.forEach(element => {valueArrValue.push(element instanceof ArchivedPrintJobImpl? element : new ArchivedPrintJobImpl(element));});
        this.value = valueArrValue;
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
        if(this.value && this.value.length != 0){        const valueArrValue: ArchivedPrintJobImpl[] = []; this.value?.forEach(element => {valueArrValue.push(element instanceof ArchivedPrintJobImpl? element : new ArchivedPrintJobImpl(element));});
            writer.writeCollectionOfObjectValues<ArchivedPrintJobImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
