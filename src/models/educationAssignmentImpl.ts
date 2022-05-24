import {createEducationAssignmentGradeTypeFromDiscriminatorValue} from './createEducationAssignmentGradeTypeFromDiscriminatorValue';
import {createEducationAssignmentRecipientFromDiscriminatorValue} from './createEducationAssignmentRecipientFromDiscriminatorValue';
import {createEducationAssignmentResourceFromDiscriminatorValue} from './createEducationAssignmentResourceFromDiscriminatorValue';
import {createEducationCategoryFromDiscriminatorValue} from './createEducationCategoryFromDiscriminatorValue';
import {createEducationItemBodyFromDiscriminatorValue} from './createEducationItemBodyFromDiscriminatorValue';
import {createEducationRubricFromDiscriminatorValue} from './createEducationRubricFromDiscriminatorValue';
import {createEducationSubmissionFromDiscriminatorValue} from './createEducationSubmissionFromDiscriminatorValue';
import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {EducationAddedStudentAction} from './educationAddedStudentAction';
import {EducationAddToCalendarOptions} from './educationAddToCalendarOptions';
import {EducationAssignment} from './educationAssignment';
import {EducationAssignmentGradeType} from './educationAssignmentGradeType';
import {EducationAssignmentRecipient} from './educationAssignmentRecipient';
import {EducationAssignmentResource} from './educationAssignmentResource';
import {EducationAssignmentStatus} from './educationAssignmentStatus';
import {EducationCategory} from './educationCategory';
import {EducationItemBody} from './educationItemBody';
import {EducationRubric} from './educationRubric';
import {EducationSubmission} from './educationSubmission';
import {IdentitySet} from './identitySet';
import {EducationAssignmentGradeTypeImpl, EducationAssignmentRecipientImpl, EducationAssignmentResourceImpl, EducationCategoryImpl, EducationItemBodyImpl, EducationRubricImpl, EducationSubmissionImpl, EntityImpl, IdentitySetImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the educationRoot singleton. */
export class EducationAssignmentImpl extends EntityImpl implements EducationAssignment, Parsable {
    /** Optional field to control the assignment behavior for students who are added after the assignment is published. If not specified, defaults to none value. Currently supports only two values: none or assignIfOpen. */
    public addedStudentAction?: EducationAddedStudentAction | undefined;
    /** Optional field to control the assignment behavior  for adding assignments to students' and teachers' calendars when the assignment is published. The possible values are: none, studentsAndPublisher, studentsAndTeamOwners, unknownFutureValue, and studentsOnly. Note that you must use the Prefer: include-unknown-enum-members request header to get the following value(s) in this evolvable enum: studentsOnly. The default value is none. */
    public addToCalendarAction?: EducationAddToCalendarOptions | undefined;
    /** Identifies whether students can submit after the due date. If this property is not specified during create, it defaults to true. */
    public allowLateSubmissions?: boolean | undefined;
    /** Identifies whether students can add their own resources to a submission or if they can only modify resources added by the teacher. */
    public allowStudentsToAddResourcesToSubmission?: boolean | undefined;
    /** The date when the assignment should become active.  If in the future, the assignment is not shown to the student until this date.  The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    public assignDateTime?: Date | undefined;
    /** The moment that the assignment was published to students and the assignment shows up on the students timeline.  The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    public assignedDateTime?: Date | undefined;
    /** Which users, or whole class should receive a submission object once the assignment is published. */
    public assignTo?: EducationAssignmentRecipient | undefined;
    /** When set, enables users to easily find assignments of a given type.  Read-only. Nullable. */
    public categories?: EducationCategory[] | undefined;
    /** Class which this assignment belongs. */
    public classId?: string | undefined;
    /** Date when the assignment will be closed for submissions. This is an optional field that can be null if the assignment does not allowLateSubmissions or when the closeDateTime is the same as the dueDateTime. But if specified, then the closeDateTime must be greater than or equal to the dueDateTime. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    public closeDateTime?: Date | undefined;
    /** Who created the assignment. */
    public createdBy?: IdentitySet | undefined;
    /** Moment when the assignment was created.  The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    public createdDateTime?: Date | undefined;
    /** Name of the assignment. */
    public displayName?: string | undefined;
    /** Date when the students assignment is due.  The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    public dueDateTime?: Date | undefined;
    /** How the assignment will be graded. */
    public grading?: EducationAssignmentGradeType | undefined;
    /** Instructions for the assignment.  This along with the display name tell the student what to do. */
    public instructions?: EducationItemBody | undefined;
    /** Who last modified the assignment. */
    public lastModifiedBy?: IdentitySet | undefined;
    /** Moment when the assignment was last modified.  The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    public lastModifiedDateTime?: Date | undefined;
    /** Optional field to specify the URL of the channel to post the assignment publish notification. If not specified or null, defaults to the General channel. This field only applies to assignments where the assignTo value is educationAssignmentClassRecipient. Updating the notificationChannelUrl is not allowed after the assignment has been published. */
    public notificationChannelUrl?: string | undefined;
    /** Learning objects that are associated with this assignment.  Only teachers can modify this list. Nullable. */
    public resources?: EducationAssignmentResource[] | undefined;
    /** Folder URL where all the file resources for this assignment are stored. */
    public resourcesFolderUrl?: string | undefined;
    /** When set, the grading rubric attached to this assignment. */
    public rubric?: EducationRubric | undefined;
    /** Status of the Assignment.  You can not PATCH this value.  Possible values are: draft, scheduled, published, assigned. */
    public status?: EducationAssignmentStatus | undefined;
    /** Once published, there is a submission object for each student representing their work and grade.  Read-only. Nullable. */
    public submissions?: EducationSubmission[] | undefined;
    /** The deep link URL for the given assignment. */
    public webUrl?: string | undefined;
    /**
     * Instantiates a new educationAssignment and sets the default values.
     * @param educationAssignmentParameterValue 
     */
    public constructor(educationAssignmentParameterValue?: EducationAssignment | undefined) {
        super();
        this.addedStudentAction = educationAssignmentParameterValue?.addedStudentAction ;
        this.addToCalendarAction = educationAssignmentParameterValue?.addToCalendarAction ;
        this.allowLateSubmissions = educationAssignmentParameterValue?.allowLateSubmissions ;
        this.allowStudentsToAddResourcesToSubmission = educationAssignmentParameterValue?.allowStudentsToAddResourcesToSubmission ;
        this.assignDateTime = educationAssignmentParameterValue?.assignDateTime ;
        this.assignedDateTime = educationAssignmentParameterValue?.assignedDateTime ;
        this.assignTo = educationAssignmentParameterValue?.assignTo ;
        this.categories = educationAssignmentParameterValue?.categories ;
        this.classId = educationAssignmentParameterValue?.classId ;
        this.closeDateTime = educationAssignmentParameterValue?.closeDateTime ;
        this.createdBy = educationAssignmentParameterValue?.createdBy ;
        this.createdDateTime = educationAssignmentParameterValue?.createdDateTime ;
        this.displayName = educationAssignmentParameterValue?.displayName ;
        this.dueDateTime = educationAssignmentParameterValue?.dueDateTime ;
        this.grading = educationAssignmentParameterValue?.grading ;
        this.instructions = educationAssignmentParameterValue?.instructions ;
        this.lastModifiedBy = educationAssignmentParameterValue?.lastModifiedBy ;
        this.lastModifiedDateTime = educationAssignmentParameterValue?.lastModifiedDateTime ;
        this.notificationChannelUrl = educationAssignmentParameterValue?.notificationChannelUrl ;
        this.resources = educationAssignmentParameterValue?.resources ;
        this.resourcesFolderUrl = educationAssignmentParameterValue?.resourcesFolderUrl ;
        this.rubric = educationAssignmentParameterValue?.rubric ;
        this.status = educationAssignmentParameterValue?.status ;
        this.submissions = educationAssignmentParameterValue?.submissions ;
        this.webUrl = educationAssignmentParameterValue?.webUrl ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "addedStudentAction": n => { this.addedStudentAction = n.getEnumValue<EducationAddedStudentAction>(EducationAddedStudentAction); },
            "addToCalendarAction": n => { this.addToCalendarAction = n.getEnumValue<EducationAddToCalendarOptions>(EducationAddToCalendarOptions); },
            "allowLateSubmissions": n => { this.allowLateSubmissions = n.getBooleanValue(); },
            "allowStudentsToAddResourcesToSubmission": n => { this.allowStudentsToAddResourcesToSubmission = n.getBooleanValue(); },
            "assignDateTime": n => { this.assignDateTime = n.getDateValue(); },
            "assignedDateTime": n => { this.assignedDateTime = n.getDateValue(); },
            "assignTo": n => { this.assignTo = n.getObjectValue<EducationAssignmentRecipientImpl>(createEducationAssignmentRecipientFromDiscriminatorValue); },
            "categories": n => { this.categories = n.getCollectionOfObjectValues<EducationCategoryImpl>(createEducationCategoryFromDiscriminatorValue); },
            "classId": n => { this.classId = n.getStringValue(); },
            "closeDateTime": n => { this.closeDateTime = n.getDateValue(); },
            "createdBy": n => { this.createdBy = n.getObjectValue<IdentitySetImpl>(createIdentitySetFromDiscriminatorValue); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "dueDateTime": n => { this.dueDateTime = n.getDateValue(); },
            "grading": n => { this.grading = n.getObjectValue<EducationAssignmentGradeTypeImpl>(createEducationAssignmentGradeTypeFromDiscriminatorValue); },
            "instructions": n => { this.instructions = n.getObjectValue<EducationItemBodyImpl>(createEducationItemBodyFromDiscriminatorValue); },
            "lastModifiedBy": n => { this.lastModifiedBy = n.getObjectValue<IdentitySetImpl>(createIdentitySetFromDiscriminatorValue); },
            "lastModifiedDateTime": n => { this.lastModifiedDateTime = n.getDateValue(); },
            "notificationChannelUrl": n => { this.notificationChannelUrl = n.getStringValue(); },
            "resources": n => { this.resources = n.getCollectionOfObjectValues<EducationAssignmentResourceImpl>(createEducationAssignmentResourceFromDiscriminatorValue); },
            "resourcesFolderUrl": n => { this.resourcesFolderUrl = n.getStringValue(); },
            "rubric": n => { this.rubric = n.getObjectValue<EducationRubricImpl>(createEducationRubricFromDiscriminatorValue); },
            "status": n => { this.status = n.getEnumValue<EducationAssignmentStatus>(EducationAssignmentStatus); },
            "submissions": n => { this.submissions = n.getCollectionOfObjectValues<EducationSubmissionImpl>(createEducationSubmissionFromDiscriminatorValue); },
            "webUrl": n => { this.webUrl = n.getStringValue(); },
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
        if(this.allowLateSubmissions){
        writer.writeBooleanValue("allowLateSubmissions", this.allowLateSubmissions);
        }
        if(this.allowStudentsToAddResourcesToSubmission){
        writer.writeBooleanValue("allowStudentsToAddResourcesToSubmission", this.allowStudentsToAddResourcesToSubmission);
        }
        if(this.assignDateTime){
        writer.writeDateValue("assignDateTime", this.assignDateTime);
        }
        if(this.assignedDateTime){
        writer.writeDateValue("assignedDateTime", this.assignedDateTime);
        }
        if(this.assignTo){
        writer.writeObjectValue<EducationAssignmentRecipientImpl>("assignTo", new EducationAssignmentRecipientImpl(this.assignTo));
        }
        if(this.categories && this.categories.length != 0){        const categoriesArrValue: EducationCategoryImpl[] = []; this.categories?.forEach(element => {categoriesArrValue.push(new EducationCategoryImpl(element));});
        writer.writeCollectionOfObjectValues<EducationCategoryImpl>("categories", categoriesArrValue);
        }
        if(this.classId){
        writer.writeStringValue("classId", this.classId);
        }
        if(this.closeDateTime){
        writer.writeDateValue("closeDateTime", this.closeDateTime);
        }
        if(this.createdBy){
        writer.writeObjectValue<IdentitySetImpl>("createdBy", new IdentitySetImpl(this.createdBy));
        }
        if(this.createdDateTime){
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.dueDateTime){
        writer.writeDateValue("dueDateTime", this.dueDateTime);
        }
        if(this.grading){
        writer.writeObjectValue<EducationAssignmentGradeTypeImpl>("grading", new EducationAssignmentGradeTypeImpl(this.grading));
        }
        if(this.instructions){
        writer.writeObjectValue<EducationItemBodyImpl>("instructions", new EducationItemBodyImpl(this.instructions));
        }
        if(this.lastModifiedBy){
        writer.writeObjectValue<IdentitySetImpl>("lastModifiedBy", new IdentitySetImpl(this.lastModifiedBy));
        }
        if(this.lastModifiedDateTime){
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        }
        if(this.notificationChannelUrl){
        writer.writeStringValue("notificationChannelUrl", this.notificationChannelUrl);
        }
        if(this.resources && this.resources.length != 0){        const resourcesArrValue: EducationAssignmentResourceImpl[] = []; this.resources?.forEach(element => {resourcesArrValue.push(new EducationAssignmentResourceImpl(element));});
        writer.writeCollectionOfObjectValues<EducationAssignmentResourceImpl>("resources", resourcesArrValue);
        }
        if(this.resourcesFolderUrl){
        writer.writeStringValue("resourcesFolderUrl", this.resourcesFolderUrl);
        }
        if(this.rubric){
        writer.writeObjectValue<EducationRubricImpl>("rubric", new EducationRubricImpl(this.rubric));
        }
        if(this.status){
        writer.writeEnumValue<EducationAssignmentStatus>("status", this.status);
        }
        if(this.submissions && this.submissions.length != 0){        const submissionsArrValue: EducationSubmissionImpl[] = []; this.submissions?.forEach(element => {submissionsArrValue.push(new EducationSubmissionImpl(element));});
        writer.writeCollectionOfObjectValues<EducationSubmissionImpl>("submissions", submissionsArrValue);
        }
        if(this.webUrl){
        writer.writeStringValue("webUrl", this.webUrl);
        }
    };
}
