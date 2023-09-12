import { type BaseDeltaFunctionResponse } from '../../../models/baseDeltaFunctionResponse';
import { type EducationUser } from '../../../models/educationUser';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface DeltaResponse extends BaseDeltaFunctionResponse, Parsable {
    /**
     * The value property
     */
    value?: EducationUser[] | undefined;
}
