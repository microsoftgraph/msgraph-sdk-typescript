import {WindowsInformationProtectionProxiedDomainCollectionImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsInformationProtectionProxiedDomainCollectionFromDiscriminatorValue(parseNode: ParseNode | undefined) : WindowsInformationProtectionProxiedDomainCollectionImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WindowsInformationProtectionProxiedDomainCollectionImpl();
}
