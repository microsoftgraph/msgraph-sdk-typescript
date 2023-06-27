import {BaseDeltaFunctionResponse} from '../../../models/baseDeltaFunctionResponse';
import {Event} from '../../../models/event';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeltaResponse extends BaseDeltaFunctionResponse, Parsable {
    /**
     * The value property
     */
    value?: Event[] | undefined;
}
