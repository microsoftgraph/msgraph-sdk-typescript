import { deserializeIntoDurationPostRequestBody } from './deserializeIntoDurationPostRequestBody';
import { type DurationPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDurationPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDurationPostRequestBody;
}
