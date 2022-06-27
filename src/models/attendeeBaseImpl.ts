import {AttendeeBase} from './attendeeBase';
import {AttendeeType} from './attendeeType';
import {RecipientImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AttendeeBaseImpl extends RecipientImpl implements AttendeeBase {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The type of attendee. Possible values are: required, optional, resource. Currently if the attendee is a person, findMeetingTimes always considers the person is of the Required type. */
    public type?: AttendeeType | undefined;
    /**
     * Instantiates a new AttendeeBase and sets the default values.
     * @param attendeeBaseParameterValue 
     */
    public constructor(attendeeBaseParameterValue?: AttendeeBase | undefined) {
        super(attendeeBaseParameterValue);
        this.additionalData = attendeeBaseParameterValue?.additionalData ? attendeeBaseParameterValue?.additionalData! : {};
        this.type = attendeeBaseParameterValue?.type;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "type": n => { this.type = n.getEnumValue<AttendeeType>(AttendeeType); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.type){
            writer.writeEnumValue<AttendeeType>("type", this.type);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
