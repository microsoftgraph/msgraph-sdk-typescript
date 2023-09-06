import { deserializeIntoExternalDomainName } from './deserializeIntoExternalDomainName';
import { type ExternalDomainName } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createExternalDomainNameFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoExternalDomainName;
}
