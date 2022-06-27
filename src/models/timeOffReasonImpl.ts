import {ChangeTrackedEntityImpl} from './index';
import {TimeOffReason} from './timeOffReason';
import {TimeOffReasonIconType} from './timeOffReasonIconType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TimeOffReasonImpl extends ChangeTrackedEntityImpl implements TimeOffReason {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The name of the timeOffReason. Required. */
    public displayName?: string | undefined;
    /** Supported icon types: none; car; calendar; running; plane; firstAid; doctor; notWorking; clock; juryDuty; globe; cup; phone; weather; umbrella; piggyBank; dog; cake; trafficCone; pin; sunny. Required. */
    public iconType?: TimeOffReasonIconType | undefined;
    /** Indicates whether the timeOffReason can be used when creating new entities or updating existing ones. Required. */
    public isActive?: boolean | undefined;
    /**
     * Instantiates a new TimeOffReason and sets the default values.
     * @param timeOffReasonParameterValue 
     */
    public constructor(timeOffReasonParameterValue?: TimeOffReason | undefined) {
        super(timeOffReasonParameterValue);
        this.additionalData = timeOffReasonParameterValue?.additionalData ? timeOffReasonParameterValue?.additionalData! : {};
        this.displayName = timeOffReasonParameterValue?.displayName;
        this.iconType = timeOffReasonParameterValue?.iconType;
        this.isActive = timeOffReasonParameterValue?.isActive;
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
        writer.writeAdditionalData(this.additionalData);
    };
}
