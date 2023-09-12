import { deserializeIntoAddResponse } from './deserializeIntoAddResponse';
import { type AddResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAddResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAddResponse;
}
