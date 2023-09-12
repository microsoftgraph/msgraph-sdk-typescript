import { type BaseDeltaFunctionResponse } from '../../../../../../models/baseDeltaFunctionResponse';
import { type TodoTask } from '../../../../../../models/todoTask';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface DeltaResponse extends BaseDeltaFunctionResponse, Parsable {
    /**
     * The value property
     */
    value?: TodoTask[] | undefined;
}
