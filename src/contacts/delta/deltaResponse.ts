import type {BaseDeltaFunctionResponse} from '../../models/baseDeltaFunctionResponse';
import type {OrgContact} from '../../models/orgContact';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface DeltaResponse extends BaseDeltaFunctionResponse, Parsable {
    /**
     * The value property
     */
    value?: OrgContact[] | undefined;
}
