import {deserializeIntoTenantInformation} from './deserializeIntoTenantInformation';
import {TenantInformation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTenantInformationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTenantInformation;
}
