import {KeyCredentialPostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createKeyCredentialPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : KeyCredentialPostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new KeyCredentialPostRequestBodyImpl();
}
