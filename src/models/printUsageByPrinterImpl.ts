import {PrintUsageImpl} from './index';
import {PrintUsageByPrinter} from './printUsageByPrinter';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PrintUsageByPrinterImpl extends PrintUsageImpl implements PrintUsageByPrinter {
    /** The printerId property */
    public printerId?: string | undefined;
    /**
     * Instantiates a new PrintUsageByPrinter and sets the default values.
     * @param printUsageByPrinterParameterValue 
     */
    public constructor(printUsageByPrinterParameterValue?: PrintUsageByPrinter | undefined) {
        super(printUsageByPrinterParameterValue);
        this.printerId = printUsageByPrinterParameterValue?.printerId;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "printerId": n => { this.printerId = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.printerId){
            writer.writeStringValue("printerId", this.printerId);
        }
    };
}
