import {EducationAddedStudentAction} from './educationAddedStudentAction';
import {EducationAddToCalendarOptions} from './educationAddToCalendarOptions';
import {EducationAssignmentDefaults} from './educationAssignmentDefaults';
import {EntityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter, TimeOnly} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the educationRoot singleton. */
export class EducationAssignmentDefaultsImpl extends EntityImpl implements EducationAssignmentDefaults, Parsable {
    /** Class-level default behavior for handling students who are added after the assignment is published. Possible values are: none, assignIfOpen. */
    public addedStudentAction?: EducationAddedStudentAction | undefined;
    /** Optional field to control adding assignments to students' and teachers' calendars when the assignment is published. The possible values are: none, studentsAndPublisher, studentsAndTeamOwners, unknownFutureValue, and studentsOnly. Note that you must use the Prefer: include-unknown-enum-members request header to get the following value(s) in this evolvable enum: studentsOnly. The default value is none. */
    public addToCalendarAction?: EducationAddToCalendarOptions | undefined;
    /** Class-level default value for due time field. Default value is 23:59:00. */
    public dueTime?: TimeOnly | undefined;
    /** Default Teams channel to which notifications will be sent. Default value is null. */
    public notificationChannelUrl?: string | undefined;
    /**
     * Instantiates a new educationAssignmentDefaults and sets the default values.
     * @param educationAssignmentDefaultsParameterValue 
     */
    public constructor(educationAssignmentDefaultsParameterValue?: EducationAssignmentDefaults | undefined) {
        super();
        this.addedStudentAction = educationAssignmentDefaultsParameterValue?.addedStudentAction ;
        this.addToCalendarAction = educationAssignmentDefaultsParameterValue?.addToCalendarAction ;
        this.dueTime = educationAssignmentDefaultsParameterValue?.dueTime ;
        this.notificationChannelUrl = educationAssignmentDefaultsParameterValue?.notificationChannelUrl ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "addedStudentAction": n => { this.addedStudentAction = n.getEnumValue<EducationAddedStudentAction>(EducationAddedStudentAction); },
            "addToCalendarAction": n => { this.addToCalendarAction = n.getEnumValue<EducationAddToCalendarOptions>(EducationAddToCalendarOptions); },
            "dueTime": n => { this.dueTime = n.getTimeOnlyValue(); },
            "notificationChannelUrl": n => { this.notificationChannelUrl = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.addedStudentAction){
        writer.writeEnumValue<EducationAddedStudentAction>("addedStudentAction", this.addedStudentAction);
        }
        if(this.addToCalendarAction){
        writer.writeEnumValue<EducationAddToCalendarOptions>("addToCalendarAction", this.addToCalendarAction);
        }
        if(this.dueTime){
        writer.writeTimeOnlyValue("dueTime", this.dueTime);
        }
        if(this.notificationChannelUrl){
        writer.writeStringValue("notificationChannelUrl", this.notificationChannelUrl);
        }
    };
}
