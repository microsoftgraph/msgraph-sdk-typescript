import { deserializeIntoImSechPostRequestBody } from './deserializeIntoImSechPostRequestBody';
import { type ImSechPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createImSechPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoImSechPostRequestBody;
}
