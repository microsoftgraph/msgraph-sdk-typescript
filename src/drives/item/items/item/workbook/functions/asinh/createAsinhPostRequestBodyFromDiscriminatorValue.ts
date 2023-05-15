import {deserializeIntoAsinhPostRequestBody} from './deserializeIntoAsinhPostRequestBody';
import {AsinhPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAsinhPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAsinhPostRequestBody;
}
