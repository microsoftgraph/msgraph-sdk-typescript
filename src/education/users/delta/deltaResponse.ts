import {BaseDeltaFunctionResponse} from '../../../models/baseDeltaFunctionResponse';
import {EducationUser} from '../../../models/educationUser';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeltaResponse extends BaseDeltaFunctionResponse, Parsable {
    /** The value property */
    value?: EducationUser[] | undefined;
}
