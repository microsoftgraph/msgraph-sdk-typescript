import {AttendeeType} from './attendeeType';
import {Recipient} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to user. */
export class AttendeeBase extends Recipient implements Parsable {
    /** The type of attendee. Possible values are: required, optional, resource. Currently if the attendee is a person, findMeetingTimes always considers the person is of the Required type. */
    private _type?: AttendeeType | undefined;
    /**
     * Instantiates a new attendeeBase and sets the default values.
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
        writer.writeEnumValue<AttendeeType>("type", this.type);
    };
    /**
     * Gets the type property value. The type of attendee. Possible values are: required, optional, resource. Currently if the attendee is a person, findMeetingTimes always considers the person is of the Required type.
     * @returns a attendeeType
     */
    public get type() {
        return this._type;
    };
    /**
     * Sets the type property value. The type of attendee. Possible values are: required, optional, resource. Currently if the attendee is a person, findMeetingTimes always considers the person is of the Required type.
     * @param value Value to set for the type property.
     */
    public set type(value: AttendeeType | undefined) {
        this._type = value;
    };
}
