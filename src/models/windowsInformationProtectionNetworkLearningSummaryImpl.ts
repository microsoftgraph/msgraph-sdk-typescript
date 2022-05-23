import {EntityImpl} from './index';
import {WindowsInformationProtectionNetworkLearningSummary} from './windowsInformationProtectionNetworkLearningSummary';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Windows Information Protection Network learning Summary entity. */
export class WindowsInformationProtectionNetworkLearningSummaryImpl extends EntityImpl implements Parsable, WindowsInformationProtectionNetworkLearningSummary {
    /** Device Count */
    public deviceCount?: number | undefined;
    /** Website url */
    public url?: string | undefined;
    /**
     * Instantiates a new windowsInformationProtectionNetworkLearningSummary and sets the default values.
     * @param windowsInformationProtectionNetworkLearningSummaryParameterValue 
     */
    public constructor(windowsInformationProtectionNetworkLearningSummaryParameterValue?: WindowsInformationProtectionNetworkLearningSummary | undefined) {
        super();
        this.deviceCount = windowsInformationProtectionNetworkLearningSummaryParameterValue?.deviceCount ;
        this.url = windowsInformationProtectionNetworkLearningSummaryParameterValue?.url ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "deviceCount": n => { this.deviceCount = n.getNumberValue(); },
            "url": n => { this.url = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.deviceCount){
        writer.writeNumberValue("deviceCount", this.deviceCount);
        }
        if(this.url){
        writer.writeStringValue("url", this.url);
        }
    };
}
