import {SoftwareOathAuthenticationMethodCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSoftwareOathAuthenticationMethodCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : SoftwareOathAuthenticationMethodCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SoftwareOathAuthenticationMethodCollectionResponse();
}
