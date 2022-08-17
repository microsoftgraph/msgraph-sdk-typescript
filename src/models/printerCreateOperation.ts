import {createPrinterFromDiscriminatorValue} from './createPrinterFromDiscriminatorValue';
import {Printer, PrintOperation} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PrinterCreateOperation extends PrintOperation implements Parsable {
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
        this._certificate = value;
    };
    /**
     * Instantiates a new PrinterCreateOperation and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.printerCreateOperation";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "certificate": n => { this.certificate = n.getStringValue(); },
            "printer": n => { this.printer = n.getObjectValue<Printer>(createPrinterFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the printer property value. The created printer entity. Read-only.
     * @returns a printer
     */
    public get printer() {
        return this._printer;
    };
    /**
     * Sets the printer property value. The created printer entity. Read-only.
     * @param value Value to set for the printer property.
     */
    public set printer(value: Printer | undefined) {
        this._printer = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("certificate", this.certificate);
        writer.writeObjectValue<Printer>("printer", this.printer);
    };
}
