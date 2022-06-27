import {DeviceConfigurationImpl} from './index';
import {IosUpdateConfiguration} from './iosUpdateConfiguration';
import {Parsable, ParseNode, SerializationWriter, TimeOnly} from '@microsoft/kiota-abstractions';

export class IosUpdateConfigurationImpl extends DeviceConfigurationImpl implements IosUpdateConfiguration {
    /** Active Hours End (active hours mean the time window when updates install should not happen) */
    public activeHoursEnd?: TimeOnly | undefined;
    /** Active Hours Start (active hours mean the time window when updates install should not happen) */
    public activeHoursStart?: TimeOnly | undefined;
    /** Days in week for which active hours are configured. This collection can contain a maximum of 7 elements. */
    public scheduledInstallDays?: string[] | undefined;
    /** UTC Time Offset indicated in minutes */
    public utcTimeOffsetInMinutes?: number | undefined;
    /**
     * Instantiates a new IosUpdateConfiguration and sets the default values.
     * @param iosUpdateConfigurationParameterValue 
     */
    public constructor(iosUpdateConfigurationParameterValue?: IosUpdateConfiguration | undefined) {
        super(iosUpdateConfigurationParameterValue);
        this.activeHoursEnd = iosUpdateConfigurationParameterValue?.activeHoursEnd;
        this.activeHoursStart = iosUpdateConfigurationParameterValue?.activeHoursStart;
        this.scheduledInstallDays = iosUpdateConfigurationParameterValue?.scheduledInstallDays;
        this.utcTimeOffsetInMinutes = iosUpdateConfigurationParameterValue?.utcTimeOffsetInMinutes;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "activeHoursEnd": n => { this.activeHoursEnd = n.getTimeOnlyValue(); },
            "activeHoursStart": n => { this.activeHoursStart = n.getTimeOnlyValue(); },
            "scheduledInstallDays": n => { this.scheduledInstallDays = n.getCollectionOfPrimitiveValues<string>(); },
            "utcTimeOffsetInMinutes": n => { this.utcTimeOffsetInMinutes = n.getNumberValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.activeHoursEnd){
            writer.writeTimeOnlyValue("activeHoursEnd", this.activeHoursEnd);
        }
        if(this.activeHoursStart){
            writer.writeTimeOnlyValue("activeHoursStart", this.activeHoursStart);
        }
        if(this.scheduledInstallDays){
            writer.writeCollectionOfPrimitiveValues<string>("scheduledInstallDays", this.scheduledInstallDays);
        }
        if(this.utcTimeOffsetInMinutes){
            writer.writeNumberValue("utcTimeOffsetInMinutes", this.utcTimeOffsetInMinutes);
        }
    };
}
