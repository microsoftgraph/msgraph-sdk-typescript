import {createPrinterFromDiscriminatorValue} from './createPrinterFromDiscriminatorValue';
import {PrinterImpl, PrintOperationImpl} from './index';
import {Printer} from './printer';
import {PrinterCreateOperation} from './printerCreateOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PrinterCreateOperationImpl extends PrintOperationImpl implements PrinterCreateOperation {
    /** The signed certificate created during the registration process. Read-only. */
    private _certificate?: string | undefined;
    /** The created printer entity. Read-only. */
    private _printer?: Printer | undefined;
    /**
     * Gets the certificate property value. The signed certificate created during the registration process. Read-only.
     * @returns a string
     */
    public get certificate() {
        return this._certificate;
    };
    /**
     * Sets the certificate property value. The signed certificate created during the registration process. Read-only.
     * @param value Value to set for the certificate property.
     */
    public set certificate(value: string | undefined) {
        if(value) {
            this._certificate = value;
        }
    };
    /**
     * Instantiates a new PrinterCreateOperation and sets the default values.
     * @param printerCreateOperationParameterValue 
     */
    public constructor(printerCreateOperationParameterValue?: PrinterCreateOperation | undefined) {
        super(printerCreateOperationParameterValue);
        this._certificate = printerCreateOperationParameterValue?.certificate;
        this._printer = printerCreateOperationParameterValue?.printer;
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
     * Gets the printer property value. The created printer entity. Read-only.
     * @returns a PrinterInterface
     */
    public get printer() {
        return this._printer;
    };
    /**
     * Sets the printer property value. The created printer entity. Read-only.
     * @param value Value to set for the printer property.
     */
    public set printer(value: Printer | undefined) {
        if(value) {
            this._printer = value instanceof PrinterImpl? value as PrinterImpl: new PrinterImpl(value);
        }
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
            writer.writeObjectValue<PrinterImpl>("printer", (this.printer instanceof PrinterImpl? this.printer as PrinterImpl: new PrinterImpl(this.printer)));
        }
    };
}
