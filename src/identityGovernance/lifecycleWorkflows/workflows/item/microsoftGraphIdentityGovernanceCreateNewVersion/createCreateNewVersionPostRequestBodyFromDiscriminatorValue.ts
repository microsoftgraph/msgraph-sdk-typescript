import { deserializeIntoCreateNewVersionPostRequestBody } from './deserializeIntoCreateNewVersionPostRequestBody';
import { type CreateNewVersionPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createCreateNewVersionPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCreateNewVersionPostRequestBody;
}
