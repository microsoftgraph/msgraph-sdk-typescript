
export interface EducationCourse{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** Unique identifier for the course. */
    courseNumber?:string | undefined;
    /** Description of the course. */
    description?:string | undefined;
    /** Name of the course. */
    displayName?:string | undefined;
    /** ID of the course from the syncing system. */
    externalId?:string | undefined;
    /** Subject of the course. */
    subject?:string | undefined;
}
