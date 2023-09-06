import { deserializeIntoResponseStatus } from './deserializeIntoResponseStatus';
import { type ResponseStatus } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createResponseStatusFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoResponseStatus;
}
