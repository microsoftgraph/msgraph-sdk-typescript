import { deserializeIntoServiceProvisioningXmlError } from './deserializeIntoServiceProvisioningXmlError';
import { type ServiceProvisioningXmlError } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createServiceProvisioningXmlErrorFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoServiceProvisioningXmlError;
}
