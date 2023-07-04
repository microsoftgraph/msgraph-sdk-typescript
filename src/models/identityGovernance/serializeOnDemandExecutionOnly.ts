import {OnDemandExecutionOnly} from './onDemandExecutionOnly';
import {serializeWorkflowExecutionConditions} from './serializeWorkflowExecutionConditions';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOnDemandExecutionOnly(writer: SerializationWriter, onDemandExecutionOnly: OnDemandExecutionOnly | undefined = {} as OnDemandExecutionOnly) : void {
        serializeWorkflowExecutionConditions(writer, onDemandExecutionOnly)
}
