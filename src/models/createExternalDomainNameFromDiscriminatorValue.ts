import {deserializeIntoExternalDomainName} from './deserializeIntoExternalDomainName';
import {ExternalDomainName} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createExternalDomainNameFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoExternalDomainName;
}
