import type {BaseDeltaFunctionResponse} from '../../models/baseDeltaFunctionResponse';
import type {User} from '../../models/user';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface DeltaResponse extends BaseDeltaFunctionResponse, Parsable {
    /**
     * The value property
     */
    value?: User[] | undefined;
}
