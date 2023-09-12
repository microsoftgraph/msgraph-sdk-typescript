import { deserializeIntoSechPostRequestBody } from './deserializeIntoSechPostRequestBody';
import { type SechPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSechPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSechPostRequestBody;
}
