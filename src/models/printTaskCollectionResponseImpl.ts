import {createPrintTaskFromDiscriminatorValue} from './createPrintTaskFromDiscriminatorValue';
import {PrintTaskImpl} from './index';
import {PrintTask} from './printTask';
import {PrintTaskCollectionResponse} from './printTaskCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PrintTaskCollectionResponseImpl implements AdditionalDataHolder, Parsable, PrintTaskCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    additionalData: Record<string, unknown>;
    /** The nextLink property  */
    nextLink?: string | undefined;
    /** The value property  */
    value?: PrintTask[] | undefined;
    /**
     * Instantiates a new PrintTaskCollectionResponse and sets the default values.
     * @param printTaskCollectionResponseParameterValue 
     */
    public constructor(printTaskCollectionResponseParameterValue?: PrintTaskCollectionResponse | undefined) {
        this.additionalData = {};
        this.additionalData = printTaskCollectionResponseParameterValue?.additionalData ? {} : printTaskCollectionResponseParameterValue?.additionalData!
        this.nextLink = printTaskCollectionResponseParameterValue?.nextLink ;
        this.value = printTaskCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<PrintTaskImpl>(createPrintTaskFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.nextLink){
        if(this.nextLink)
        writer.writeStringValue("@odata.nextLink", this.nextLink);
        }
        if(this.value){
        const valueArrValue: PrintTaskImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new PrintTaskImpl(element));});
        writer.writeCollectionOfObjectValues<PrintTaskImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
