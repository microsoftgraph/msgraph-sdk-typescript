import {createPrintUsageByUserFromDiscriminatorValue} from './createPrintUsageByUserFromDiscriminatorValue';
import {PrintUsageByUserImpl} from './index';
import {PrintUsageByUser} from './printUsageByUser';
import {PrintUsageByUserCollectionResponse} from './printUsageByUserCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PrintUsageByUserCollectionResponseImpl implements AdditionalDataHolder, Parsable, PrintUsageByUserCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: PrintUsageByUser[] | undefined;
    /**
     * Instantiates a new PrintUsageByUserCollectionResponse and sets the default values.
     * @param printUsageByUserCollectionResponseParameterValue 
     */
    public constructor(printUsageByUserCollectionResponseParameterValue?: PrintUsageByUserCollectionResponse | undefined) {
        this.additionalData = printUsageByUserCollectionResponseParameterValue?.additionalData ? printUsageByUserCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = printUsageByUserCollectionResponseParameterValue?.nextLink ;
        this.value = printUsageByUserCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<PrintUsageByUserImpl>(createPrintUsageByUserFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: PrintUsageByUserImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new PrintUsageByUserImpl(element));});
        writer.writeCollectionOfObjectValues<PrintUsageByUserImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
