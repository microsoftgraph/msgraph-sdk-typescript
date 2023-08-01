import type {BaseDeltaFunctionResponse} from '../../../../../models/baseDeltaFunctionResponse';
import type {TodoTaskList} from '../../../../../models/todoTaskList';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeltaResponse extends BaseDeltaFunctionResponse, Parsable {
    /**
     * The value property
     */
    value?: TodoTaskList[] | undefined;
}
