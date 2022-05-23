import {EducationGender} from './educationGender';
import {EducationStudent} from './educationStudent';
import {AdditionalDataHolder, DateOnly, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EducationStudentImpl implements AdditionalDataHolder, EducationStudent, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Birth date of the student. */
    public birthDate?: DateOnly | undefined;
    /** ID of the student in the source system. */
    public externalId?: string | undefined;
    /** Possible values are: female, male, other. */
    public gender?: EducationGender | undefined;
    /** Current grade level of the student. */
    public grade?: string | undefined;
    /** Year the student is graduating from the school. */
    public graduationYear?: string | undefined;
    /** Student Number. */
    public studentNumber?: string | undefined;
    /**
     * Instantiates a new educationStudent and sets the default values.
     * @param educationStudentParameterValue 
     */
    public constructor(educationStudentParameterValue?: EducationStudent | undefined) {
        this.additionalData = educationStudentParameterValue?.additionalData ? educationStudentParameterValue?.additionalData! : {}
        this.birthDate = educationStudentParameterValue?.birthDate ;
        this.externalId = educationStudentParameterValue?.externalId ;
        this.gender = educationStudentParameterValue?.gender ;
        this.grade = educationStudentParameterValue?.grade ;
        this.graduationYear = educationStudentParameterValue?.graduationYear ;
        this.studentNumber = educationStudentParameterValue?.studentNumber ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "birthDate": n => { this.birthDate = n.getDateOnlyValue(); },
            "externalId": n => { this.externalId = n.getStringValue(); },
            "gender": n => { this.gender = n.getEnumValue<EducationGender>(EducationGender); },
            "grade": n => { this.grade = n.getStringValue(); },
            "graduationYear": n => { this.graduationYear = n.getStringValue(); },
            "studentNumber": n => { this.studentNumber = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.birthDate){
        writer.writeDateOnlyValue("birthDate", this.birthDate);
        }
        if(this.externalId){
        writer.writeStringValue("externalId", this.externalId);
        }
        if(this.gender){
        writer.writeEnumValue<EducationGender>("gender", this.gender);
        }
        if(this.grade){
        writer.writeStringValue("grade", this.grade);
        }
        if(this.graduationYear){
        writer.writeStringValue("graduationYear", this.graduationYear);
        }
        if(this.studentNumber){
        writer.writeStringValue("studentNumber", this.studentNumber);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
