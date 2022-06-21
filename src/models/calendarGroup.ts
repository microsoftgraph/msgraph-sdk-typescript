import {createCalendarFromDiscriminatorValue} from './createCalendarFromDiscriminatorValue';
import {Calendar, Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of application entities. */
export class CalendarGroup extends Entity implements Parsable {
    /** The calendars in the calendar group. Navigation property. Read-only. Nullable. */
    private _calendars?: Calendar[] | undefined;
    /** Identifies the version of the calendar group. Every time the calendar group is changed, ChangeKey changes as well. This allows Exchange to apply changes to the correct version of the object. Read-only. */
    private _changeKey?: string | undefined;
    /** The class identifier. Read-only. */
    private _classId?: string | undefined;
    /** The group name. */
    private _name?: string | undefined;
    /**
     * Gets the calendars property value. The calendars in the calendar group. Navigation property. Read-only. Nullable.
     * @returns a calendar
     */
    public get calendars() {
        return this._calendars;
    };
    /**
     * Sets the calendars property value. The calendars in the calendar group. Navigation property. Read-only. Nullable.
     * @param value Value to set for the calendars property.
     */
    public set calendars(value: Calendar[] | undefined) {
        this._calendars = value;
    };
    /**
     * Gets the changeKey property value. Identifies the version of the calendar group. Every time the calendar group is changed, ChangeKey changes as well. This allows Exchange to apply changes to the correct version of the object. Read-only.
     * @returns a string
     */
    public get changeKey() {
        return this._changeKey;
    };
    /**
     * Sets the changeKey property value. Identifies the version of the calendar group. Every time the calendar group is changed, ChangeKey changes as well. This allows Exchange to apply changes to the correct version of the object. Read-only.
     * @param value Value to set for the changeKey property.
     */
    public set changeKey(value: string | undefined) {
        this._changeKey = value;
    };
    /**
     * Gets the classId property value. The class identifier. Read-only.
     * @returns a string
     */
    public get classId() {
        return this._classId;
    };
    /**
     * Sets the classId property value. The class identifier. Read-only.
     * @param value Value to set for the classId property.
     */
    public set classId(value: string | undefined) {
        this._classId = value;
    };
    /**
     * Instantiates a new calendarGroup and sets the default values.
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
            "calendars": n => { this.calendars = n.getCollectionOfObjectValues<Calendar>(createCalendarFromDiscriminatorValue); },
            "changeKey": n => { this.changeKey = n.getStringValue(); },
            "classId": n => { this.classId = n.getStringValue(); },
            "name": n => { this.name = n.getStringValue(); },
        };
    };
    /**
     * Gets the name property value. The group name.
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. The group name.
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<Calendar>("calendars", this.calendars);
        writer.writeStringValue("changeKey", this.changeKey);
        writer.writeStringValue("classId", this.classId);
        writer.writeStringValue("name", this.name);
    };
}
