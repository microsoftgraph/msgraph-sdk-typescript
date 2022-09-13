import {SamlOrWsFedExternalDomainFederation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSamlOrWsFedExternalDomainFederationFromDiscriminatorValue(parseNode: ParseNode | undefined) : SamlOrWsFedExternalDomainFederation {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SamlOrWsFedExternalDomainFederation();
}
