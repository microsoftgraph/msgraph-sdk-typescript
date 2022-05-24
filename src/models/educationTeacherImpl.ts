import {EducationTeacher} from './educationTeacher';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EducationTeacherImpl implements AdditionalDataHolder, EducationTeacher, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Id of the Teacher in external source system. */
    public externalId?: string | undefined;
    /** Teacher number. */
    public teacherNumber?: string | undefined;
    /**
     * Instantiates a new educationTeacher and sets the default values.
     * @param educationTeacherParameterValue 
     */
    public constructor(educationTeacherParameterValue?: EducationTeacher | undefined) {
        this.additionalData = educationTeacherParameterValue?.additionalData ? educationTeacherParameterValue?.additionalData! : {}
        this.externalId = educationTeacherParameterValue?.externalId ;
        this.teacherNumber = educationTeacherParameterValue?.teacherNumber ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "externalId": n => { this.externalId = n.getStringValue(); },
            "teacherNumber": n => { this.teacherNumber = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.externalId){
        writer.writeStringValue("externalId", this.externalId);
        }
        if(this.teacherNumber){
        writer.writeStringValue("teacherNumber", this.teacherNumber);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
