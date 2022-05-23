
export interface EducationTeacher{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** Id of the Teacher in external source system. */
    externalId?:string | undefined;
    /** Teacher number. */
    teacherNumber?:string | undefined;
}
