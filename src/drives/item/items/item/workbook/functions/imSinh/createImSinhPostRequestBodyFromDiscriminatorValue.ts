import { deserializeIntoImSinhPostRequestBody } from './deserializeIntoImSinhPostRequestBody';
import { type ImSinhPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createImSinhPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoImSinhPostRequestBody;
}
