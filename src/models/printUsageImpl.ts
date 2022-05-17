import {EntityImpl} from './index';
import {PrintUsage} from './printUsage';
import {DateOnly, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PrintUsageImpl extends EntityImpl implements Parsable, PrintUsage {
    /** The completedBlackAndWhiteJobCount property */
    completedBlackAndWhiteJobCount?: number | undefined;
    /** The completedColorJobCount property */
    completedColorJobCount?: number | undefined;
    /** The incompleteJobCount property */
    incompleteJobCount?: number | undefined;
    /** The usageDate property */
    usageDate?: DateOnly | undefined;
    /**
     * Instantiates a new printUsage and sets the default values.
     * @param printUsageParameterValue 
     */
    public constructor(printUsageParameterValue?: PrintUsage | undefined) {
        super();
        this.completedBlackAndWhiteJobCount = printUsageParameterValue?.completedBlackAndWhiteJobCount ;
        this.completedColorJobCount = printUsageParameterValue?.completedColorJobCount ;
        this.incompleteJobCount = printUsageParameterValue?.incompleteJobCount ;
        this.usageDate = printUsageParameterValue?.usageDate ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "completedBlackAndWhiteJobCount": n => { this.completedBlackAndWhiteJobCount = n.getNumberValue(); },
            "completedColorJobCount": n => { this.completedColorJobCount = n.getNumberValue(); },
            "incompleteJobCount": n => { this.incompleteJobCount = n.getNumberValue(); },
            "usageDate": n => { this.usageDate = n.getDateOnlyValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.completedBlackAndWhiteJobCount){
        if(this.completedBlackAndWhiteJobCount)
        writer.writeNumberValue("completedBlackAndWhiteJobCount", this.completedBlackAndWhiteJobCount);
        }
        if(this.completedColorJobCount){
        if(this.completedColorJobCount)
        writer.writeNumberValue("completedColorJobCount", this.completedColorJobCount);
        }
        if(this.incompleteJobCount){
        if(this.incompleteJobCount)
        writer.writeNumberValue("incompleteJobCount", this.incompleteJobCount);
        }
        if(this.usageDate){
        if(this.usageDate)
        writer.writeDateOnlyValue("usageDate", this.usageDate);
        }
    };
}
