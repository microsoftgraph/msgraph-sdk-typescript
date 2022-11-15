import {WindowsInformationProtectionProxiedDomainCollectionCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsInformationProtectionProxiedDomainCollectionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : WindowsInformationProtectionProxiedDomainCollectionCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WindowsInformationProtectionProxiedDomainCollectionCollectionResponse();
}
