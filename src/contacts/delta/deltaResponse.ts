import {BaseDeltaFunctionResponse} from '../../models/baseDeltaFunctionResponse';
import {OrgContact} from '../../models/orgContact';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeltaResponse extends BaseDeltaFunctionResponse, Parsable {
    /** The value property */
    value?: OrgContact[] | undefined;
}
