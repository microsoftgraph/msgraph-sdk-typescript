import { deserializeIntoRestorePostRequestBody } from './deserializeIntoRestorePostRequestBody';
import { type RestorePostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createRestorePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRestorePostRequestBody;
}
