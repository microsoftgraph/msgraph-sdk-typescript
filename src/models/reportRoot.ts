import {createPrintUsageByPrinterFromDiscriminatorValue} from './createPrintUsageByPrinterFromDiscriminatorValue';
import {createPrintUsageByUserFromDiscriminatorValue} from './createPrintUsageByUserFromDiscriminatorValue';
import {Entity, PrintUsageByPrinter, PrintUsageByUser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** The resource that represents an instance of Enrollment Failure Reports.  */
export class ReportRoot extends Entity implements Parsable {
    /** The dailyPrintUsageByPrinter property  */
    private _dailyPrintUsageByPrinter?: PrintUsageByPrinter[] | undefined;
    /** The dailyPrintUsageByUser property  */
    private _dailyPrintUsageByUser?: PrintUsageByUser[] | undefined;
    /** The monthlyPrintUsageByPrinter property  */
    private _monthlyPrintUsageByPrinter?: PrintUsageByPrinter[] | undefined;
    /** The monthlyPrintUsageByUser property  */
    private _monthlyPrintUsageByUser?: PrintUsageByUser[] | undefined;
    /**
     * Instantiates a new reportRoot and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the dailyPrintUsageByPrinter property value. The dailyPrintUsageByPrinter property
     * @returns a printUsageByPrinter
     */
    public get dailyPrintUsageByPrinter() {
        return this._dailyPrintUsageByPrinter;
    };
    /**
     * Sets the dailyPrintUsageByPrinter property value. The dailyPrintUsageByPrinter property
     * @param value Value to set for the dailyPrintUsageByPrinter property.
     */
    public set dailyPrintUsageByPrinter(value: PrintUsageByPrinter[] | undefined) {
        this._dailyPrintUsageByPrinter = value;
    };
    /**
     * Gets the dailyPrintUsageByUser property value. The dailyPrintUsageByUser property
     * @returns a printUsageByUser
     */
    public get dailyPrintUsageByUser() {
        return this._dailyPrintUsageByUser;
    };
    /**
     * Sets the dailyPrintUsageByUser property value. The dailyPrintUsageByUser property
     * @param value Value to set for the dailyPrintUsageByUser property.
     */
    public set dailyPrintUsageByUser(value: PrintUsageByUser[] | undefined) {
        this._dailyPrintUsageByUser = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "dailyPrintUsageByPrinter": n => { this.dailyPrintUsageByPrinter = n.getCollectionOfObjectValues<PrintUsageByPrinter>(createPrintUsageByPrinterFromDiscriminatorValue); },
            "dailyPrintUsageByUser": n => { this.dailyPrintUsageByUser = n.getCollectionOfObjectValues<PrintUsageByUser>(createPrintUsageByUserFromDiscriminatorValue); },
            "monthlyPrintUsageByPrinter": n => { this.monthlyPrintUsageByPrinter = n.getCollectionOfObjectValues<PrintUsageByPrinter>(createPrintUsageByPrinterFromDiscriminatorValue); },
            "monthlyPrintUsageByUser": n => { this.monthlyPrintUsageByUser = n.getCollectionOfObjectValues<PrintUsageByUser>(createPrintUsageByUserFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the monthlyPrintUsageByPrinter property value. The monthlyPrintUsageByPrinter property
     * @returns a printUsageByPrinter
     */
    public get monthlyPrintUsageByPrinter() {
        return this._monthlyPrintUsageByPrinter;
    };
    /**
     * Sets the monthlyPrintUsageByPrinter property value. The monthlyPrintUsageByPrinter property
     * @param value Value to set for the monthlyPrintUsageByPrinter property.
     */
    public set monthlyPrintUsageByPrinter(value: PrintUsageByPrinter[] | undefined) {
        this._monthlyPrintUsageByPrinter = value;
    };
    /**
     * Gets the monthlyPrintUsageByUser property value. The monthlyPrintUsageByUser property
     * @returns a printUsageByUser
     */
    public get monthlyPrintUsageByUser() {
        return this._monthlyPrintUsageByUser;
    };
    /**
     * Sets the monthlyPrintUsageByUser property value. The monthlyPrintUsageByUser property
     * @param value Value to set for the monthlyPrintUsageByUser property.
     */
    public set monthlyPrintUsageByUser(value: PrintUsageByUser[] | undefined) {
        this._monthlyPrintUsageByUser = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<PrintUsageByPrinter>("dailyPrintUsageByPrinter", this.dailyPrintUsageByPrinter);
        writer.writeCollectionOfObjectValues<PrintUsageByUser>("dailyPrintUsageByUser", this.dailyPrintUsageByUser);
        writer.writeCollectionOfObjectValues<PrintUsageByPrinter>("monthlyPrintUsageByPrinter", this.monthlyPrintUsageByPrinter);
        writer.writeCollectionOfObjectValues<PrintUsageByUser>("monthlyPrintUsageByUser", this.monthlyPrintUsageByUser);
    };
}
