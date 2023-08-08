import type {BaseDeltaFunctionResponse} from '../../models/baseDeltaFunctionResponse';
import type {Group} from '../../models/group';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface DeltaResponse extends BaseDeltaFunctionResponse, Parsable {
    /**
     * The value property
     */
    value?: Group[] | undefined;
}
