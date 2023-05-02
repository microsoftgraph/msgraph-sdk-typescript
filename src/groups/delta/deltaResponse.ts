import {BaseDeltaFunctionResponse} from '../../models/baseDeltaFunctionResponse';
import {Group} from '../../models/group';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeltaResponse extends BaseDeltaFunctionResponse, Parsable {
    /** The value property */
    value?: Group[] | undefined;
}
