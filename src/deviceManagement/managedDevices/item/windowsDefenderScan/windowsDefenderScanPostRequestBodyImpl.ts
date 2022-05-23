import {WindowsDefenderScanPostRequestBody} from './windowsDefenderScanPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the windowsDefenderScan method. */
export class WindowsDefenderScanPostRequestBodyImpl implements AdditionalDataHolder, Parsable, WindowsDefenderScanPostRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The quickScan property */
    public quickScan?: boolean | undefined;
    /**
     * Instantiates a new windowsDefenderScanPostRequestBody and sets the default values.
     * @param windowsDefenderScanPostRequestBodyParameterValue 
     */
    public constructor(windowsDefenderScanPostRequestBodyParameterValue?: WindowsDefenderScanPostRequestBody | undefined) {
        this.additionalData = windowsDefenderScanPostRequestBodyParameterValue?.additionalData ? windowsDefenderScanPostRequestBodyParameterValue?.additionalData! : {}
        this.quickScan = windowsDefenderScanPostRequestBodyParameterValue?.quickScan ;
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
        writer.writeBooleanValue("quickScan", this.quickScan);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
