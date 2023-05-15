import {deserializeIntoFido2AuthenticationMethodCollectionResponse} from './deserializeIntoFido2AuthenticationMethodCollectionResponse';
import {Fido2AuthenticationMethodCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFido2AuthenticationMethodCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoFido2AuthenticationMethodCollectionResponse;
}
