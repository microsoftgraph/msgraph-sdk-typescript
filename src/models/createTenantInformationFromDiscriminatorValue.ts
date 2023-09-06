import { deserializeIntoTenantInformation } from './deserializeIntoTenantInformation';
import { type TenantInformation } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTenantInformationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTenantInformation;
}
