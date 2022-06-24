import {ExternalDomainNameImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createExternalDomainNameFromDiscriminatorValue(parseNode: ParseNode | undefined) : ExternalDomainNameImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ExternalDomainNameImpl();
}
