
export interface BookingQuestionAssignment{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** Indicates whether it is mandatory to answer the custom question. */
    isRequired?:boolean | undefined;
    /** If it is mandatory to answer the custom question. */
    questionId?:string | undefined;
}
