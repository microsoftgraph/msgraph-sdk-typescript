import {BaseDeltaFunctionResponse} from '../../models/baseDeltaFunctionResponse';
import {Device} from '../../models/device';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeltaResponse extends BaseDeltaFunctionResponse, Parsable {
    /** The value property */
    value?: Device[] | undefined;
}
