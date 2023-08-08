import type {BaseDeltaFunctionResponse} from '../../../../../../../models/baseDeltaFunctionResponse';
import type {EducationCategory} from '../../../../../../../models/educationCategory';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface DeltaResponse extends BaseDeltaFunctionResponse, Parsable {
    /**
     * The value property
     */
    value?: EducationCategory[] | undefined;
}
