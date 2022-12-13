import {createEducationAssignmentDefaultsFromDiscriminatorValue} from './createEducationAssignmentDefaultsFromDiscriminatorValue';
import {createEducationAssignmentFromDiscriminatorValue} from './createEducationAssignmentFromDiscriminatorValue';
import {createEducationAssignmentSettingsFromDiscriminatorValue} from './createEducationAssignmentSettingsFromDiscriminatorValue';
import {createEducationCategoryFromDiscriminatorValue} from './createEducationCategoryFromDiscriminatorValue';
import {createEducationCourseFromDiscriminatorValue} from './createEducationCourseFromDiscriminatorValue';
import {createEducationSchoolFromDiscriminatorValue} from './createEducationSchoolFromDiscriminatorValue';
import {createEducationTermFromDiscriminatorValue} from './createEducationTermFromDiscriminatorValue';
import {createEducationUserFromDiscriminatorValue} from './createEducationUserFromDiscriminatorValue';
import {createGroupFromDiscriminatorValue} from './createGroupFromDiscriminatorValue';
import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {EducationExternalSource} from './educationExternalSource';
import {EducationAssignment, EducationAssignmentDefaults, EducationAssignmentSettings, EducationCategory, EducationCourse, EducationSchool, EducationTerm, EducationUser, Entity, Group, IdentitySet} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the educationRoot singleton.
 */
