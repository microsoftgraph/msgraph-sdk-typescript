import {EducationCourse} from './educationCourse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EducationCourseImpl implements AdditionalDataHolder, EducationCourse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Unique identifier for the course. */
    public courseNumber?: string | undefined;
    /** Description of the course. */
    public description?: string | undefined;
    /** Name of the course. */
    public displayName?: string | undefined;
    /** ID of the course from the syncing system. */
    public externalId?: string | undefined;
    /** Subject of the course. */
    public subject?: string | undefined;
    /**
     * Instantiates a new educationCourse and sets the default values.
     * @param educationCourseParameterValue 
     */
    public constructor(educationCourseParameterValue?: EducationCourse | undefined) {
        this.additionalData = educationCourseParameterValue?.additionalData ? educationCourseParameterValue?.additionalData! : {}
        this.courseNumber = educationCourseParameterValue?.courseNumber ;
        this.description = educationCourseParameterValue?.description ;
        this.displayName = educationCourseParameterValue?.displayName ;
        this.externalId = educationCourseParameterValue?.externalId ;
        this.subject = educationCourseParameterValue?.subject ;
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
}
