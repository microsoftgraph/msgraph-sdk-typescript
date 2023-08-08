import type {OnDemandExecutionOnly} from './onDemandExecutionOnly';
import {serializeWorkflowExecutionConditions} from './serializeWorkflowExecutionConditions';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOnDemandExecutionOnly(writer: SerializationWriter, onDemandExecutionOnly: OnDemandExecutionOnly | undefined = {} as OnDemandExecutionOnly) : void {
        serializeWorkflowExecutionConditions(writer, onDemandExecutionOnly)
}
