import {createPrintUsageByPrinterFromDiscriminatorValue} from './createPrintUsageByPrinterFromDiscriminatorValue';
import {createPrintUsageByUserFromDiscriminatorValue} from './createPrintUsageByUserFromDiscriminatorValue';
import {EntityImpl, PrintUsageByPrinterImpl, PrintUsageByUserImpl} from './index';
import {PrintUsageByPrinter} from './printUsageByPrinter';
import {PrintUsageByUser} from './printUsageByUser';
import {ReportRoot} from './reportRoot';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** The resource that represents an instance of Enrollment Failure Reports. */
export class ReportRootImpl extends EntityImpl implements ReportRoot {
    /** The dailyPrintUsageByPrinter property */
    private _dailyPrintUsageByPrinter?: PrintUsageByPrinter[] | undefined;
    /** The dailyPrintUsageByUser property */
    private _dailyPrintUsageByUser?: PrintUsageByUser[] | undefined;
    /** The monthlyPrintUsageByPrinter property */
    private _monthlyPrintUsageByPrinter?: PrintUsageByPrinter[] | undefined;
    /** The monthlyPrintUsageByUser property */
    private _monthlyPrintUsageByUser?: PrintUsageByUser[] | undefined;
    /**
     * Instantiates a new reportRoot and sets the default values.
     * @param reportRootParameterValue 
     */
    public constructor(reportRootParameterValue?: ReportRoot | undefined) {
        super(reportRootParameterValue);
        this._dailyPrintUsageByPrinter = reportRootParameterValue?.dailyPrintUsageByPrinter;
        this._dailyPrintUsageByUser = reportRootParameterValue?.dailyPrintUsageByUser;
        this._monthlyPrintUsageByPrinter = reportRootParameterValue?.monthlyPrintUsageByPrinter;
        this._monthlyPrintUsageByUser = reportRootParameterValue?.monthlyPrintUsageByUser;
    };
    /**
     * Gets the dailyPrintUsageByPrinter property value. The dailyPrintUsageByPrinter property
     * @returns a PrintUsageByPrinterInterface
     */
    public get dailyPrintUsageByPrinter() {
        return this._dailyPrintUsageByPrinter;
    };
    /**
     * Sets the dailyPrintUsageByPrinter property value. The dailyPrintUsageByPrinter property
     * @param value Value to set for the dailyPrintUsageByPrinter property.
     */
    public set dailyPrintUsageByPrinter(value: PrintUsageByPrinter[] | undefined) {
        if(value) {
            const dailyPrintUsageByPrinterArrValue: PrintUsageByPrinterImpl[] = [];
            this.dailyPrintUsageByPrinter?.forEach(element => {
                dailyPrintUsageByPrinterArrValue.push((element instanceof PrintUsageByPrinterImpl? element:new PrintUsageByPrinterImpl(element)));
            });
            this._dailyPrintUsageByPrinter = dailyPrintUsageByPrinterArrValue;
        }
    };
    /**
     * Gets the dailyPrintUsageByUser property value. The dailyPrintUsageByUser property
     * @returns a PrintUsageByUserInterface
     */
    public get dailyPrintUsageByUser() {
        return this._dailyPrintUsageByUser;
    };
    /**
     * Sets the dailyPrintUsageByUser property value. The dailyPrintUsageByUser property
     * @param value Value to set for the dailyPrintUsageByUser property.
     */
    public set dailyPrintUsageByUser(value: PrintUsageByUser[] | undefined) {
        if(value) {
            const dailyPrintUsageByUserArrValue: PrintUsageByUserImpl[] = [];
            this.dailyPrintUsageByUser?.forEach(element => {
                dailyPrintUsageByUserArrValue.push((element instanceof PrintUsageByUserImpl? element:new PrintUsageByUserImpl(element)));
            });
            this._dailyPrintUsageByUser = dailyPrintUsageByUserArrValue;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "dailyPrintUsageByPrinter": n => { this.dailyPrintUsageByPrinter = n.getCollectionOfObjectValues<PrintUsageByPrinterImpl>(createPrintUsageByPrinterFromDiscriminatorValue); },
            "dailyPrintUsageByUser": n => { this.dailyPrintUsageByUser = n.getCollectionOfObjectValues<PrintUsageByUserImpl>(createPrintUsageByUserFromDiscriminatorValue); },
            "monthlyPrintUsageByPrinter": n => { this.monthlyPrintUsageByPrinter = n.getCollectionOfObjectValues<PrintUsageByPrinterImpl>(createPrintUsageByPrinterFromDiscriminatorValue); },
            "monthlyPrintUsageByUser": n => { this.monthlyPrintUsageByUser = n.getCollectionOfObjectValues<PrintUsageByUserImpl>(createPrintUsageByUserFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the monthlyPrintUsageByPrinter property value. The monthlyPrintUsageByPrinter property
     * @returns a PrintUsageByPrinterInterface
     */
    public get monthlyPrintUsageByPrinter() {
        return this._monthlyPrintUsageByPrinter;
    };
    /**
     * Sets the monthlyPrintUsageByPrinter property value. The monthlyPrintUsageByPrinter property
     * @param value Value to set for the monthlyPrintUsageByPrinter property.
     */
    public set monthlyPrintUsageByPrinter(value: PrintUsageByPrinter[] | undefined) {
        if(value) {
            const monthlyPrintUsageByPrinterArrValue: PrintUsageByPrinterImpl[] = [];
            this.monthlyPrintUsageByPrinter?.forEach(element => {
                monthlyPrintUsageByPrinterArrValue.push((element instanceof PrintUsageByPrinterImpl? element:new PrintUsageByPrinterImpl(element)));
            });
            this._monthlyPrintUsageByPrinter = monthlyPrintUsageByPrinterArrValue;
        }
    };
    /**
     * Gets the monthlyPrintUsageByUser property value. The monthlyPrintUsageByUser property
     * @returns a PrintUsageByUserInterface
     */
    public get monthlyPrintUsageByUser() {
        return this._monthlyPrintUsageByUser;
    };
    /**
     * Sets the monthlyPrintUsageByUser property value. The monthlyPrintUsageByUser property
     * @param value Value to set for the monthlyPrintUsageByUser property.
     */
    public set monthlyPrintUsageByUser(value: PrintUsageByUser[] | undefined) {
        if(value) {
            const monthlyPrintUsageByUserArrValue: PrintUsageByUserImpl[] = [];
            this.monthlyPrintUsageByUser?.forEach(element => {
                monthlyPrintUsageByUserArrValue.push((element instanceof PrintUsageByUserImpl? element:new PrintUsageByUserImpl(element)));
            });
            this._monthlyPrintUsageByUser = monthlyPrintUsageByUserArrValue;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.dailyPrintUsageByPrinter && this.dailyPrintUsageByPrinter.length != 0){        const dailyPrintUsageByPrinterArrValue: PrintUsageByPrinterImpl[] = [];
        this.dailyPrintUsageByPrinter?.forEach(element => {
            dailyPrintUsageByPrinterArrValue.push((element instanceof PrintUsageByPrinterImpl? element:new PrintUsageByPrinterImpl(element)));
        });
            writer.writeCollectionOfObjectValues<PrintUsageByPrinterImpl>("dailyPrintUsageByPrinter", dailyPrintUsageByPrinterArrValue);
        }
        if(this.dailyPrintUsageByUser && this.dailyPrintUsageByUser.length != 0){        const dailyPrintUsageByUserArrValue: PrintUsageByUserImpl[] = [];
        this.dailyPrintUsageByUser?.forEach(element => {
            dailyPrintUsageByUserArrValue.push((element instanceof PrintUsageByUserImpl? element:new PrintUsageByUserImpl(element)));
        });
            writer.writeCollectionOfObjectValues<PrintUsageByUserImpl>("dailyPrintUsageByUser", dailyPrintUsageByUserArrValue);
        }
        if(this.monthlyPrintUsageByPrinter && this.monthlyPrintUsageByPrinter.length != 0){        const monthlyPrintUsageByPrinterArrValue: PrintUsageByPrinterImpl[] = [];
        this.monthlyPrintUsageByPrinter?.forEach(element => {
            monthlyPrintUsageByPrinterArrValue.push((element instanceof PrintUsageByPrinterImpl? element:new PrintUsageByPrinterImpl(element)));
        });
            writer.writeCollectionOfObjectValues<PrintUsageByPrinterImpl>("monthlyPrintUsageByPrinter", monthlyPrintUsageByPrinterArrValue);
        }
        if(this.monthlyPrintUsageByUser && this.monthlyPrintUsageByUser.length != 0){        const monthlyPrintUsageByUserArrValue: PrintUsageByUserImpl[] = [];
        this.monthlyPrintUsageByUser?.forEach(element => {
            monthlyPrintUsageByUserArrValue.push((element instanceof PrintUsageByUserImpl? element:new PrintUsageByUserImpl(element)));
        });
            writer.writeCollectionOfObjectValues<PrintUsageByUserImpl>("monthlyPrintUsageByUser", monthlyPrintUsageByUserArrValue);
        }
    };
}
