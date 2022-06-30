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
import {EducationAssignment} from './educationAssignment';
import {EducationAssignmentDefaults} from './educationAssignmentDefaults';
import {EducationAssignmentSettings} from './educationAssignmentSettings';
import {EducationCategory} from './educationCategory';
import {EducationClass} from './educationClass';
import {EducationCourse} from './educationCourse';
import {EducationExternalSource} from './educationExternalSource';
import {EducationSchool} from './educationSchool';
import {EducationTerm} from './educationTerm';
import {EducationUser} from './educationUser';
import {Group} from './group';
import {IdentitySet} from './identitySet';
import {EducationAssignmentDefaultsImpl, EducationAssignmentImpl, EducationAssignmentSettingsImpl, EducationCategoryImpl, EducationCourseImpl, EducationSchoolImpl, EducationTermImpl, EducationUserImpl, EntityImpl, GroupImpl, IdentitySetImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the educationRoot singleton. */
export class EducationClassImpl extends EntityImpl implements EducationClass {
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
    /** Course information for the class. */
    private _course?: EducationCourse | undefined;
    /** Entity who created the class. */
    private _createdBy?: IdentitySet | undefined;
    /** Description of the class. */
    private _description?: string | undefined;
    /** Name of the class. */
    private _displayName?: string | undefined;
    /** ID of the class from the syncing system. */
    private _externalId?: string | undefined;
    /** Name of the class in the syncing system. */
    private _externalName?: string | undefined;
    /** The type of external source this resource was generated from (automatically determined from externalSourceDetail). Possible values are: sis, lms, or manual. */
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
    /** Term for the class. */
    private _term?: EducationTerm | undefined;
    /**
     * Gets the assignmentCategories property value. All categories associated with this class. Nullable.
     * @returns a EducationCategoryInterface
     */
    public get assignmentCategories() {
        return this._assignmentCategories;
    };
    /**
     * Sets the assignmentCategories property value. All categories associated with this class. Nullable.
     * @param value Value to set for the assignmentCategories property.
     */
    public set assignmentCategories(value: EducationCategory[] | undefined) {
        if(value) {
            const assignmentCategoriesArrValue: EducationCategoryImpl[] = [];
            this.assignmentCategories?.forEach(element => {
                assignmentCategoriesArrValue.push((element instanceof EducationCategoryImpl? element:new EducationCategoryImpl(element)));
            });
            this._assignmentCategories = assignmentCategoriesArrValue;
        }
    };
    /**
     * Gets the assignmentDefaults property value. Specifies class-level defaults respected by new assignments created in the class.
     * @returns a EducationAssignmentDefaultsInterface
     */
    public get assignmentDefaults() {
        return this._assignmentDefaults;
    };
    /**
     * Sets the assignmentDefaults property value. Specifies class-level defaults respected by new assignments created in the class.
     * @param value Value to set for the assignmentDefaults property.
     */
    public set assignmentDefaults(value: EducationAssignmentDefaults | undefined) {
        if(value) {
            this._assignmentDefaults = value instanceof EducationAssignmentDefaultsImpl? value : new EducationAssignmentDefaultsImpl(value);
        }
    };
    /**
     * Gets the assignments property value. All assignments associated with this class. Nullable.
     * @returns a EducationAssignmentInterface
     */
    public get assignments() {
        return this._assignments;
    };
    /**
     * Sets the assignments property value. All assignments associated with this class. Nullable.
     * @param value Value to set for the assignments property.
     */
    public set assignments(value: EducationAssignment[] | undefined) {
        if(value) {
            const assignmentsArrValue: EducationAssignmentImpl[] = [];
            this.assignments?.forEach(element => {
                assignmentsArrValue.push((element instanceof EducationAssignmentImpl? element:new EducationAssignmentImpl(element)));
            });
            this._assignments = assignmentsArrValue;
        }
    };
    /**
     * Gets the assignmentSettings property value. Specifies class-level assignments settings.
     * @returns a EducationAssignmentSettingsInterface
     */
    public get assignmentSettings() {
        return this._assignmentSettings;
    };
    /**
     * Sets the assignmentSettings property value. Specifies class-level assignments settings.
     * @param value Value to set for the assignmentSettings property.
     */
    public set assignmentSettings(value: EducationAssignmentSettings | undefined) {
        if(value) {
            this._assignmentSettings = value instanceof EducationAssignmentSettingsImpl? value : new EducationAssignmentSettingsImpl(value);
        }
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
        if(value) {
            this._classCode = value;
        }
    };
    /**
     * Instantiates a new educationClass and sets the default values.
     * @param educationClassParameterValue 
     */
    public constructor(educationClassParameterValue?: EducationClass | undefined) {
        super(educationClassParameterValue);
        this._assignmentCategories = educationClassParameterValue?.assignmentCategories;
        this._assignmentDefaults = educationClassParameterValue?.assignmentDefaults;
        this._assignments = educationClassParameterValue?.assignments;
        this._assignmentSettings = educationClassParameterValue?.assignmentSettings;
        this._classCode = educationClassParameterValue?.classCode;
        this._course = educationClassParameterValue?.course;
        this._createdBy = educationClassParameterValue?.createdBy;
        this._description = educationClassParameterValue?.description;
        this._displayName = educationClassParameterValue?.displayName;
        this._externalId = educationClassParameterValue?.externalId;
        this._externalName = educationClassParameterValue?.externalName;
        this._externalSource = educationClassParameterValue?.externalSource;
        this._externalSourceDetail = educationClassParameterValue?.externalSourceDetail;
        this._grade = educationClassParameterValue?.grade;
        this._group = educationClassParameterValue?.group;
        this._mailNickname = educationClassParameterValue?.mailNickname;
        this._members = educationClassParameterValue?.members;
        this._schools = educationClassParameterValue?.schools;
        this._teachers = educationClassParameterValue?.teachers;
        this._term = educationClassParameterValue?.term;
    };
    /**
     * Gets the course property value. Course information for the class.
     * @returns a EducationCourseInterface
     */
    public get course() {
        return this._course;
    };
    /**
     * Sets the course property value. Course information for the class.
     * @param value Value to set for the course property.
     */
    public set course(value: EducationCourse | undefined) {
        if(value) {
            this._course = value instanceof EducationCourseImpl? value : new EducationCourseImpl(value);
        }
    };
    /**
     * Gets the createdBy property value. Entity who created the class.
     * @returns a IdentitySetInterface
     */
    public get createdBy() {
        return this._createdBy;
    };
    /**
     * Sets the createdBy property value. Entity who created the class.
     * @param value Value to set for the createdBy property.
     */
    public set createdBy(value: IdentitySet | undefined) {
        if(value) {
            this._createdBy = value instanceof IdentitySetImpl? value : new IdentitySetImpl(value);
        }
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
        if(value) {
            this._description = value;
        }
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
        if(value) {
            this._displayName = value;
        }
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
        if(value) {
            this._externalId = value;
        }
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
        if(value) {
            this._externalName = value;
        }
    };
    /**
     * Gets the externalSource property value. The type of external source this resource was generated from (automatically determined from externalSourceDetail). Possible values are: sis, lms, or manual.
     * @returns a educationExternalSource
     */
    public get externalSource() {
        return this._externalSource;
    };
    /**
     * Sets the externalSource property value. The type of external source this resource was generated from (automatically determined from externalSourceDetail). Possible values are: sis, lms, or manual.
     * @param value Value to set for the externalSource property.
     */
    public set externalSource(value: EducationExternalSource | undefined) {
        if(value) {
            this._externalSource = value;
        }
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
        if(value) {
            this._externalSourceDetail = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "assignmentCategories": n => { this.assignmentCategories = n.getCollectionOfObjectValues<EducationCategoryImpl>(createEducationCategoryFromDiscriminatorValue); },
            "assignmentDefaults": n => { this.assignmentDefaults = n.getObjectValue<EducationAssignmentDefaultsImpl>(createEducationAssignmentDefaultsFromDiscriminatorValue); },
            "assignments": n => { this.assignments = n.getCollectionOfObjectValues<EducationAssignmentImpl>(createEducationAssignmentFromDiscriminatorValue); },
            "assignmentSettings": n => { this.assignmentSettings = n.getObjectValue<EducationAssignmentSettingsImpl>(createEducationAssignmentSettingsFromDiscriminatorValue); },
            "classCode": n => { this.classCode = n.getStringValue(); },
            "course": n => { this.course = n.getObjectValue<EducationCourseImpl>(createEducationCourseFromDiscriminatorValue); },
            "createdBy": n => { this.createdBy = n.getObjectValue<IdentitySetImpl>(createIdentitySetFromDiscriminatorValue); },
            "description": n => { this.description = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "externalId": n => { this.externalId = n.getStringValue(); },
            "externalName": n => { this.externalName = n.getStringValue(); },
            "externalSource": n => { this.externalSource = n.getEnumValue<EducationExternalSource>(EducationExternalSource); },
            "externalSourceDetail": n => { this.externalSourceDetail = n.getStringValue(); },
            "grade": n => { this.grade = n.getStringValue(); },
            "group": n => { this.group = n.getObjectValue<GroupImpl>(createGroupFromDiscriminatorValue); },
            "mailNickname": n => { this.mailNickname = n.getStringValue(); },
            "members": n => { this.members = n.getCollectionOfObjectValues<EducationUserImpl>(createEducationUserFromDiscriminatorValue); },
            "schools": n => { this.schools = n.getCollectionOfObjectValues<EducationSchoolImpl>(createEducationSchoolFromDiscriminatorValue); },
            "teachers": n => { this.teachers = n.getCollectionOfObjectValues<EducationUserImpl>(createEducationUserFromDiscriminatorValue); },
            "term": n => { this.term = n.getObjectValue<EducationTermImpl>(createEducationTermFromDiscriminatorValue); },
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
        if(value) {
            this._grade = value;
        }
    };
    /**
     * Gets the group property value. The underlying Microsoft 365 group object.
     * @returns a GroupInterface
     */
    public get group() {
        return this._group;
    };
    /**
     * Sets the group property value. The underlying Microsoft 365 group object.
     * @param value Value to set for the group property.
     */
    public set group(value: Group | undefined) {
        if(value) {
            this._group = value instanceof GroupImpl? value : new GroupImpl(value);
        }
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
        if(value) {
            this._mailNickname = value;
        }
    };
    /**
     * Gets the members property value. All users in the class. Nullable.
     * @returns a EducationUserInterface
     */
    public get members() {
        return this._members;
    };
    /**
     * Sets the members property value. All users in the class. Nullable.
     * @param value Value to set for the members property.
     */
    public set members(value: EducationUser[] | undefined) {
        if(value) {
            const membersArrValue: EducationUserImpl[] = [];
            this.members?.forEach(element => {
                membersArrValue.push((element instanceof EducationUserImpl? element:new EducationUserImpl(element)));
            });
            this._members = membersArrValue;
        }
    };
    /**
     * Gets the schools property value. All schools that this class is associated with. Nullable.
     * @returns a EducationSchoolInterface
     */
    public get schools() {
        return this._schools;
    };
    /**
     * Sets the schools property value. All schools that this class is associated with. Nullable.
     * @param value Value to set for the schools property.
     */
    public set schools(value: EducationSchool[] | undefined) {
        if(value) {
            const schoolsArrValue: EducationSchoolImpl[] = [];
            this.schools?.forEach(element => {
                schoolsArrValue.push((element instanceof EducationSchoolImpl? element:new EducationSchoolImpl(element)));
            });
            this._schools = schoolsArrValue;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.assignmentCategories && this.assignmentCategories.length != 0){        const assignmentCategoriesArrValue: EducationCategoryImpl[] = [];
        this.assignmentCategories?.forEach(element => {
            assignmentCategoriesArrValue.push((element instanceof EducationCategoryImpl? element:new EducationCategoryImpl(element)));
        });
            writer.writeCollectionOfObjectValues<EducationCategoryImpl>("assignmentCategories", assignmentCategoriesArrValue);
        }
        if(this.assignmentDefaults){
            writer.writeObjectValue<EducationAssignmentDefaultsImpl>("assignmentDefaults", (!this.assignmentDefaults || this.assignmentDefaults instanceof EducationAssignmentDefaultsImpl? this.assignmentDefaults : new EducationAssignmentDefaultsImpl(this.assignmentDefaults)));
        }
        if(this.assignments && this.assignments.length != 0){        const assignmentsArrValue: EducationAssignmentImpl[] = [];
        this.assignments?.forEach(element => {
            assignmentsArrValue.push((element instanceof EducationAssignmentImpl? element:new EducationAssignmentImpl(element)));
        });
            writer.writeCollectionOfObjectValues<EducationAssignmentImpl>("assignments", assignmentsArrValue);
        }
        if(this.assignmentSettings){
            writer.writeObjectValue<EducationAssignmentSettingsImpl>("assignmentSettings", (!this.assignmentSettings || this.assignmentSettings instanceof EducationAssignmentSettingsImpl? this.assignmentSettings : new EducationAssignmentSettingsImpl(this.assignmentSettings)));
        }
        if(this.classCode){
            writer.writeStringValue("classCode", this.classCode);
        }
        if(this.course){
            writer.writeObjectValue<EducationCourseImpl>("course", (!this.course || this.course instanceof EducationCourseImpl? this.course : new EducationCourseImpl(this.course)));
        }
        if(this.createdBy){
            writer.writeObjectValue<IdentitySetImpl>("createdBy", (!this.createdBy || this.createdBy instanceof IdentitySetImpl? this.createdBy : new IdentitySetImpl(this.createdBy)));
        }
        if(this.description){
            writer.writeStringValue("description", this.description);
        }
        if(this.displayName){
            writer.writeStringValue("displayName", this.displayName);
        }
        if(this.externalId){
            writer.writeStringValue("externalId", this.externalId);
        }
        if(this.externalName){
            writer.writeStringValue("externalName", this.externalName);
        }
        if(this.externalSource){
            writer.writeEnumValue<EducationExternalSource>("externalSource", this.externalSource);
        }
        if(this.externalSourceDetail){
            writer.writeStringValue("externalSourceDetail", this.externalSourceDetail);
        }
        if(this.grade){
            writer.writeStringValue("grade", this.grade);
        }
        if(this.group){
            writer.writeObjectValue<GroupImpl>("group", (!this.group || this.group instanceof GroupImpl? this.group : new GroupImpl(this.group)));
        }
        if(this.mailNickname){
            writer.writeStringValue("mailNickname", this.mailNickname);
        }
        if(this.members && this.members.length != 0){        const membersArrValue: EducationUserImpl[] = [];
        this.members?.forEach(element => {
            membersArrValue.push((element instanceof EducationUserImpl? element:new EducationUserImpl(element)));
        });
            writer.writeCollectionOfObjectValues<EducationUserImpl>("members", membersArrValue);
        }
        if(this.schools && this.schools.length != 0){        const schoolsArrValue: EducationSchoolImpl[] = [];
        this.schools?.forEach(element => {
            schoolsArrValue.push((element instanceof EducationSchoolImpl? element:new EducationSchoolImpl(element)));
        });
            writer.writeCollectionOfObjectValues<EducationSchoolImpl>("schools", schoolsArrValue);
        }
        if(this.teachers && this.teachers.length != 0){        const teachersArrValue: EducationUserImpl[] = [];
        this.teachers?.forEach(element => {
            teachersArrValue.push((element instanceof EducationUserImpl? element:new EducationUserImpl(element)));
        });
            writer.writeCollectionOfObjectValues<EducationUserImpl>("teachers", teachersArrValue);
        }
        if(this.term){
            writer.writeObjectValue<EducationTermImpl>("term", (!this.term || this.term instanceof EducationTermImpl? this.term : new EducationTermImpl(this.term)));
        }
    };
    /**
     * Gets the teachers property value. All teachers in the class. Nullable.
     * @returns a EducationUserInterface
     */
    public get teachers() {
        return this._teachers;
    };
    /**
     * Sets the teachers property value. All teachers in the class. Nullable.
     * @param value Value to set for the teachers property.
     */
    public set teachers(value: EducationUser[] | undefined) {
        if(value) {
            const teachersArrValue: EducationUserImpl[] = [];
            this.teachers?.forEach(element => {
                teachersArrValue.push((element instanceof EducationUserImpl? element:new EducationUserImpl(element)));
            });
            this._teachers = teachersArrValue;
        }
    };
    /**
     * Gets the term property value. Term for the class.
     * @returns a EducationTermInterface
     */
    public get term() {
        return this._term;
    };
    /**
     * Sets the term property value. Term for the class.
     * @param value Value to set for the term property.
     */
    public set term(value: EducationTerm | undefined) {
        if(value) {
            this._term = value instanceof EducationTermImpl? value : new EducationTermImpl(value);
        }
    };
}
