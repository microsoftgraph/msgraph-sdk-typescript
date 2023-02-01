import {ImSinhPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createImSinhPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ImSinhPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ImSinhPostRequestBody();
}
