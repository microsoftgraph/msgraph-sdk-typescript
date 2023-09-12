import { deserializeIntoDsumPostRequestBody } from './deserializeIntoDsumPostRequestBody';
import { type DsumPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDsumPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDsumPostRequestBody;
}
