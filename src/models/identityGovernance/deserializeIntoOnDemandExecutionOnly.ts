import {deserializeIntoWorkflowExecutionConditions} from './deserializeIntoWorkflowExecutionConditions';
import {OnDemandExecutionOnly} from './onDemandExecutionOnly';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOnDemandExecutionOnly(onDemandExecutionOnly: OnDemandExecutionOnly | undefined = {} as OnDemandExecutionOnly) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoWorkflowExecutionConditions(onDemandExecutionOnly),
    }
}