export class EducationClass extends Entity implements Parsable {
    /** All categories associated with this class. Nullable. */
    private _assignmentCategories?: EducationCategory[] | undefined;
    /** Specifies class-level defaults respected by new assignments created in the class. */
    private _assignmentDefaults?: EducationAssignmentDefaults | undefined;
    /** All assignments associated with this class. Nullable. */
    private _assignments?: EducationAssignment[] | undefined;
    /** Specifies class-level assignments settings. */
    private _assignmentSettings?: EducationAssignmentSettings | undefined;
    /** Class code used by the school to identify the class. */
    private _classCode?: string | undefined;
    /** The course property */
    private _course?: EducationCourse | undefined;
    /** Entity who created the class */
    private _createdBy?: IdentitySet | undefined;
    /** Description of the class. */
    private _description?: string | undefined;
    /** Name of the class. */
    private _displayName?: string | undefined;
    /** ID of the class from the syncing system. */
    private _externalId?: string | undefined;
    /** Name of the class in the syncing system. */
    private _externalName?: string | undefined;
    /** How this class was created. Possible values are: sis, manual. */
    private _externalSource?: EducationExternalSource | undefined;
    /** The name of the external source this resources was generated from. */
    private _externalSourceDetail?: string | undefined;
    /** Grade level of the class. */
    private _grade?: string | undefined;
    /** The underlying Microsoft 365 group object. */
    private _group?: Group | undefined;
    /** Mail name for sending email to all members, if this is enabled. */
    private _mailNickname?: string | undefined;
    /** All users in the class. Nullable. */
    private _members?: EducationUser[] | undefined;
    /** All schools that this class is associated with. Nullable. */
    private _schools?: EducationSchool[] | undefined;
    /** All teachers in the class. Nullable. */
    private _teachers?: EducationUser[] | undefined;
    /** Term for this class. */
    private _term?: EducationTerm | undefined;
    /**
     * Gets the assignmentCategories property value. All categories associated with this class. Nullable.
     * @returns a educationCategory
     */
    public get assignmentCategories() {
        return this._assignmentCategories;
    };
    /**
     * Sets the assignmentCategories property value. All categories associated with this class. Nullable.
     * @param value Value to set for the assignmentCategories property.
     */
    public set assignmentCategories(value: EducationCategory[] | undefined) {
        this._assignmentCategories = value;
    };
    /**
     * Gets the assignmentDefaults property value. Specifies class-level defaults respected by new assignments created in the class.
     * @returns a educationAssignmentDefaults
     */
    public get assignmentDefaults() {
        return this._assignmentDefaults;
    };
    /**
     * Sets the assignmentDefaults property value. Specifies class-level defaults respected by new assignments created in the class.
     * @param value Value to set for the assignmentDefaults property.
     */
    public set assignmentDefaults(value: EducationAssignmentDefaults | undefined) {
        this._assignmentDefaults = value;
    };
    /**
     * Gets the assignments property value. All assignments associated with this class. Nullable.
     * @returns a educationAssignment
     */
    public get assignments() {
        return this._assignments;
    };
    /**
     * Sets the assignments property value. All assignments associated with this class. Nullable.
     * @param value Value to set for the assignments property.
     */
    public set assignments(value: EducationAssignment[] | undefined) {
        this._assignments = value;
    };
    /**
     * Gets the assignmentSettings property value. Specifies class-level assignments settings.
     * @returns a educationAssignmentSettings
     */
    public get assignmentSettings() {
        return this._assignmentSettings;
    };
    /**
     * Sets the assignmentSettings property value. Specifies class-level assignments settings.
     * @param value Value to set for the assignmentSettings property.
     */
    public set assignmentSettings(value: EducationAssignmentSettings | undefined) {
        this._assignmentSettings = value;
    };
    /**
     * Gets the classCode property value. Class code used by the school to identify the class.
     * @returns a string
     */
    public get classCode() {
        return this._classCode;
    };
    /**
     * Sets the classCode property value. Class code used by the school to identify the class.
     * @param value Value to set for the classCode property.
     */
    public set classCode(value: string | undefined) {
        this._classCode = value;
    };
    /**
     * Instantiates a new educationClass and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the course property value. The course property
     * @returns a educationCourse
     */
    public get course() {
        return this._course;
    };
    /**
     * Sets the course property value. The course property
     * @param value Value to set for the course property.
     */
    public set course(value: EducationCourse | undefined) {
        this._course = value;
    };
    /**
     * Gets the createdBy property value. Entity who created the class
     * @returns a identitySet
     */
    public get createdBy() {
        return this._createdBy;
    };
    /**
     * Sets the createdBy property value. Entity who created the class
     * @param value Value to set for the createdBy property.
     */
    public set createdBy(value: IdentitySet | undefined) {
        this._createdBy = value;
    };
    /**
     * Gets the description property value. Description of the class.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. Description of the class.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Gets the displayName property value. Name of the class.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Name of the class.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Gets the externalId property value. ID of the class from the syncing system.
     * @returns a string
     */
    public get externalId() {
        return this._externalId;
    };
    /**
     * Sets the externalId property value. ID of the class from the syncing system.
     * @param value Value to set for the externalId property.
     */
    public set externalId(value: string | undefined) {
        this._externalId = value;
    };
    /**
     * Gets the externalName property value. Name of the class in the syncing system.
     * @returns a string
     */
    public get externalName() {
        return this._externalName;
    };
    /**
     * Sets the externalName property value. Name of the class in the syncing system.
     * @param value Value to set for the externalName property.
     */
    public set externalName(value: string | undefined) {
        this._externalName = value;
    };
    /**
     * Gets the externalSource property value. How this class was created. Possible values are: sis, manual.
     * @returns a educationExternalSource
     */
    public get externalSource() {
        return this._externalSource;
    };
    /**
     * Sets the externalSource property value. How this class was created. Possible values are: sis, manual.
     * @param value Value to set for the externalSource property.
     */
    public set externalSource(value: EducationExternalSource | undefined) {
        this._externalSource = value;
    };
    /**
     * Gets the externalSourceDetail property value. The name of the external source this resources was generated from.
     * @returns a string
     */
    public get externalSourceDetail() {
        return this._externalSourceDetail;
    };
    /**
     * Sets the externalSourceDetail property value. The name of the external source this resources was generated from.
     * @param value Value to set for the externalSourceDetail property.
     */
    public set externalSourceDetail(value: string | undefined) {
        this._externalSourceDetail = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "assignmentCategories": n => { this.assignmentCategories = n.getCollectionOfObjectValues<EducationCategory>(createEducationCategoryFromDiscriminatorValue); },
            "assignmentDefaults": n => { this.assignmentDefaults = n.getObjectValue<EducationAssignmentDefaults>(createEducationAssignmentDefaultsFromDiscriminatorValue); },
            "assignments": n => { this.assignments = n.getCollectionOfObjectValues<EducationAssignment>(createEducationAssignmentFromDiscriminatorValue); },
            "assignmentSettings": n => { this.assignmentSettings = n.getObjectValue<EducationAssignmentSettings>(createEducationAssignmentSettingsFromDiscriminatorValue); },
            "classCode": n => { this.classCode = n.getStringValue(); },
            "course": n => { this.course = n.getObjectValue<EducationCourse>(createEducationCourseFromDiscriminatorValue); },
            "createdBy": n => { this.createdBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
            "description": n => { this.description = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "externalId": n => { this.externalId = n.getStringValue(); },
            "externalName": n => { this.externalName = n.getStringValue(); },
            "externalSource": n => { this.externalSource = n.getEnumValue<EducationExternalSource>(EducationExternalSource); },
            "externalSourceDetail": n => { this.externalSourceDetail = n.getStringValue(); },
            "grade": n => { this.grade = n.getStringValue(); },
            "group": n => { this.group = n.getObjectValue<Group>(createGroupFromDiscriminatorValue); },
            "mailNickname": n => { this.mailNickname = n.getStringValue(); },
            "members": n => { this.members = n.getCollectionOfObjectValues<EducationUser>(createEducationUserFromDiscriminatorValue); },
            "schools": n => { this.schools = n.getCollectionOfObjectValues<EducationSchool>(createEducationSchoolFromDiscriminatorValue); },
            "teachers": n => { this.teachers = n.getCollectionOfObjectValues<EducationUser>(createEducationUserFromDiscriminatorValue); },
            "term": n => { this.term = n.getObjectValue<EducationTerm>(createEducationTermFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the grade property value. Grade level of the class.
     * @returns a string
     */
    public get grade() {
        return this._grade;
    };
    /**
     * Sets the grade property value. Grade level of the class.
     * @param value Value to set for the grade property.
     */
    public set grade(value: string | undefined) {
        this._grade = value;
    };
    /**
     * Gets the group property value. The underlying Microsoft 365 group object.
     * @returns a group
     */
    public get group() {
        return this._group;
    };
    /**
     * Sets the group property value. The underlying Microsoft 365 group object.
     * @param value Value to set for the group property.
     */
    public set group(value: Group | undefined) {
        this._group = value;
    };
    /**
     * Gets the mailNickname property value. Mail name for sending email to all members, if this is enabled.
     * @returns a string
     */
    public get mailNickname() {
        return this._mailNickname;
    };
    /**
     * Sets the mailNickname property value. Mail name for sending email to all members, if this is enabled.
     * @param value Value to set for the mailNickname property.
     */
    public set mailNickname(value: string | undefined) {
        this._mailNickname = value;
    };
    /**
     * Gets the members property value. All users in the class. Nullable.
     * @returns a educationUser
     */
    public get members() {
        return this._members;
    };
    /**
     * Sets the members property value. All users in the class. Nullable.
     * @param value Value to set for the members property.
     */
    public set members(value: EducationUser[] | undefined) {
        this._members = value;
    };
    /**
     * Gets the schools property value. All schools that this class is associated with. Nullable.
     * @returns a educationSchool
     */
    public get schools() {
        return this._schools;
    };
    /**
     * Sets the schools property value. All schools that this class is associated with. Nullable.
     * @param value Value to set for the schools property.
     */
    public set schools(value: EducationSchool[] | undefined) {
        this._schools = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<EducationCategory>("assignmentCategories", this.assignmentCategories);
        writer.writeObjectValue<EducationAssignmentDefaults>("assignmentDefaults", this.assignmentDefaults);
        writer.writeCollectionOfObjectValues<EducationAssignment>("assignments", this.assignments);
        writer.writeObjectValue<EducationAssignmentSettings>("assignmentSettings", this.assignmentSettings);
        writer.writeStringValue("classCode", this.classCode);
        writer.writeObjectValue<EducationCourse>("course", this.course);
        writer.writeObjectValue<IdentitySet>("createdBy", this.createdBy);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("externalId", this.externalId);
        writer.writeStringValue("externalName", this.externalName);
        writer.writeEnumValue<EducationExternalSource>("externalSource", this.externalSource);
        writer.writeStringValue("externalSourceDetail", this.externalSourceDetail);
        writer.writeStringValue("grade", this.grade);
        writer.writeObjectValue<Group>("group", this.group);
        writer.writeStringValue("mailNickname", this.mailNickname);
        writer.writeCollectionOfObjectValues<EducationUser>("members", this.members);
        writer.writeCollectionOfObjectValues<EducationSchool>("schools", this.schools);
        writer.writeCollectionOfObjectValues<EducationUser>("teachers", this.teachers);
        writer.writeObjectValue<EducationTerm>("term", this.term);
    };
    /**
     * Gets the teachers property value. All teachers in the class. Nullable.
     * @returns a educationUser
     */
    public get teachers() {
        return this._teachers;
    };
    /**
     * Sets the teachers property value. All teachers in the class. Nullable.
     * @param value Value to set for the teachers property.
     */
    public set teachers(value: EducationUser[] | undefined) {
        this._teachers = value;
    };
    /**
     * Gets the term property value. Term for this class.
     * @returns a educationTerm
     */
    public get term() {
        return this._term;
    };
    /**
     * Sets the term property value. Term for this class.
     * @param value Value to set for the term property.
     */
    public set term(value: EducationTerm | undefined) {
        this._term = value;
    };
}
