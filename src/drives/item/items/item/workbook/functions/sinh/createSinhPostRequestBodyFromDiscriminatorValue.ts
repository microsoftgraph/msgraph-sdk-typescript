import {deserializeIntoSinhPostRequestBody} from './deserializeIntoSinhPostRequestBody';
import {SinhPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSinhPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSinhPostRequestBody;
}
