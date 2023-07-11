import {BaseDeltaFunctionResponse} from '../../../../../../models/baseDeltaFunctionResponse';
import {TodoTask} from '../../../../../../models/todoTask';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeltaResponse extends BaseDeltaFunctionResponse, Parsable {
    /**
     * The value property
     */
    value?: TodoTask[] | undefined;
}
