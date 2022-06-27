import {DeviceActionResultImpl} from './index';
import {WindowsDefenderScanActionResult} from './windowsDefenderScanActionResult';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WindowsDefenderScanActionResultImpl extends DeviceActionResultImpl implements WindowsDefenderScanActionResult {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Scan type either full scan or quick scan */
    public scanType?: string | undefined;
    /**
     * Instantiates a new WindowsDefenderScanActionResult and sets the default values.
     * @param windowsDefenderScanActionResultParameterValue 
     */
    public constructor(windowsDefenderScanActionResultParameterValue?: WindowsDefenderScanActionResult | undefined) {
        super(windowsDefenderScanActionResultParameterValue);
        this.additionalData = windowsDefenderScanActionResultParameterValue?.additionalData ? windowsDefenderScanActionResultParameterValue?.additionalData! : {};
        this.scanType = windowsDefenderScanActionResultParameterValue?.scanType;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "scanType": n => { this.scanType = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.scanType){
            writer.writeStringValue("scanType", this.scanType);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
