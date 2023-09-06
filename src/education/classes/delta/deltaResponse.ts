import { type BaseDeltaFunctionResponse } from '../../../models/baseDeltaFunctionResponse';
import { type EducationClass } from '../../../models/educationClass';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface DeltaResponse extends BaseDeltaFunctionResponse, Parsable {
    /**
     * The value property
     */
    value?: EducationClass[] | undefined;
}
