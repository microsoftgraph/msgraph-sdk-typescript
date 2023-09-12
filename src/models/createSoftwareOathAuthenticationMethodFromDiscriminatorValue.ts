import { deserializeIntoSoftwareOathAuthenticationMethod } from './deserializeIntoSoftwareOathAuthenticationMethod';
import { type SoftwareOathAuthenticationMethod } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSoftwareOathAuthenticationMethodFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSoftwareOathAuthenticationMethod;
}
