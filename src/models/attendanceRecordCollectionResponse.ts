import {createAttendanceRecordFromDiscriminatorValue} from './createAttendanceRecordFromDiscriminatorValue';
import {AttendanceRecord, BaseCollectionPaginationCountResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the attendanceRecords property of the microsoft.graph.meetingAttendanceReport entity. */
export class AttendanceRecordCollectionResponse extends BaseCollectionPaginationCountResponse implements Parsable {
    /** The value property */
    private _value?: AttendanceRecord[] | undefined;
    /**
     * Instantiates a new AttendanceRecordCollectionResponse and sets the default values.
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
            "value": n => { this.value = n.getCollectionOfObjectValues<AttendanceRecord>(createAttendanceRecordFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<AttendanceRecord>("value", this.value);
    };
    /**
     * Gets the value property value. The value property
     * @returns a attendanceRecord
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. The value property
     * @param value Value to set for the value property.
     */
    public set value(value: AttendanceRecord[] | undefined) {
        this._value = value;
    };
}
