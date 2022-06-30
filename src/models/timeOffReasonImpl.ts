import {ChangeTrackedEntityImpl} from './index';
import {TimeOffReason} from './timeOffReason';
import {TimeOffReasonIconType} from './timeOffReasonIconType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TimeOffReasonImpl extends ChangeTrackedEntityImpl implements TimeOffReason {
    /** The name of the timeOffReason. Required. */
    private _displayName?: string | undefined;
    /** Supported icon types: none; car; calendar; running; plane; firstAid; doctor; notWorking; clock; juryDuty; globe; cup; phone; weather; umbrella; piggyBank; dog; cake; trafficCone; pin; sunny. Required. */
    private _iconType?: TimeOffReasonIconType | undefined;
    /** Indicates whether the timeOffReason can be used when creating new entities or updating existing ones. Required. */
    private _isActive?: boolean | undefined;
    /**
     * Instantiates a new TimeOffReason and sets the default values.
     * @param timeOffReasonParameterValue 
     */
    public constructor(timeOffReasonParameterValue?: TimeOffReason | undefined) {
        super(timeOffReasonParameterValue);
        this._displayName = timeOffReasonParameterValue?.displayName;
        this._iconType = timeOffReasonParameterValue?.iconType;
        this._isActive = timeOffReasonParameterValue?.isActive;
    };
    /**
     * Gets the displayName property value. The name of the timeOffReason. Required.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The name of the timeOffReason. Required.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        if(value) {
            this._displayName = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "displayName": n => { this.displayName = n.getStringValue(); },
            "iconType": n => { this.iconType = n.getEnumValue<TimeOffReasonIconType>(TimeOffReasonIconType); },
            "isActive": n => { this.isActive = n.getBooleanValue(); },
        };
    };
    /**
     * Gets the iconType property value. Supported icon types: none; car; calendar; running; plane; firstAid; doctor; notWorking; clock; juryDuty; globe; cup; phone; weather; umbrella; piggyBank; dog; cake; trafficCone; pin; sunny. Required.
     * @returns a timeOffReasonIconType
     */
    public get iconType() {
        return this._iconType;
    };
    /**
     * Sets the iconType property value. Supported icon types: none; car; calendar; running; plane; firstAid; doctor; notWorking; clock; juryDuty; globe; cup; phone; weather; umbrella; piggyBank; dog; cake; trafficCone; pin; sunny. Required.
     * @param value Value to set for the iconType property.
     */
    public set iconType(value: TimeOffReasonIconType | undefined) {
        if(value) {
            this._iconType = value;
        }
    };
    /**
     * Gets the isActive property value. Indicates whether the timeOffReason can be used when creating new entities or updating existing ones. Required.
     * @returns a boolean
     */
    public get isActive() {
        return this._isActive;
    };
    /**
     * Sets the isActive property value. Indicates whether the timeOffReason can be used when creating new entities or updating existing ones. Required.
     * @param value Value to set for the isActive property.
     */
    public set isActive(value: boolean | undefined) {
        if(value) {
            this._isActive = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.displayName){
            writer.writeStringValue("displayName", this.displayName);
        }
        if(this.iconType){
            writer.writeEnumValue<TimeOffReasonIconType>("iconType", this.iconType);
        }
        if(this.isActive){
            writer.writeBooleanValue("isActive", this.isActive);
        }
    };
}
