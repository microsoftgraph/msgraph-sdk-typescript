import { deserializeIntoCountResponse } from './deserializeIntoCountResponse';
import { type CountResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createCountResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCountResponse;
}
