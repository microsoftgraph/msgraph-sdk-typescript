import { type ActionResultPart } from './actionResultPart';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface AadUserConversationMemberResult extends ActionResultPart, Parsable {
    /**
     * The userId property
     */
    userId?: string | undefined;
}
