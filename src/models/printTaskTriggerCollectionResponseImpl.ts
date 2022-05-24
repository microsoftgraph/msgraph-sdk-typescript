import {createPrintTaskTriggerFromDiscriminatorValue} from './createPrintTaskTriggerFromDiscriminatorValue';
import {PrintTaskTriggerImpl} from './index';
import {PrintTaskTrigger} from './printTaskTrigger';
import {PrintTaskTriggerCollectionResponse} from './printTaskTriggerCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PrintTaskTriggerCollectionResponseImpl implements AdditionalDataHolder, Parsable, PrintTaskTriggerCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: PrintTaskTrigger[] | undefined;
    /**
     * Instantiates a new PrintTaskTriggerCollectionResponse and sets the default values.
     * @param printTaskTriggerCollectionResponseParameterValue 
     */
    public constructor(printTaskTriggerCollectionResponseParameterValue?: PrintTaskTriggerCollectionResponse | undefined) {
        this.additionalData = printTaskTriggerCollectionResponseParameterValue?.additionalData ? printTaskTriggerCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = printTaskTriggerCollectionResponseParameterValue?.nextLink ;
        this.value = printTaskTriggerCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<PrintTaskTriggerImpl>(createPrintTaskTriggerFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.nextLink){
        writer.writeStringValue("@odata.nextLink", this.nextLink);
        }
        if(this.value && this.value.length != 0){        const valueArrValue: PrintTaskTriggerImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new PrintTaskTriggerImpl(element));});
        writer.writeCollectionOfObjectValues<PrintTaskTriggerImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
