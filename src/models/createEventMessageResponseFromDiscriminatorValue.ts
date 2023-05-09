import {deserializeIntoEventMessageResponse} from './deserializeIntoEventMessageResponse';
import {EventMessageResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEventMessageResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEventMessageResponse;
}
