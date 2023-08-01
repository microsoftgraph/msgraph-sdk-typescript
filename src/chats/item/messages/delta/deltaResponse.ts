import type {BaseDeltaFunctionResponse} from '../../../../models/baseDeltaFunctionResponse';
import type {ChatMessage} from '../../../../models/chatMessage';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeltaResponse extends BaseDeltaFunctionResponse, Parsable {
    /**
     * The value property
     */
    value?: ChatMessage[] | undefined;
}
