import { deserializeIntoAsinhPostRequestBody } from './deserializeIntoAsinhPostRequestBody';
import { type AsinhPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAsinhPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAsinhPostRequestBody;
}
