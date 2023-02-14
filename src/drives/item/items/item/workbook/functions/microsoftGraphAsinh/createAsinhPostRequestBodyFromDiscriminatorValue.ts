import {AsinhPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAsinhPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : AsinhPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AsinhPostRequestBody();
}
