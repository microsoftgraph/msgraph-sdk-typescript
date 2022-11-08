import {BaseCollectionPaginationCountResponse} from '../../../../../../../models/';
import {CalendarRoleType} from '../../../../../../../models/calendarRoleType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the allowedCalendarSharingRoles method. */
export class AllowedCalendarSharingRolesWithUserResponse extends BaseCollectionPaginationCountResponse implements Parsable {
    /** The value property */
    private _value?: CalendarRoleType[] | undefined;
    /**
     * Instantiates a new allowedCalendarSharingRolesWithUserResponse and sets the default values.
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
            "value": n => { this.value = n.getEnumValues<CalendarRoleType>(CalendarRoleType); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        this.value && writer.writeEnumValue<CalendarRoleType>("value", ...this.value);
    };
    /**
     * Gets the value property value. The value property
     * @returns a calendarRoleType
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. The value property
     * @param value Value to set for the value property.
     */
    public set value(value: CalendarRoleType[] | undefined) {
        this._value = value;
    };
}
