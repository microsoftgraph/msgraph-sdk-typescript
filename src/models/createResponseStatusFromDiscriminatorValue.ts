import {deserializeIntoResponseStatus} from './deserializeIntoResponseStatus';
import {ResponseStatus} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createResponseStatusFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoResponseStatus;
}
