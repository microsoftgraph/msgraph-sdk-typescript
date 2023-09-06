import { type BaseDeltaFunctionResponse } from '../../../models/baseDeltaFunctionResponse';
import { type EducationSchool } from '../../../models/educationSchool';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface DeltaResponse extends BaseDeltaFunctionResponse, Parsable {
    /**
     * The value property
     */
    value?: EducationSchool[] | undefined;
}
