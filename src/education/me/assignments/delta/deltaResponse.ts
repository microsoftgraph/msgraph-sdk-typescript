import {BaseDeltaFunctionResponse} from '../../../../models/baseDeltaFunctionResponse';
import {EducationAssignment} from '../../../../models/educationAssignment';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeltaResponse extends BaseDeltaFunctionResponse, Parsable {
    /**
     * The value property
     */
    value?: EducationAssignment[] | undefined;
}
