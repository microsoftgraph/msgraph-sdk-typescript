import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface EducationTeacher extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * ID of the teacher in the source system.
     */
    externalId?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Teacher number.
     */
    teacherNumber?: string | undefined;
}
