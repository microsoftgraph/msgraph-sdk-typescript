import { type OnDemandExecutionOnly } from './onDemandExecutionOnly';
import { serializeWorkflowExecutionConditions } from './serializeWorkflowExecutionConditions';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeOnDemandExecutionOnly(writer: SerializationWriter, onDemandExecutionOnly: OnDemandExecutionOnly | undefined = {} as OnDemandExecutionOnly) : void {
        serializeWorkflowExecutionConditions(writer, onDemandExecutionOnly)
}
