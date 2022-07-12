import {DeviceConfiguration} from './index';
import {Parsable, ParseNode, SerializationWriter, TimeOnly} from '@microsoft/kiota-abstractions';

export class IosUpdateConfiguration extends DeviceConfiguration implements Parsable {
    /** Active Hours End (active hours mean the time window when updates install should not happen) */
    private _activeHoursEnd?: TimeOnly | undefined;
    /** Active Hours Start (active hours mean the time window when updates install should not happen) */
    private _activeHoursStart?: TimeOnly | undefined;
    /** Days in week for which active hours are configured. This collection can contain a maximum of 7 elements. */
    private _scheduledInstallDays?: string[] | undefined;
    /** UTC Time Offset indicated in minutes */
    private _utcTimeOffsetInMinutes?: number | undefined;
    /**
     * Gets the activeHoursEnd property value. Active Hours End (active hours mean the time window when updates install should not happen)
     * @returns a TimeOnly
     */
    public get activeHoursEnd() {
        return this._activeHoursEnd;
    };
    /**
     * Sets the activeHoursEnd property value. Active Hours End (active hours mean the time window when updates install should not happen)
     * @param value Value to set for the activeHoursEnd property.
     */
    public set activeHoursEnd(value: TimeOnly | undefined) {
        this._activeHoursEnd = value;
    };
    /**
     * Gets the activeHoursStart property value. Active Hours Start (active hours mean the time window when updates install should not happen)
     * @returns a TimeOnly
     */
    public get activeHoursStart() {
        return this._activeHoursStart;
    };
    /**
     * Sets the activeHoursStart property value. Active Hours Start (active hours mean the time window when updates install should not happen)
     * @param value Value to set for the activeHoursStart property.
     */
    public set activeHoursStart(value: TimeOnly | undefined) {
        this._activeHoursStart = value;
    };
    /**
     * Instantiates a new IosUpdateConfiguration and sets the default values.
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
            "activeHoursEnd": n => { this.activeHoursEnd = n.getTimeOnlyValue(); },
            "activeHoursStart": n => { this.activeHoursStart = n.getTimeOnlyValue(); },
            "scheduledInstallDays": n => { this.scheduledInstallDays = n.getCollectionOfPrimitiveValues<string>(); },
            "utcTimeOffsetInMinutes": n => { this.utcTimeOffsetInMinutes = n.getNumberValue(); },
        };
    };
    /**
     * Gets the scheduledInstallDays property value. Days in week for which active hours are configured. This collection can contain a maximum of 7 elements.
     * @returns a string
     */
    public get scheduledInstallDays() {
        return this._scheduledInstallDays;
    };
    /**
     * Sets the scheduledInstallDays property value. Days in week for which active hours are configured. This collection can contain a maximum of 7 elements.
     * @param value Value to set for the scheduledInstallDays property.
     */
    public set scheduledInstallDays(value: string[] | undefined) {
        this._scheduledInstallDays = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeTimeOnlyValue("activeHoursEnd", this.activeHoursEnd);
        writer.writeTimeOnlyValue("activeHoursStart", this.activeHoursStart);
        writer.writeCollectionOfPrimitiveValues<string>("scheduledInstallDays", this.scheduledInstallDays);
        writer.writeNumberValue("utcTimeOffsetInMinutes", this.utcTimeOffsetInMinutes);
    };
    /**
     * Gets the utcTimeOffsetInMinutes property value. UTC Time Offset indicated in minutes
     * @returns a integer
     */
    public get utcTimeOffsetInMinutes() {
        return this._utcTimeOffsetInMinutes;
    };
    /**
     * Sets the utcTimeOffsetInMinutes property value. UTC Time Offset indicated in minutes
     * @param value Value to set for the utcTimeOffsetInMinutes property.
     */
    public set utcTimeOffsetInMinutes(value: number | undefined) {
        this._utcTimeOffsetInMinutes = value;
    };
}
