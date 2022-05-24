import {DeviceOperatingSystemSummary} from './deviceOperatingSystemSummary';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Device operating system summary. */
export class DeviceOperatingSystemSummaryImpl implements AdditionalDataHolder, DeviceOperatingSystemSummary, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Number of android device count. */
    public androidCount?: number | undefined;
    /** Number of iOS device count. */
    public iosCount?: number | undefined;
    /** Number of Mac OS X device count. */
    public macOSCount?: number | undefined;
    /** Number of unknown device count. */
    public unknownCount?: number | undefined;
    /** Number of Windows device count. */
    public windowsCount?: number | undefined;
    /** Number of Windows mobile device count. */
    public windowsMobileCount?: number | undefined;
    /**
     * Instantiates a new deviceOperatingSystemSummary and sets the default values.
     * @param deviceOperatingSystemSummaryParameterValue 
     */
    public constructor(deviceOperatingSystemSummaryParameterValue?: DeviceOperatingSystemSummary | undefined) {
        this.additionalData = deviceOperatingSystemSummaryParameterValue?.additionalData ? deviceOperatingSystemSummaryParameterValue?.additionalData! : {}
        this.androidCount = deviceOperatingSystemSummaryParameterValue?.androidCount ;
        this.iosCount = deviceOperatingSystemSummaryParameterValue?.iosCount ;
        this.macOSCount = deviceOperatingSystemSummaryParameterValue?.macOSCount ;
        this.unknownCount = deviceOperatingSystemSummaryParameterValue?.unknownCount ;
        this.windowsCount = deviceOperatingSystemSummaryParameterValue?.windowsCount ;
        this.windowsMobileCount = deviceOperatingSystemSummaryParameterValue?.windowsMobileCount ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "androidCount": n => { this.androidCount = n.getNumberValue(); },
            "iosCount": n => { this.iosCount = n.getNumberValue(); },
            "macOSCount": n => { this.macOSCount = n.getNumberValue(); },
            "unknownCount": n => { this.unknownCount = n.getNumberValue(); },
            "windowsCount": n => { this.windowsCount = n.getNumberValue(); },
            "windowsMobileCount": n => { this.windowsMobileCount = n.getNumberValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.androidCount){
        writer.writeNumberValue("androidCount", this.androidCount);
        }
        if(this.iosCount){
        writer.writeNumberValue("iosCount", this.iosCount);
        }
        if(this.macOSCount){
        writer.writeNumberValue("macOSCount", this.macOSCount);
        }
        if(this.unknownCount){
        writer.writeNumberValue("unknownCount", this.unknownCount);
        }
        if(this.windowsCount){
        writer.writeNumberValue("windowsCount", this.windowsCount);
        }
        if(this.windowsMobileCount){
        writer.writeNumberValue("windowsMobileCount", this.windowsMobileCount);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
