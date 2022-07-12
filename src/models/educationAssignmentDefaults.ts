import {EducationAddedStudentAction} from './educationAddedStudentAction';
import {EducationAddToCalendarOptions} from './educationAddToCalendarOptions';
import {AdminMember1, Entity} from './index';
import {Parsable, ParseNode, SerializationWriter, TimeOnly} from '@microsoft/kiota-abstractions';

export class EducationAssignmentDefaults extends Entity implements Parsable {
    /** Class-level default behavior for handling students who are added after the assignment is published. Possible values are: none, assignIfOpen. */
    private _addedStudentAction?: EducationAddedStudentAction | AdminMember1 | undefined;
    /** Optional field to control adding assignments to students' and teachers' calendars when the assignment is published. The possible values are: none, studentsAndPublisher, studentsAndTeamOwners, unknownFutureValue, and studentsOnly. Note that you must use the Prefer: include-unknown-enum-members request header to get the following value(s) in this evolvable enum: studentsOnly. The default value is none. */
    private _addToCalendarAction?: EducationAddToCalendarOptions | AdminMember1 | undefined;
    /** Class-level default value for due time field. Default value is 23:59:00. */
    private _dueTime?: TimeOnly | undefined;
    /** Default Teams channel to which notifications will be sent. Default value is null. */
    private _notificationChannelUrl?: string | undefined;
    /**
     * Gets the addedStudentAction property value. Class-level default behavior for handling students who are added after the assignment is published. Possible values are: none, assignIfOpen.
     * @returns a admin
     */
    public get addedStudentAction() {
        return this._addedStudentAction;
    };
    /**
     * Sets the addedStudentAction property value. Class-level default behavior for handling students who are added after the assignment is published. Possible values are: none, assignIfOpen.
     * @param value Value to set for the addedStudentAction property.
     */
    public set addedStudentAction(value: EducationAddedStudentAction | AdminMember1 | undefined) {
        this._addedStudentAction = value;
    };
    /**
     * Gets the addToCalendarAction property value. Optional field to control adding assignments to students' and teachers' calendars when the assignment is published. The possible values are: none, studentsAndPublisher, studentsAndTeamOwners, unknownFutureValue, and studentsOnly. Note that you must use the Prefer: include-unknown-enum-members request header to get the following value(s) in this evolvable enum: studentsOnly. The default value is none.
     * @returns a admin
     */
    public get addToCalendarAction() {
        return this._addToCalendarAction;
    };
    /**
     * Sets the addToCalendarAction property value. Optional field to control adding assignments to students' and teachers' calendars when the assignment is published. The possible values are: none, studentsAndPublisher, studentsAndTeamOwners, unknownFutureValue, and studentsOnly. Note that you must use the Prefer: include-unknown-enum-members request header to get the following value(s) in this evolvable enum: studentsOnly. The default value is none.
     * @param value Value to set for the addToCalendarAction property.
     */
    public set addToCalendarAction(value: EducationAddToCalendarOptions | AdminMember1 | undefined) {
        this._addToCalendarAction = value;
    };
    /**
     * Instantiates a new EducationAssignmentDefaults and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the dueTime property value. Class-level default value for due time field. Default value is 23:59:00.
     * @returns a TimeOnly
     */
    public get dueTime() {
        return this._dueTime;
    };
    /**
     * Sets the dueTime property value. Class-level default value for due time field. Default value is 23:59:00.
     * @param value Value to set for the dueTime property.
     */
    public set dueTime(value: TimeOnly | undefined) {
        this._dueTime = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "addedStudentAction": n => { this.addedStudentAction = n.getObjectValue<EducationAddedStudentAction>(createEducationAddedStudentActionFromDiscriminatorValue); },
            "addToCalendarAction": n => { this.addToCalendarAction = n.getObjectValue<EducationAddToCalendarOptions>(createEducationAddToCalendarOptionsFromDiscriminatorValue); },
            "dueTime": n => { this.dueTime = n.getTimeOnlyValue(); },
            "notificationChannelUrl": n => { this.notificationChannelUrl = n.getStringValue(); },
        };
    };
    /**
     * Gets the notificationChannelUrl property value. Default Teams channel to which notifications will be sent. Default value is null.
     * @returns a string
     */
    public get notificationChannelUrl() {
        return this._notificationChannelUrl;
    };
    /**
     * Sets the notificationChannelUrl property value. Default Teams channel to which notifications will be sent. Default value is null.
     * @param value Value to set for the notificationChannelUrl property.
     */
    public set notificationChannelUrl(value: string | undefined) {
        this._notificationChannelUrl = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<EducationAddedStudentAction>("addedStudentAction", this.addedStudentAction);
        writer.writeObjectValue<EducationAddToCalendarOptions>("addToCalendarAction", this.addToCalendarAction);
        writer.writeTimeOnlyValue("dueTime", this.dueTime);
        writer.writeStringValue("notificationChannelUrl", this.notificationChannelUrl);
    };
}
