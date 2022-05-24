import {AttendeeBase} from './attendeeBase';
import {AttendeeType} from './attendeeType';
import {RecipientImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to user. */
export class AttendeeBaseImpl extends RecipientImpl implements AttendeeBase, Parsable {
    /** The type of attendee. Possible values are: required, optional, resource. Currently if the attendee is a person, findMeetingTimes always considers the person is of the Required type. */
    public type?: AttendeeType | undefined;
    /**
     * Instantiates a new attendeeBase and sets the default values.
     * @param attendeeBaseParameterValue 
     */
    public constructor(attendeeBaseParameterValue?: AttendeeBase | undefined) {
        super();
        this.type = attendeeBaseParameterValue?.type ;
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
    };
}
