import {createPrintConnectorFromDiscriminatorValue} from './createPrintConnectorFromDiscriminatorValue';
import {PrintConnectorImpl} from './index';
import {PrintConnector} from './printConnector';
import {PrintConnectorCollectionResponse} from './printConnectorCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PrintConnectorCollectionResponseImpl implements AdditionalDataHolder, Parsable, PrintConnectorCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: PrintConnector[] | undefined;
    /**
     * Instantiates a new PrintConnectorCollectionResponse and sets the default values.
     * @param printConnectorCollectionResponseParameterValue 
     */
    public constructor(printConnectorCollectionResponseParameterValue?: PrintConnectorCollectionResponse | undefined) {
        this.additionalData = printConnectorCollectionResponseParameterValue?.additionalData ? printConnectorCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = printConnectorCollectionResponseParameterValue?.nextLink ;
        this.value = printConnectorCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<PrintConnectorImpl>(createPrintConnectorFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: PrintConnectorImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new PrintConnectorImpl(element));});
        writer.writeCollectionOfObjectValues<PrintConnectorImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
