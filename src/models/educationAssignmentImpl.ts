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
export class EducationAssignmentImpl extends EntityImpl implements EducationAssignment {
    /** Optional field to control the assignment behavior for students who are added after the assignment is published. If not specified, defaults to none value. Currently supports only two values: none or assignIfOpen. */
    private _addedStudentAction?: EducationAddedStudentAction | undefined;
    /** Optional field to control the assignment behavior  for adding assignments to students' and teachers' calendars when the assignment is published. The possible values are: none, studentsAndPublisher, studentsAndTeamOwners, unknownFutureValue, and studentsOnly. Note that you must use the Prefer: include-unknown-enum-members request header to get the following value(s) in this evolvable enum: studentsOnly. The default value is none. */
    private _addToCalendarAction?: EducationAddToCalendarOptions | undefined;
    /** Identifies whether students can submit after the due date. If this property is not specified during create, it defaults to true. */
    private _allowLateSubmissions?: boolean | undefined;
    /** Identifies whether students can add their own resources to a submission or if they can only modify resources added by the teacher. */
    private _allowStudentsToAddResourcesToSubmission?: boolean | undefined;
    /** The date when the assignment should become active.  If in the future, the assignment is not shown to the student until this date.  The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    private _assignDateTime?: Date | undefined;
    /** The moment that the assignment was published to students and the assignment shows up on the students timeline.  The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    private _assignedDateTime?: Date | undefined;
    /** Which users, or whole class should receive a submission object once the assignment is published. */
    private _assignTo?: EducationAssignmentRecipient | undefined;
    /** When set, enables users to easily find assignments of a given type.  Read-only. Nullable. */
    private _categories?: EducationCategory[] | undefined;
    /** Class which this assignment belongs. */
    private _classId?: string | undefined;
    /** Date when the assignment will be closed for submissions. This is an optional field that can be null if the assignment does not allowLateSubmissions or when the closeDateTime is the same as the dueDateTime. But if specified, then the closeDateTime must be greater than or equal to the dueDateTime. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    private _closeDateTime?: Date | undefined;
    /** Who created the assignment. */
    private _createdBy?: IdentitySet | undefined;
    /** Moment when the assignment was created.  The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    private _createdDateTime?: Date | undefined;
    /** Name of the assignment. */
    private _displayName?: string | undefined;
    /** Date when the students assignment is due.  The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    private _dueDateTime?: Date | undefined;
    /** How the assignment will be graded. */
    private _grading?: EducationAssignmentGradeType | undefined;
    /** Instructions for the assignment.  This along with the display name tell the student what to do. */
    private _instructions?: EducationItemBody | undefined;
    /** Who last modified the assignment. */
    private _lastModifiedBy?: IdentitySet | undefined;
    /** Moment when the assignment was last modified.  The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    private _lastModifiedDateTime?: Date | undefined;
    /** Optional field to specify the URL of the channel to post the assignment publish notification. If not specified or null, defaults to the General channel. This field only applies to assignments where the assignTo value is educationAssignmentClassRecipient. Updating the notificationChannelUrl is not allowed after the assignment has been published. */
    private _notificationChannelUrl?: string | undefined;
    /** Learning objects that are associated with this assignment.  Only teachers can modify this list. Nullable. */
    private _resources?: EducationAssignmentResource[] | undefined;
    /** Folder URL where all the file resources for this assignment are stored. */
    private _resourcesFolderUrl?: string | undefined;
    /** When set, the grading rubric attached to this assignment. */
    private _rubric?: EducationRubric | undefined;
    /** Status of the Assignment.  You can not PATCH this value.  Possible values are: draft, scheduled, published, assigned. */
    private _status?: EducationAssignmentStatus | undefined;
    /** Once published, there is a submission object for each student representing their work and grade.  Read-only. Nullable. */
    private _submissions?: EducationSubmission[] | undefined;
    /** The deep link URL for the given assignment. */
    private _webUrl?: string | undefined;
    /**
     * Gets the addedStudentAction property value. Optional field to control the assignment behavior for students who are added after the assignment is published. If not specified, defaults to none value. Currently supports only two values: none or assignIfOpen.
     * @returns a educationAddedStudentAction
     */
    public get addedStudentAction() {
        return this._addedStudentAction;
    };
    /**
     * Sets the addedStudentAction property value. Optional field to control the assignment behavior for students who are added after the assignment is published. If not specified, defaults to none value. Currently supports only two values: none or assignIfOpen.
     * @param value Value to set for the addedStudentAction property.
     */
    public set addedStudentAction(value: EducationAddedStudentAction | undefined) {
        if(value) {
            this._addedStudentAction = value;
        }
    };
    /**
     * Gets the addToCalendarAction property value. Optional field to control the assignment behavior  for adding assignments to students' and teachers' calendars when the assignment is published. The possible values are: none, studentsAndPublisher, studentsAndTeamOwners, unknownFutureValue, and studentsOnly. Note that you must use the Prefer: include-unknown-enum-members request header to get the following value(s) in this evolvable enum: studentsOnly. The default value is none.
     * @returns a educationAddToCalendarOptions
     */
    public get addToCalendarAction() {
        return this._addToCalendarAction;
    };
    /**
     * Sets the addToCalendarAction property value. Optional field to control the assignment behavior  for adding assignments to students' and teachers' calendars when the assignment is published. The possible values are: none, studentsAndPublisher, studentsAndTeamOwners, unknownFutureValue, and studentsOnly. Note that you must use the Prefer: include-unknown-enum-members request header to get the following value(s) in this evolvable enum: studentsOnly. The default value is none.
     * @param value Value to set for the addToCalendarAction property.
     */
    public set addToCalendarAction(value: EducationAddToCalendarOptions | undefined) {
        if(value) {
            this._addToCalendarAction = value;
        }
    };
    /**
     * Gets the allowLateSubmissions property value. Identifies whether students can submit after the due date. If this property is not specified during create, it defaults to true.
     * @returns a boolean
     */
    public get allowLateSubmissions() {
        return this._allowLateSubmissions;
    };
    /**
     * Sets the allowLateSubmissions property value. Identifies whether students can submit after the due date. If this property is not specified during create, it defaults to true.
     * @param value Value to set for the allowLateSubmissions property.
     */
    public set allowLateSubmissions(value: boolean | undefined) {
        if(value) {
            this._allowLateSubmissions = value;
        }
    };
    /**
     * Gets the allowStudentsToAddResourcesToSubmission property value. Identifies whether students can add their own resources to a submission or if they can only modify resources added by the teacher.
     * @returns a boolean
     */
    public get allowStudentsToAddResourcesToSubmission() {
        return this._allowStudentsToAddResourcesToSubmission;
    };
    /**
     * Sets the allowStudentsToAddResourcesToSubmission property value. Identifies whether students can add their own resources to a submission or if they can only modify resources added by the teacher.
     * @param value Value to set for the allowStudentsToAddResourcesToSubmission property.
     */
    public set allowStudentsToAddResourcesToSubmission(value: boolean | undefined) {
        if(value) {
            this._allowStudentsToAddResourcesToSubmission = value;
        }
    };
    /**
     * Gets the assignDateTime property value. The date when the assignment should become active.  If in the future, the assignment is not shown to the student until this date.  The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @returns a Date
     */
    public get assignDateTime() {
        return this._assignDateTime;
    };
    /**
     * Sets the assignDateTime property value. The date when the assignment should become active.  If in the future, the assignment is not shown to the student until this date.  The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @param value Value to set for the assignDateTime property.
     */
    public set assignDateTime(value: Date | undefined) {
        if(value) {
            this._assignDateTime = value;
        }
    };
    /**
     * Gets the assignedDateTime property value. The moment that the assignment was published to students and the assignment shows up on the students timeline.  The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @returns a Date
     */
    public get assignedDateTime() {
        return this._assignedDateTime;
    };
    /**
     * Sets the assignedDateTime property value. The moment that the assignment was published to students and the assignment shows up on the students timeline.  The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @param value Value to set for the assignedDateTime property.
     */
    public set assignedDateTime(value: Date | undefined) {
        if(value) {
            this._assignedDateTime = value;
        }
    };
    /**
     * Gets the assignTo property value. Which users, or whole class should receive a submission object once the assignment is published.
     * @returns a EducationAssignmentRecipientInterface
     */
    public get assignTo() {
        return this._assignTo;
    };
    /**
     * Sets the assignTo property value. Which users, or whole class should receive a submission object once the assignment is published.
     * @param value Value to set for the assignTo property.
     */
    public set assignTo(value: EducationAssignmentRecipient | undefined) {
        if(value) {
            this._assignTo = value instanceof EducationAssignmentRecipientImpl? value : new EducationAssignmentRecipientImpl(value);
        }
    };
    /**
     * Gets the categories property value. When set, enables users to easily find assignments of a given type.  Read-only. Nullable.
     * @returns a EducationCategoryInterface
     */
    public get categories() {
        return this._categories;
    };
    /**
     * Sets the categories property value. When set, enables users to easily find assignments of a given type.  Read-only. Nullable.
     * @param value Value to set for the categories property.
     */
    public set categories(value: EducationCategory[] | undefined) {
        if(value) {
            const categoriesArrValue: EducationCategoryImpl[] = [];
            this.categories?.forEach(element => {
                categoriesArrValue.push((element instanceof EducationCategoryImpl? element:new EducationCategoryImpl(element)));
            });
            this._categories = categoriesArrValue;
        }
    };
    /**
     * Gets the classId property value. Class which this assignment belongs.
     * @returns a string
     */
    public get classId() {
        return this._classId;
    };
    /**
     * Sets the classId property value. Class which this assignment belongs.
     * @param value Value to set for the classId property.
     */
    public set classId(value: string | undefined) {
        if(value) {
            this._classId = value;
        }
    };
    /**
     * Gets the closeDateTime property value. Date when the assignment will be closed for submissions. This is an optional field that can be null if the assignment does not allowLateSubmissions or when the closeDateTime is the same as the dueDateTime. But if specified, then the closeDateTime must be greater than or equal to the dueDateTime. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @returns a Date
     */
    public get closeDateTime() {
        return this._closeDateTime;
    };
    /**
     * Sets the closeDateTime property value. Date when the assignment will be closed for submissions. This is an optional field that can be null if the assignment does not allowLateSubmissions or when the closeDateTime is the same as the dueDateTime. But if specified, then the closeDateTime must be greater than or equal to the dueDateTime. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @param value Value to set for the closeDateTime property.
     */
    public set closeDateTime(value: Date | undefined) {
        if(value) {
            this._closeDateTime = value;
        }
    };
    /**
     * Instantiates a new educationAssignment and sets the default values.
     * @param educationAssignmentParameterValue 
     */
    public constructor(educationAssignmentParameterValue?: EducationAssignment | undefined) {
        super(educationAssignmentParameterValue);
        this._addedStudentAction = educationAssignmentParameterValue?.addedStudentAction;
        this._addToCalendarAction = educationAssignmentParameterValue?.addToCalendarAction;
        this._allowLateSubmissions = educationAssignmentParameterValue?.allowLateSubmissions;
        this._allowStudentsToAddResourcesToSubmission = educationAssignmentParameterValue?.allowStudentsToAddResourcesToSubmission;
        this._assignDateTime = educationAssignmentParameterValue?.assignDateTime;
        this._assignedDateTime = educationAssignmentParameterValue?.assignedDateTime;
        this._assignTo = educationAssignmentParameterValue?.assignTo;
        this._categories = educationAssignmentParameterValue?.categories;
        this._classId = educationAssignmentParameterValue?.classId;
        this._closeDateTime = educationAssignmentParameterValue?.closeDateTime;
        this._createdBy = educationAssignmentParameterValue?.createdBy;
        this._createdDateTime = educationAssignmentParameterValue?.createdDateTime;
        this._displayName = educationAssignmentParameterValue?.displayName;
        this._dueDateTime = educationAssignmentParameterValue?.dueDateTime;
        this._grading = educationAssignmentParameterValue?.grading;
        this._instructions = educationAssignmentParameterValue?.instructions;
        this._lastModifiedBy = educationAssignmentParameterValue?.lastModifiedBy;
        this._lastModifiedDateTime = educationAssignmentParameterValue?.lastModifiedDateTime;
        this._notificationChannelUrl = educationAssignmentParameterValue?.notificationChannelUrl;
        this._resources = educationAssignmentParameterValue?.resources;
        this._resourcesFolderUrl = educationAssignmentParameterValue?.resourcesFolderUrl;
        this._rubric = educationAssignmentParameterValue?.rubric;
        this._status = educationAssignmentParameterValue?.status;
        this._submissions = educationAssignmentParameterValue?.submissions;
        this._webUrl = educationAssignmentParameterValue?.webUrl;
    };
    /**
     * Gets the createdBy property value. Who created the assignment.
     * @returns a IdentitySetInterface
     */
    public get createdBy() {
        return this._createdBy;
    };
    /**
     * Sets the createdBy property value. Who created the assignment.
     * @param value Value to set for the createdBy property.
     */
    public set createdBy(value: IdentitySet | undefined) {
        if(value) {
            this._createdBy = value instanceof IdentitySetImpl? value : new IdentitySetImpl(value);
        }
    };
    /**
     * Gets the createdDateTime property value. Moment when the assignment was created.  The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. Moment when the assignment was created.  The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        if(value) {
            this._createdDateTime = value;
        }
    };
    /**
     * Gets the displayName property value. Name of the assignment.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Name of the assignment.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        if(value) {
            this._displayName = value;
        }
    };
    /**
     * Gets the dueDateTime property value. Date when the students assignment is due.  The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @returns a Date
     */
    public get dueDateTime() {
        return this._dueDateTime;
    };
    /**
     * Sets the dueDateTime property value. Date when the students assignment is due.  The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @param value Value to set for the dueDateTime property.
     */
    public set dueDateTime(value: Date | undefined) {
        if(value) {
            this._dueDateTime = value;
        }
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
     * Gets the grading property value. How the assignment will be graded.
     * @returns a EducationAssignmentGradeTypeInterface
     */
    public get grading() {
        return this._grading;
    };
    /**
     * Sets the grading property value. How the assignment will be graded.
     * @param value Value to set for the grading property.
     */
    public set grading(value: EducationAssignmentGradeType | undefined) {
        if(value) {
            this._grading = value instanceof EducationAssignmentGradeTypeImpl? value : new EducationAssignmentGradeTypeImpl(value);
        }
    };
    /**
     * Gets the instructions property value. Instructions for the assignment.  This along with the display name tell the student what to do.
     * @returns a EducationItemBodyInterface
     */
    public get instructions() {
        return this._instructions;
    };
    /**
     * Sets the instructions property value. Instructions for the assignment.  This along with the display name tell the student what to do.
     * @param value Value to set for the instructions property.
     */
    public set instructions(value: EducationItemBody | undefined) {
        if(value) {
            this._instructions = value instanceof EducationItemBodyImpl? value : new EducationItemBodyImpl(value);
        }
    };
    /**
     * Gets the lastModifiedBy property value. Who last modified the assignment.
     * @returns a IdentitySetInterface
     */
    public get lastModifiedBy() {
        return this._lastModifiedBy;
    };
    /**
     * Sets the lastModifiedBy property value. Who last modified the assignment.
     * @param value Value to set for the lastModifiedBy property.
     */
    public set lastModifiedBy(value: IdentitySet | undefined) {
        if(value) {
            this._lastModifiedBy = value instanceof IdentitySetImpl? value : new IdentitySetImpl(value);
        }
    };
    /**
     * Gets the lastModifiedDateTime property value. Moment when the assignment was last modified.  The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @returns a Date
     */
    public get lastModifiedDateTime() {
        return this._lastModifiedDateTime;
    };
    /**
     * Sets the lastModifiedDateTime property value. Moment when the assignment was last modified.  The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @param value Value to set for the lastModifiedDateTime property.
     */
    public set lastModifiedDateTime(value: Date | undefined) {
        if(value) {
            this._lastModifiedDateTime = value;
        }
    };
    /**
     * Gets the notificationChannelUrl property value. Optional field to specify the URL of the channel to post the assignment publish notification. If not specified or null, defaults to the General channel. This field only applies to assignments where the assignTo value is educationAssignmentClassRecipient. Updating the notificationChannelUrl is not allowed after the assignment has been published.
     * @returns a string
     */
    public get notificationChannelUrl() {
        return this._notificationChannelUrl;
    };
    /**
     * Sets the notificationChannelUrl property value. Optional field to specify the URL of the channel to post the assignment publish notification. If not specified or null, defaults to the General channel. This field only applies to assignments where the assignTo value is educationAssignmentClassRecipient. Updating the notificationChannelUrl is not allowed after the assignment has been published.
     * @param value Value to set for the notificationChannelUrl property.
     */
    public set notificationChannelUrl(value: string | undefined) {
        if(value) {
            this._notificationChannelUrl = value;
        }
    };
    /**
     * Gets the resources property value. Learning objects that are associated with this assignment.  Only teachers can modify this list. Nullable.
     * @returns a EducationAssignmentResourceInterface
     */
    public get resources() {
        return this._resources;
    };
    /**
     * Sets the resources property value. Learning objects that are associated with this assignment.  Only teachers can modify this list. Nullable.
     * @param value Value to set for the resources property.
     */
    public set resources(value: EducationAssignmentResource[] | undefined) {
        if(value) {
            const resourcesArrValue: EducationAssignmentResourceImpl[] = [];
            this.resources?.forEach(element => {
                resourcesArrValue.push((element instanceof EducationAssignmentResourceImpl? element:new EducationAssignmentResourceImpl(element)));
            });
            this._resources = resourcesArrValue;
        }
    };
    /**
     * Gets the resourcesFolderUrl property value. Folder URL where all the file resources for this assignment are stored.
     * @returns a string
     */
    public get resourcesFolderUrl() {
        return this._resourcesFolderUrl;
    };
    /**
     * Sets the resourcesFolderUrl property value. Folder URL where all the file resources for this assignment are stored.
     * @param value Value to set for the resourcesFolderUrl property.
     */
    public set resourcesFolderUrl(value: string | undefined) {
        if(value) {
            this._resourcesFolderUrl = value;
        }
    };
    /**
     * Gets the rubric property value. When set, the grading rubric attached to this assignment.
     * @returns a EducationRubricInterface
     */
    public get rubric() {
        return this._rubric;
    };
    /**
     * Sets the rubric property value. When set, the grading rubric attached to this assignment.
     * @param value Value to set for the rubric property.
     */
    public set rubric(value: EducationRubric | undefined) {
        if(value) {
            this._rubric = value instanceof EducationRubricImpl? value : new EducationRubricImpl(value);
        }
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
            writer.writeObjectValue<EducationAssignmentRecipientImpl>("assignTo", (!this.assignTo || this.assignTo instanceof EducationAssignmentRecipientImpl? this.assignTo : new EducationAssignmentRecipientImpl(this.assignTo)));
        }
        if(this.categories && this.categories.length != 0){        const categoriesArrValue: EducationCategoryImpl[] = [];
        this.categories?.forEach(element => {
            categoriesArrValue.push((element instanceof EducationCategoryImpl? element:new EducationCategoryImpl(element)));
        });
            writer.writeCollectionOfObjectValues<EducationCategoryImpl>("categories", categoriesArrValue);
        }
        if(this.classId){
            writer.writeStringValue("classId", this.classId);
        }
        if(this.closeDateTime){
            writer.writeDateValue("closeDateTime", this.closeDateTime);
        }
        if(this.createdBy){
            writer.writeObjectValue<IdentitySetImpl>("createdBy", (!this.createdBy || this.createdBy instanceof IdentitySetImpl? this.createdBy : new IdentitySetImpl(this.createdBy)));
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
            writer.writeObjectValue<EducationAssignmentGradeTypeImpl>("grading", (!this.grading || this.grading instanceof EducationAssignmentGradeTypeImpl? this.grading : new EducationAssignmentGradeTypeImpl(this.grading)));
        }
        if(this.instructions){
            writer.writeObjectValue<EducationItemBodyImpl>("instructions", (!this.instructions || this.instructions instanceof EducationItemBodyImpl? this.instructions : new EducationItemBodyImpl(this.instructions)));
        }
        if(this.lastModifiedBy){
            writer.writeObjectValue<IdentitySetImpl>("lastModifiedBy", (!this.lastModifiedBy || this.lastModifiedBy instanceof IdentitySetImpl? this.lastModifiedBy : new IdentitySetImpl(this.lastModifiedBy)));
        }
        if(this.lastModifiedDateTime){
            writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        }
        if(this.notificationChannelUrl){
            writer.writeStringValue("notificationChannelUrl", this.notificationChannelUrl);
        }
        if(this.resources && this.resources.length != 0){        const resourcesArrValue: EducationAssignmentResourceImpl[] = [];
        this.resources?.forEach(element => {
            resourcesArrValue.push((element instanceof EducationAssignmentResourceImpl? element:new EducationAssignmentResourceImpl(element)));
        });
            writer.writeCollectionOfObjectValues<EducationAssignmentResourceImpl>("resources", resourcesArrValue);
        }
        if(this.resourcesFolderUrl){
            writer.writeStringValue("resourcesFolderUrl", this.resourcesFolderUrl);
        }
        if(this.rubric){
            writer.writeObjectValue<EducationRubricImpl>("rubric", (!this.rubric || this.rubric instanceof EducationRubricImpl? this.rubric : new EducationRubricImpl(this.rubric)));
        }
        if(this.status){
            writer.writeEnumValue<EducationAssignmentStatus>("status", this.status);
        }
        if(this.submissions && this.submissions.length != 0){        const submissionsArrValue: EducationSubmissionImpl[] = [];
        this.submissions?.forEach(element => {
            submissionsArrValue.push((element instanceof EducationSubmissionImpl? element:new EducationSubmissionImpl(element)));
        });
            writer.writeCollectionOfObjectValues<EducationSubmissionImpl>("submissions", submissionsArrValue);
        }
        if(this.webUrl){
            writer.writeStringValue("webUrl", this.webUrl);
        }
    };
    /**
     * Gets the status property value. Status of the Assignment.  You can not PATCH this value.  Possible values are: draft, scheduled, published, assigned.
     * @returns a educationAssignmentStatus
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. Status of the Assignment.  You can not PATCH this value.  Possible values are: draft, scheduled, published, assigned.
     * @param value Value to set for the status property.
     */
    public set status(value: EducationAssignmentStatus | undefined) {
        if(value) {
            this._status = value;
        }
    };
    /**
     * Gets the submissions property value. Once published, there is a submission object for each student representing their work and grade.  Read-only. Nullable.
     * @returns a EducationSubmissionInterface
     */
    public get submissions() {
        return this._submissions;
    };
    /**
     * Sets the submissions property value. Once published, there is a submission object for each student representing their work and grade.  Read-only. Nullable.
     * @param value Value to set for the submissions property.
     */
    public set submissions(value: EducationSubmission[] | undefined) {
        if(value) {
            const submissionsArrValue: EducationSubmissionImpl[] = [];
            this.submissions?.forEach(element => {
                submissionsArrValue.push((element instanceof EducationSubmissionImpl? element:new EducationSubmissionImpl(element)));
            });
            this._submissions = submissionsArrValue;
        }
    };
    /**
     * Gets the webUrl property value. The deep link URL for the given assignment.
     * @returns a string
     */
    public get webUrl() {
        return this._webUrl;
    };
    /**
     * Sets the webUrl property value. The deep link URL for the given assignment.
     * @param value Value to set for the webUrl property.
     */
    public set webUrl(value: string | undefined) {
        if(value) {
            this._webUrl = value;
        }
    };
}
