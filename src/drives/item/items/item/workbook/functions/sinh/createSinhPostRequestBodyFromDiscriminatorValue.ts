import { deserializeIntoSinhPostRequestBody } from './deserializeIntoSinhPostRequestBody';
import { type SinhPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSinhPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSinhPostRequestBody;
}
