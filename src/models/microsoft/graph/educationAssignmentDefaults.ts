import {EducationAddedStudentAction} from './educationAddedStudentAction';
import {Entity} from './entity';
import {SerializationWriter, ParseNode, Parsable} from '@microsoft/kiota-abstractions';

export class EducationAssignmentDefaults extends Entity implements Parsable {
    /** Class-level default behavior for handling students who are added after the assignment is published. Possible values are: none, assignIfOpen.  */
    private _addedStudentAction?: EducationAddedStudentAction | undefined;
    /** Class-level default value for due time field. Default value is 23:59:00.  */
    private _dueTime?: string | undefined;
    /** Default Teams channel to which notifications will be sent. Default value is null.  */
    private _notificationChannelUrl?: string | undefined;
    /**
     * Instantiates a new educationAssignmentDefaults and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the addedStudentAction property value. Class-level default behavior for handling students who are added after the assignment is published. Possible values are: none, assignIfOpen.
     * @returns a educationAddedStudentAction
     */
    public get addedStudentAction() {
        return this._addedStudentAction;
    };
    /**
     * Gets the dueTime property value. Class-level default value for due time field. Default value is 23:59:00.
     * @returns a string
     */
    public get dueTime() {
        return this._dueTime;
    };
    /**
     * Gets the notificationChannelUrl property value. Default Teams channel to which notifications will be sent. Default value is null.
     * @returns a string
     */
    public get notificationChannelUrl() {
        return this._notificationChannelUrl;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["addedStudentAction", (o, n) => { (o as unknown as EducationAssignmentDefaults).addedStudentAction = n.getEnumValue<EducationAddedStudentAction>(EducationAddedStudentAction); }],
            ["dueTime", (o, n) => { (o as unknown as EducationAssignmentDefaults).dueTime = n.getStringValue(); }],
            ["notificationChannelUrl", (o, n) => { (o as unknown as EducationAssignmentDefaults).notificationChannelUrl = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeEnumValue<EducationAddedStudentAction>("addedStudentAction", this.addedStudentAction);
        writer.writeStringValue("dueTime", this.dueTime);
        writer.writeStringValue("notificationChannelUrl", this.notificationChannelUrl);
    };
    /**
     * Sets the addedStudentAction property value. Class-level default behavior for handling students who are added after the assignment is published. Possible values are: none, assignIfOpen.
     * @param value Value to set for the addedStudentAction property.
     */
    public set addedStudentAction(value: EducationAddedStudentAction | undefined) {
        this._addedStudentAction = value;
    };
    /**
     * Sets the dueTime property value. Class-level default value for due time field. Default value is 23:59:00.
     * @param value Value to set for the dueTime property.
     */
    public set dueTime(value: string | undefined) {
        this._dueTime = value;
    };
    /**
     * Sets the notificationChannelUrl property value. Default Teams channel to which notifications will be sent. Default value is null.
     * @param value Value to set for the notificationChannelUrl property.
     */
    public set notificationChannelUrl(value: string | undefined) {
        this._notificationChannelUrl = value;
    };
}
