import {EventPropagationResult} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEventPropagationResultFromDiscriminatorValue(parseNode: ParseNode | undefined) : EventPropagationResult {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EventPropagationResult();
}
