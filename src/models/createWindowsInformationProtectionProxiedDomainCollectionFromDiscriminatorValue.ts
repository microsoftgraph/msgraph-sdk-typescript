import { deserializeIntoWindowsInformationProtectionProxiedDomainCollection } from './deserializeIntoWindowsInformationProtectionProxiedDomainCollection';
import { type WindowsInformationProtectionProxiedDomainCollection } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWindowsInformationProtectionProxiedDomainCollectionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWindowsInformationProtectionProxiedDomainCollection;
}
