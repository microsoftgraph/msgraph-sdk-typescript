import {WindowsUpdateInstallScheduleType} from './index';
import {WeeklySchedule} from './weeklySchedule';
import {Parsable, ParseNode, SerializationWriter, TimeOnly} from '@microsoft/kiota-abstractions';

export class WindowsUpdateScheduledInstall extends WindowsUpdateInstallScheduleType implements Parsable {
    /** Scheduled Install Day in week. Possible values are: userDefined, everyday, sunday, monday, tuesday, wednesday, thursday, friday, saturday, noScheduledScan. */
    private _scheduledInstallDay?: WeeklySchedule | undefined;
    /** Scheduled Install Time during day */
    private _scheduledInstallTime?: TimeOnly | undefined;
    /**
     * Instantiates a new WindowsUpdateScheduledInstall and sets the default values.
     */
    public constructor() {
        super();
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
     * Gets the scheduledInstallDay property value. Scheduled Install Day in week. Possible values are: userDefined, everyday, sunday, monday, tuesday, wednesday, thursday, friday, saturday, noScheduledScan.
     * @returns a weeklySchedule
     */
    public get scheduledInstallDay() {
        return this._scheduledInstallDay;
    };
    /**
     * Sets the scheduledInstallDay property value. Scheduled Install Day in week. Possible values are: userDefined, everyday, sunday, monday, tuesday, wednesday, thursday, friday, saturday, noScheduledScan.
     * @param value Value to set for the scheduledInstallDay property.
     */
    public set scheduledInstallDay(value: WeeklySchedule | undefined) {
        this._scheduledInstallDay = value;
    };
    /**
     * Gets the scheduledInstallTime property value. Scheduled Install Time during day
     * @returns a TimeOnly
     */
    public get scheduledInstallTime() {
        return this._scheduledInstallTime;
    };
    /**
     * Sets the scheduledInstallTime property value. Scheduled Install Time during day
     * @param value Value to set for the scheduledInstallTime property.
     */
    public set scheduledInstallTime(value: TimeOnly | undefined) {
        this._scheduledInstallTime = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeEnumValue<WeeklySchedule>("scheduledInstallDay", this.scheduledInstallDay);
        writer.writeTimeOnlyValue("scheduledInstallTime", this.scheduledInstallTime);
    };
}
