import {deserializeIntoEventPropagationResult} from './deserializeIntoEventPropagationResult';
import {EventPropagationResult} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEventPropagationResultFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEventPropagationResult;
}
