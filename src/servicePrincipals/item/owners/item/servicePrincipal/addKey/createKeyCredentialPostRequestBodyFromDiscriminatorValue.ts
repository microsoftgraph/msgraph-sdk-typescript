import {KeyCredentialPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createKeyCredentialPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : KeyCredentialPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new KeyCredentialPostRequestBody();
}
