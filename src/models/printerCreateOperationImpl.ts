import {createPrinterFromDiscriminatorValue} from './createPrinterFromDiscriminatorValue';
import {PrinterImpl, PrintOperationImpl} from './index';
import {Printer} from './printer';
import {PrinterCreateOperation} from './printerCreateOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PrinterCreateOperationImpl extends PrintOperationImpl implements PrinterCreateOperation {
    /** The signed certificate created during the registration process. Read-only. */
    public certificate?: string | undefined;
    /** The created printer entity. Read-only. */
    public printer?: Printer | undefined;
    /**
     * Instantiates a new PrinterCreateOperation and sets the default values.
     * @param printerCreateOperationParameterValue 
     */
    public constructor(printerCreateOperationParameterValue?: PrinterCreateOperation | undefined) {
        super(printerCreateOperationParameterValue);
        this.certificate = printerCreateOperationParameterValue?.certificate;
        this.printer = printerCreateOperationParameterValue?.printer instanceof PrinterImpl? printerCreateOperationParameterValue?.printer:new PrinterImpl(printerCreateOperationParameterValue?.printer);
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "certificate": n => { this.certificate = n.getStringValue(); },
            "printer": n => { this.printer = n.getObjectValue<PrinterImpl>(createPrinterFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.certificate){
            writer.writeStringValue("certificate", this.certificate);
        }
        if(this.printer){
            writer.writeObjectValue<PrinterImpl>("printer", new PrinterImpl(this.printer));
        }
    };
}
