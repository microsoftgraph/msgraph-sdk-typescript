import {WindowsUpdateInstallScheduleType} from './index';
import {Parsable, ParseNode, SerializationWriter, TimeOnly} from '@microsoft/kiota-abstractions';

export class WindowsUpdateActiveHoursInstall extends WindowsUpdateInstallScheduleType implements Parsable {
    /** Active Hours End */
    private _activeHoursEnd?: TimeOnly | undefined;
    /** Active Hours Start */
    private _activeHoursStart?: TimeOnly | undefined;
    /**
     * Gets the activeHoursEnd property value. Active Hours End
     * @returns a TimeOnly
     */
    public get activeHoursEnd() {
        return this._activeHoursEnd;
    };
    /**
     * Sets the activeHoursEnd property value. Active Hours End
     * @param value Value to set for the activeHoursEnd property.
     */
    public set activeHoursEnd(value: TimeOnly | undefined) {
        this._activeHoursEnd = value;
    };
    /**
     * Gets the activeHoursStart property value. Active Hours Start
     * @returns a TimeOnly
     */
    public get activeHoursStart() {
        return this._activeHoursStart;
    };
    /**
     * Sets the activeHoursStart property value. Active Hours Start
     * @param value Value to set for the activeHoursStart property.
     */
    public set activeHoursStart(value: TimeOnly | undefined) {
        this._activeHoursStart = value;
    };
    /**
     * Instantiates a new WindowsUpdateActiveHoursInstall and sets the default values.
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
        };
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
    };
}
