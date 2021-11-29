import {Calendar} from './calendar';
import {Entity} from './entity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CalendarGroup extends Entity implements Parsable {
    /** The calendars in the calendar group. Navigation property. Read-only. Nullable.  */
    private _calendars?: Calendar[] | undefined;
    /** Identifies the version of the calendar group. Every time the calendar group is changed, ChangeKey changes as well. This allows Exchange to apply changes to the correct version of the object. Read-only.  */
    private _changeKey?: string | undefined;
    /** The class identifier. Read-only.  */
    private _classId?: string | undefined;
    /** The group name.  */
    private _name?: string | undefined;
    /**
     * Instantiates a new calendarGroup and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the calendars property value. The calendars in the calendar group. Navigation property. Read-only. Nullable.
     * @returns a calendar
     */
    public get calendars() {
        return this._calendars;
    };
    /**
     * Gets the changeKey property value. Identifies the version of the calendar group. Every time the calendar group is changed, ChangeKey changes as well. This allows Exchange to apply changes to the correct version of the object. Read-only.
     * @returns a string
     */
    public get changeKey() {
        return this._changeKey;
    };
    /**
     * Gets the classId property value. The class identifier. Read-only.
     * @returns a string
     */
    public get classId() {
        return this._classId;
    };
    /**
     * Gets the name property value. The group name.
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["calendars", (o, n) => { (o as unknown as CalendarGroup).calendars = n.getCollectionOfObjectValues<Calendar>(Calendar); }],
            ["changeKey", (o, n) => { (o as unknown as CalendarGroup).changeKey = n.getStringValue(); }],
            ["classId", (o, n) => { (o as unknown as CalendarGroup).classId = n.getStringValue(); }],
            ["name", (o, n) => { (o as unknown as CalendarGroup).name = n.getStringValue(); }],
        ]);
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
    /**
     * Sets the calendars property value. The calendars in the calendar group. Navigation property. Read-only. Nullable.
     * @param value Value to set for the calendars property.
     */
    public set calendars(value: Calendar[] | undefined) {
        this._calendars = value;
    };
    /**
     * Sets the changeKey property value. Identifies the version of the calendar group. Every time the calendar group is changed, ChangeKey changes as well. This allows Exchange to apply changes to the correct version of the object. Read-only.
     * @param value Value to set for the changeKey property.
     */
    public set changeKey(value: string | undefined) {
        this._changeKey = value;
    };
    /**
     * Sets the classId property value. The class identifier. Read-only.
     * @param value Value to set for the classId property.
     */
    public set classId(value: string | undefined) {
        this._classId = value;
    };
    /**
     * Sets the name property value. The group name.
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
}
