import { deserializeIntoEventPropagationResult } from './deserializeIntoEventPropagationResult';
import { type EventPropagationResult } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createEventPropagationResultFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEventPropagationResult;
}
