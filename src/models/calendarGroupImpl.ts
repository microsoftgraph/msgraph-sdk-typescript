import {Calendar} from './calendar';
import {CalendarGroup} from './calendarGroup';
import {createCalendarFromDiscriminatorValue} from './createCalendarFromDiscriminatorValue';
import {CalendarImpl, EntityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CalendarGroupImpl extends EntityImpl implements CalendarGroup, Parsable {
    /** The calendars in the calendar group. Navigation property. Read-only. Nullable.  */
    calendars?: Calendar[] | undefined;
    /** Identifies the version of the calendar group. Every time the calendar group is changed, ChangeKey changes as well. This allows Exchange to apply changes to the correct version of the object. Read-only.  */
    changeKey?: string | undefined;
    /** The class identifier. Read-only.  */
    classId?: string | undefined;
    /** The group name.  */
    name?: string | undefined;
    /**
     * Instantiates a new calendarGroup and sets the default values.
     * @param calendarGroupParameterValue 
     */
    public constructor(calendarGroupParameterValue?: CalendarGroup | undefined) {
        super();
        this.calendars = calendarGroupParameterValue?.calendars ;
        this.changeKey = calendarGroupParameterValue?.changeKey ;
        this.classId = calendarGroupParameterValue?.classId ;
        this.name = calendarGroupParameterValue?.name ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "calendars": n => { this.calendars = n.getCollectionOfObjectValues<CalendarImpl>(createCalendarFromDiscriminatorValue); },
            "changeKey": n => { this.changeKey = n.getStringValue(); },
            "classId": n => { this.classId = n.getStringValue(); },
            "name": n => { this.name = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.calendars){
        const calendarsArrValue: CalendarImpl[] = []; this.calendars?.forEach(element => {calendarsArrValue.push(new CalendarImpl(element));});
        writer.writeCollectionOfObjectValues<CalendarImpl>("calendars", calendarsArrValue);
        }
        if(this.changeKey){
        if(this.changeKey)
        writer.writeStringValue("changeKey", this.changeKey);
        }
        if(this.classId){
        if(this.classId)
        writer.writeStringValue("classId", this.classId);
        }
        if(this.name){
        if(this.name)
        writer.writeStringValue("name", this.name);
        }
    };
}
