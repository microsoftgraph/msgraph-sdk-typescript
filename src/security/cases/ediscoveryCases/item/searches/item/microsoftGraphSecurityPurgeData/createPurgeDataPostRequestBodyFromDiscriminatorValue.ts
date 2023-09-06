import { deserializeIntoPurgeDataPostRequestBody } from './deserializeIntoPurgeDataPostRequestBody';
import { type PurgeDataPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPurgeDataPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPurgeDataPostRequestBody;
}
