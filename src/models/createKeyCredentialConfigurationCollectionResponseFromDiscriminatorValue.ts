import {KeyCredentialConfigurationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createKeyCredentialConfigurationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : KeyCredentialConfigurationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new KeyCredentialConfigurationCollectionResponse();
}
