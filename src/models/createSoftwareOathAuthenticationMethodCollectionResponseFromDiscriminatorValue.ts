import {deserializeIntoSoftwareOathAuthenticationMethodCollectionResponse} from './deserializeIntoSoftwareOathAuthenticationMethodCollectionResponse';
import {SoftwareOathAuthenticationMethodCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSoftwareOathAuthenticationMethodCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSoftwareOathAuthenticationMethodCollectionResponse;
}
