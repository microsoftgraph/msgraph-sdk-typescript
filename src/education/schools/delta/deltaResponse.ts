import {BaseDeltaFunctionResponse} from '../../../models/baseDeltaFunctionResponse';
import {EducationSchool} from '../../../models/educationSchool';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeltaResponse extends BaseDeltaFunctionResponse, Parsable {
    /** The value property */
    value?: EducationSchool[] | undefined;
}
