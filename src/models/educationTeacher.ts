import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface EducationTeacher extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown> | undefined;
    /** Id of the Teacher in external source system. */
    externalId?: string | undefined;
    /** Teacher number. */
    teacherNumber?: string | undefined;
}
