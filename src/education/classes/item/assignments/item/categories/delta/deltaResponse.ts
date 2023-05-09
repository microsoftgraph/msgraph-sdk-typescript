import {BaseDeltaFunctionResponse} from '../../../../../../../models/baseDeltaFunctionResponse';
import {EducationCategory} from '../../../../../../../models/educationCategory';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeltaResponse extends BaseDeltaFunctionResponse, Parsable {
    /** The value property */
    value?: EducationCategory[] | undefined;
}
