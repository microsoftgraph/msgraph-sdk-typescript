import { deserializeIntoBahtTextPostRequestBody } from './deserializeIntoBahtTextPostRequestBody';
import { type BahtTextPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createBahtTextPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoBahtTextPostRequestBody;
}
