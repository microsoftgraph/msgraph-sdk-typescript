import {Entity} from './entity';
import {MessageRuleActions} from './messageRuleActions';
import {MessageRulePredicates} from './messageRulePredicates';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface MessageRule extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Actions to be taken on a message when the corresponding conditions are fulfilled. */
    actions?: MessageRuleActions | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Conditions that when fulfilled, will trigger the corresponding actions for that rule. */
    conditions?: MessageRulePredicates | undefined;
    /** The display name of the rule. */
    displayName?: string | undefined;
    /** Exception conditions for the rule. */
    exceptions?: MessageRulePredicates | undefined;
    /** Indicates whether the rule is in an error condition. Read-only. */
    hasError?: boolean | undefined;
    /** Indicates whether the rule is enabled to be applied to messages. */
    isEnabled?: boolean | undefined;
    /** Indicates if the rule is read-only and cannot be modified or deleted by the rules REST API. */
    isReadOnly?: boolean | undefined;
    /** Indicates the order in which the rule is executed, among other rules. */
    sequence?: number | undefined;
}
