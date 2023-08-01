import type {BaseDeltaFunctionResponse} from '../../../../../../../../models/baseDeltaFunctionResponse';
import type {Message} from '../../../../../../../../models/message';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeltaResponse extends BaseDeltaFunctionResponse, Parsable {
    /**
     * The value property
     */
    value?: Message[] | undefined;
}
