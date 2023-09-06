import { deserializeIntoGrantResponse } from './deserializeIntoGrantResponse';
import { type GrantResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createGrantResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGrantResponse;
}
