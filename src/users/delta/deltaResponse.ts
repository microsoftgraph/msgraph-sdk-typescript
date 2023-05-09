import {BaseDeltaFunctionResponse} from '../../models/baseDeltaFunctionResponse';
import {User} from '../../models/user';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeltaResponse extends BaseDeltaFunctionResponse, Parsable {
    /** The value property */
    value?: User[] | undefined;
}
