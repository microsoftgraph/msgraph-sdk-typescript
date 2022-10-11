import {createPrintUsageByPrinterFromDiscriminatorValue} from './createPrintUsageByPrinterFromDiscriminatorValue';
import {BaseCollectionPaginationCountResponse, PrintUsageByPrinter} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PrintUsageByPrinterCollectionResponse extends BaseCollectionPaginationCountResponse implements Parsable {
    /** The value property */
    private _value?: PrintUsageByPrinter[] | undefined;
    /**
     * Instantiates a new PrintUsageByPrinterCollectionResponse and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "value": n => { this.value = n.getCollectionOfObjectValues<PrintUsageByPrinter>(createPrintUsageByPrinterFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<PrintUsageByPrinter>("value", this.value);
    };
    /**
     * Gets the value property value. The value property
     * @returns a printUsageByPrinter
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. The value property
     * @param value Value to set for the value property.
     */
    public set value(value: PrintUsageByPrinter[] | undefined) {
        this._value = value;
    };
}
