import {createPrintServiceEndpointFromDiscriminatorValue} from './createPrintServiceEndpointFromDiscriminatorValue';
import {PrintServiceEndpointImpl} from './index';
import {PrintServiceEndpoint} from './printServiceEndpoint';
import {PrintServiceEndpointCollectionResponse} from './printServiceEndpointCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PrintServiceEndpointCollectionResponseImpl implements AdditionalDataHolder, Parsable, PrintServiceEndpointCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: PrintServiceEndpoint[] | undefined;
    /**
     * Instantiates a new PrintServiceEndpointCollectionResponse and sets the default values.
     * @param printServiceEndpointCollectionResponseParameterValue 
     */
    public constructor(printServiceEndpointCollectionResponseParameterValue?: PrintServiceEndpointCollectionResponse | undefined) {
        this.additionalData = printServiceEndpointCollectionResponseParameterValue?.additionalData ? printServiceEndpointCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = printServiceEndpointCollectionResponseParameterValue?.nextLink ;
        this.value = printServiceEndpointCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<PrintServiceEndpointImpl>(createPrintServiceEndpointFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: PrintServiceEndpointImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new PrintServiceEndpointImpl(element));});
        writer.writeCollectionOfObjectValues<PrintServiceEndpointImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
