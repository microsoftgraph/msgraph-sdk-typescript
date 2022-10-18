import {KeyCredentialCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createKeyCredentialCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : KeyCredentialCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new KeyCredentialCollectionResponse();
}
