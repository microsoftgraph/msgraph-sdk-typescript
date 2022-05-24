import {createPrintUsageByPrinterFromDiscriminatorValue} from './createPrintUsageByPrinterFromDiscriminatorValue';
import {PrintUsageByPrinterImpl} from './index';
import {PrintUsageByPrinter} from './printUsageByPrinter';
import {PrintUsageByPrinterCollectionResponse} from './printUsageByPrinterCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PrintUsageByPrinterCollectionResponseImpl implements AdditionalDataHolder, Parsable, PrintUsageByPrinterCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: PrintUsageByPrinter[] | undefined;
    /**
     * Instantiates a new PrintUsageByPrinterCollectionResponse and sets the default values.
     * @param printUsageByPrinterCollectionResponseParameterValue 
     */
    public constructor(printUsageByPrinterCollectionResponseParameterValue?: PrintUsageByPrinterCollectionResponse | undefined) {
        this.additionalData = printUsageByPrinterCollectionResponseParameterValue?.additionalData ? printUsageByPrinterCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = printUsageByPrinterCollectionResponseParameterValue?.nextLink ;
        this.value = printUsageByPrinterCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<PrintUsageByPrinterImpl>(createPrintUsageByPrinterFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: PrintUsageByPrinterImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new PrintUsageByPrinterImpl(element));});
        writer.writeCollectionOfObjectValues<PrintUsageByPrinterImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
