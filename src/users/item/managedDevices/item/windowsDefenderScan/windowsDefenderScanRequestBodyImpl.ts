import {WindowsDefenderScanRequestBody} from './windowsDefenderScanRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the windowsDefenderScan method.  */
export class WindowsDefenderScanRequestBodyImpl implements AdditionalDataHolder, Parsable, WindowsDefenderScanRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    additionalData: Record<string, unknown>;
    /** The quickScan property  */
    quickScan?: boolean | undefined;
    /**
     * Instantiates a new windowsDefenderScanRequestBody and sets the default values.
     * @param windowsDefenderScanRequestBodyParameterValue 
     */
    public constructor(windowsDefenderScanRequestBodyParameterValue?: WindowsDefenderScanRequestBody | undefined) {
        this.additionalData = {};
        this.additionalData = windowsDefenderScanRequestBodyParameterValue?.additionalData ? {} : windowsDefenderScanRequestBodyParameterValue?.additionalData!
        this.quickScan = windowsDefenderScanRequestBodyParameterValue?.quickScan ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "quickScan": n => { this.quickScan = n.getBooleanValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.quickScan){
        if(this.quickScan)
        writer.writeBooleanValue("quickScan", this.quickScan);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
