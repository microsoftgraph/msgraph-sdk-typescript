import {createPrintUsageByPrinterFromDiscriminatorValue} from './createPrintUsageByPrinterFromDiscriminatorValue';
import {createPrintUsageByUserFromDiscriminatorValue} from './createPrintUsageByUserFromDiscriminatorValue';
import {EntityImpl, PrintUsageByPrinterImpl, PrintUsageByUserImpl} from './index';
import {PrintUsageByPrinter} from './printUsageByPrinter';
import {PrintUsageByUser} from './printUsageByUser';
import {ReportRoot} from './reportRoot';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** The resource that represents an instance of Enrollment Failure Reports. */
export class ReportRootImpl extends EntityImpl implements Parsable, ReportRoot {
    /** The dailyPrintUsageByPrinter property */
    public dailyPrintUsageByPrinter?: PrintUsageByPrinter[] | undefined;
    /** The dailyPrintUsageByUser property */
    public dailyPrintUsageByUser?: PrintUsageByUser[] | undefined;
    /** The monthlyPrintUsageByPrinter property */
    public monthlyPrintUsageByPrinter?: PrintUsageByPrinter[] | undefined;
    /** The monthlyPrintUsageByUser property */
    public monthlyPrintUsageByUser?: PrintUsageByUser[] | undefined;
    /**
     * Instantiates a new reportRoot and sets the default values.
     * @param reportRootParameterValue 
     */
    public constructor(reportRootParameterValue?: ReportRoot | undefined) {
        super();
        this.dailyPrintUsageByPrinter = reportRootParameterValue?.dailyPrintUsageByPrinter ;
        this.dailyPrintUsageByUser = reportRootParameterValue?.dailyPrintUsageByUser ;
        this.monthlyPrintUsageByPrinter = reportRootParameterValue?.monthlyPrintUsageByPrinter ;
        this.monthlyPrintUsageByUser = reportRootParameterValue?.monthlyPrintUsageByUser ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.dailyPrintUsageByPrinter && this.dailyPrintUsageByPrinter.length != 0){        const dailyPrintUsageByPrinterArrValue: PrintUsageByPrinterImpl[] = []; this.dailyPrintUsageByPrinter?.forEach(element => {dailyPrintUsageByPrinterArrValue.push(new PrintUsageByPrinterImpl(element));});
        writer.writeCollectionOfObjectValues<PrintUsageByPrinterImpl>("dailyPrintUsageByPrinter", dailyPrintUsageByPrinterArrValue);
        }
        if(this.dailyPrintUsageByUser && this.dailyPrintUsageByUser.length != 0){        const dailyPrintUsageByUserArrValue: PrintUsageByUserImpl[] = []; this.dailyPrintUsageByUser?.forEach(element => {dailyPrintUsageByUserArrValue.push(new PrintUsageByUserImpl(element));});
        writer.writeCollectionOfObjectValues<PrintUsageByUserImpl>("dailyPrintUsageByUser", dailyPrintUsageByUserArrValue);
        }
        if(this.monthlyPrintUsageByPrinter && this.monthlyPrintUsageByPrinter.length != 0){        const monthlyPrintUsageByPrinterArrValue: PrintUsageByPrinterImpl[] = []; this.monthlyPrintUsageByPrinter?.forEach(element => {monthlyPrintUsageByPrinterArrValue.push(new PrintUsageByPrinterImpl(element));});
        writer.writeCollectionOfObjectValues<PrintUsageByPrinterImpl>("monthlyPrintUsageByPrinter", monthlyPrintUsageByPrinterArrValue);
        }
        if(this.monthlyPrintUsageByUser && this.monthlyPrintUsageByUser.length != 0){        const monthlyPrintUsageByUserArrValue: PrintUsageByUserImpl[] = []; this.monthlyPrintUsageByUser?.forEach(element => {monthlyPrintUsageByUserArrValue.push(new PrintUsageByUserImpl(element));});
        writer.writeCollectionOfObjectValues<PrintUsageByUserImpl>("monthlyPrintUsageByUser", monthlyPrintUsageByUserArrValue);
        }
    };
}
