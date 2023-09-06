import { deserializeIntoDgetPostRequestBody } from './deserializeIntoDgetPostRequestBody';
import { type DgetPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDgetPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDgetPostRequestBody;
}
