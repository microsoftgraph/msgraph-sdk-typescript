import { type BaseDeltaFunctionResponse } from '../../../../../../../models/baseDeltaFunctionResponse';
import { type Event } from '../../../../../../../models/event';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface DeltaResponse extends BaseDeltaFunctionResponse, Parsable {
    /**
     * The value property
     */
    value?: Event[] | undefined;
}
