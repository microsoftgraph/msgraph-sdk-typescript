import {BaseDeltaFunctionResponse} from '../../../models/baseDeltaFunctionResponse';
import {EducationClass} from '../../../models/educationClass';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeltaResponse extends BaseDeltaFunctionResponse, Parsable {
    /** The value property */
    value?: EducationClass[] | undefined;
}
