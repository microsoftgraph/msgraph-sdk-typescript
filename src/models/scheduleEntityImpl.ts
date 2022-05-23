import {ScheduleEntity} from './scheduleEntity';
import {ScheduleEntityTheme} from './scheduleEntityTheme';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ScheduleEntityImpl implements AdditionalDataHolder, Parsable, ScheduleEntity {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The endDateTime property */
    public endDateTime?: Date | undefined;
    /** The startDateTime property */
    public startDateTime?: Date | undefined;
    /** The theme property */
    public theme?: ScheduleEntityTheme | undefined;
    /**
     * Instantiates a new scheduleEntity and sets the default values.
     * @param scheduleEntityParameterValue 
     */
    public constructor(scheduleEntityParameterValue?: ScheduleEntity | undefined) {
        this.additionalData = scheduleEntityParameterValue?.additionalData ? scheduleEntityParameterValue?.additionalData! : {}
        this.endDateTime = scheduleEntityParameterValue?.endDateTime ;
        this.startDateTime = scheduleEntityParameterValue?.startDateTime ;
        this.theme = scheduleEntityParameterValue?.theme ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "endDateTime": n => { this.endDateTime = n.getDateValue(); },
            "startDateTime": n => { this.startDateTime = n.getDateValue(); },
            "theme": n => { this.theme = n.getEnumValue<ScheduleEntityTheme>(ScheduleEntityTheme); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.endDateTime){
        writer.writeDateValue("endDateTime", this.endDateTime);
        }
        if(this.startDateTime){
        writer.writeDateValue("startDateTime", this.startDateTime);
        }
        if(this.theme){
        writer.writeEnumValue<ScheduleEntityTheme>("theme", this.theme);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
