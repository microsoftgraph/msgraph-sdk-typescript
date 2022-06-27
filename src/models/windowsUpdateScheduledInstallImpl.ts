import {WindowsUpdateInstallScheduleTypeImpl} from './index';
import {WeeklySchedule} from './weeklySchedule';
import {WindowsUpdateScheduledInstall} from './windowsUpdateScheduledInstall';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter, TimeOnly} from '@microsoft/kiota-abstractions';

export class WindowsUpdateScheduledInstallImpl extends WindowsUpdateInstallScheduleTypeImpl implements WindowsUpdateScheduledInstall {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Scheduled Install Day in week. Possible values are: userDefined, everyday, sunday, monday, tuesday, wednesday, thursday, friday, saturday, noScheduledScan. */
    public scheduledInstallDay?: WeeklySchedule | undefined;
    /** Scheduled Install Time during day */
    public scheduledInstallTime?: TimeOnly | undefined;
    /**
     * Instantiates a new WindowsUpdateScheduledInstall and sets the default values.
     * @param windowsUpdateScheduledInstallParameterValue 
     */
    public constructor(windowsUpdateScheduledInstallParameterValue?: WindowsUpdateScheduledInstall | undefined) {
        super(windowsUpdateScheduledInstallParameterValue);
        this.additionalData = windowsUpdateScheduledInstallParameterValue?.additionalData ? windowsUpdateScheduledInstallParameterValue?.additionalData! : {};
        this.scheduledInstallDay = windowsUpdateScheduledInstallParameterValue?.scheduledInstallDay;
        this.scheduledInstallTime = windowsUpdateScheduledInstallParameterValue?.scheduledInstallTime;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "scheduledInstallDay": n => { this.scheduledInstallDay = n.getEnumValue<WeeklySchedule>(WeeklySchedule); },
            "scheduledInstallTime": n => { this.scheduledInstallTime = n.getTimeOnlyValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.scheduledInstallDay){
            writer.writeEnumValue<WeeklySchedule>("scheduledInstallDay", this.scheduledInstallDay);
        }
        if(this.scheduledInstallTime){
            writer.writeTimeOnlyValue("scheduledInstallTime", this.scheduledInstallTime);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
