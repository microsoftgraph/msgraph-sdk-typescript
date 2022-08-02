import {EventMessageResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEventMessageResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : EventMessageResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EventMessageResponse();
}
