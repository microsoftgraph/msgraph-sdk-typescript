import {EducationCourse} from './educationCourse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EducationCourseImpl implements EducationCourse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** Unique identifier for the course. */
    private _courseNumber?: string | undefined;
    /** Description of the course. */
    private _description?: string | undefined;
    /** Name of the course. */
    private _displayName?: string | undefined;
    /** ID of the course from the syncing system. */
    private _externalId?: string | undefined;
    /** Subject of the course. */
    private _subject?: string | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown> | undefined) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new educationCourse and sets the default values.
     * @param educationCourseParameterValue 
     */
    public constructor(educationCourseParameterValue?: EducationCourse | undefined) {
        this._additionalData = educationCourseParameterValue?.additionalData ? educationCourseParameterValue?.additionalData! : {};
        this._courseNumber = educationCourseParameterValue?.courseNumber;
        this._description = educationCourseParameterValue?.description;
        this._displayName = educationCourseParameterValue?.displayName;
        this._externalId = educationCourseParameterValue?.externalId;
        this._subject = educationCourseParameterValue?.subject;
    };
    /**
     * Gets the courseNumber property value. Unique identifier for the course.
     * @returns a string
     */
    public get courseNumber() {
        return this._courseNumber;
    };
    /**
     * Sets the courseNumber property value. Unique identifier for the course.
     * @param value Value to set for the courseNumber property.
     */
    public set courseNumber(value: string | undefined) {
        if(value) {
            this._courseNumber = value;
        }
    };
    /**
     * Gets the description property value. Description of the course.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. Description of the course.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        if(value) {
            this._description = value;
        }
    };
    /**
     * Gets the displayName property value. Name of the course.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Name of the course.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        if(value) {
            this._displayName = value;
        }
    };
    /**
     * Gets the externalId property value. ID of the course from the syncing system.
     * @returns a string
     */
    public get externalId() {
        return this._externalId;
    };
    /**
     * Sets the externalId property value. ID of the course from the syncing system.
     * @param value Value to set for the externalId property.
     */
    public set externalId(value: string | undefined) {
        if(value) {
            this._externalId = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "courseNumber": n => { this.courseNumber = n.getStringValue(); },
            "description": n => { this.description = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "externalId": n => { this.externalId = n.getStringValue(); },
            "subject": n => { this.subject = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.courseNumber){
            writer.writeStringValue("courseNumber", this.courseNumber);
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
        if(this.subject){
            writer.writeStringValue("subject", this.subject);
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the subject property value. Subject of the course.
     * @returns a string
     */
    public get subject() {
        return this._subject;
    };
    /**
     * Sets the subject property value. Subject of the course.
     * @param value Value to set for the subject property.
     */
    public set subject(value: string | undefined) {
        if(value) {
            this._subject = value;
        }
    };
}
