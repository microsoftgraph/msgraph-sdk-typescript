import {deserializeIntoWindowsInformationProtectionProxiedDomainCollection} from './deserializeIntoWindowsInformationProtectionProxiedDomainCollection';
import {WindowsInformationProtectionProxiedDomainCollection} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsInformationProtectionProxiedDomainCollectionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWindowsInformationProtectionProxiedDomainCollection;
}
