import {ExternalDomainName} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createExternalDomainNameFromDiscriminatorValue(parseNode: ParseNode | undefined) : ExternalDomainName {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ExternalDomainName();
}
