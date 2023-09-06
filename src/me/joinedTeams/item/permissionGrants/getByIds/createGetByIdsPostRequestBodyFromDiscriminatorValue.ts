import { deserializeIntoGetByIdsPostRequestBody } from './deserializeIntoGetByIdsPostRequestBody';
import { type GetByIdsPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createGetByIdsPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGetByIdsPostRequestBody;
}
