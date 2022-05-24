import {EducationGender} from './educationGender';
import {DateOnly} from '@microsoft/kiota-abstractions';

export interface EducationStudent{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** Birth date of the student. */
    birthDate?:DateOnly | undefined;
    /** ID of the student in the source system. */
    externalId?:string | undefined;
    /** Possible values are: female, male, other. */
    gender?:EducationGender | undefined;
    /** Current grade level of the student. */
    grade?:string | undefined;
    /** Year the student is graduating from the school. */
    graduationYear?:string | undefined;
    /** Student Number. */
    studentNumber?:string | undefined;
}
