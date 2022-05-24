import {createPrintTaskDefinitionFromDiscriminatorValue} from './createPrintTaskDefinitionFromDiscriminatorValue';
import {PrintTaskDefinitionImpl} from './index';
import {PrintTaskDefinition} from './printTaskDefinition';
import {PrintTaskDefinitionCollectionResponse} from './printTaskDefinitionCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PrintTaskDefinitionCollectionResponseImpl implements AdditionalDataHolder, Parsable, PrintTaskDefinitionCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: PrintTaskDefinition[] | undefined;
    /**
     * Instantiates a new PrintTaskDefinitionCollectionResponse and sets the default values.
     * @param printTaskDefinitionCollectionResponseParameterValue 
     */
    public constructor(printTaskDefinitionCollectionResponseParameterValue?: PrintTaskDefinitionCollectionResponse | undefined) {
        this.additionalData = printTaskDefinitionCollectionResponseParameterValue?.additionalData ? printTaskDefinitionCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = printTaskDefinitionCollectionResponseParameterValue?.nextLink ;
        this.value = printTaskDefinitionCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<PrintTaskDefinitionImpl>(createPrintTaskDefinitionFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: PrintTaskDefinitionImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new PrintTaskDefinitionImpl(element));});
        writer.writeCollectionOfObjectValues<PrintTaskDefinitionImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
