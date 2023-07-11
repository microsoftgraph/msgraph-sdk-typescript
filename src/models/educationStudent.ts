import {EducationGender} from './educationGender';
import {AdditionalDataHolder, DateOnly, Parsable} from '@microsoft/kiota-abstractions';

export interface EducationStudent extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Birth date of the student.
     */
    birthDate?: DateOnly | undefined;
    /**
     * ID of the student in the source system.
     */
    externalId?: string | undefined;
    /**
     * The possible values are: female, male, other, unknownFutureValue.
     */
    gender?: EducationGender | undefined;
    /**
     * Current grade level of the student.
     */
    grade?: string | undefined;
    /**
     * Year the student is graduating from the school.
     */
    graduationYear?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Student Number.
     */
    studentNumber?: string | undefined;
}
