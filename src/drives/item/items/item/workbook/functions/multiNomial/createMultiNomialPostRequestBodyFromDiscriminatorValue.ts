import { deserializeIntoMultiNomialPostRequestBody } from './deserializeIntoMultiNomialPostRequestBody';
import { type MultiNomialPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createMultiNomialPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMultiNomialPostRequestBody;
}
