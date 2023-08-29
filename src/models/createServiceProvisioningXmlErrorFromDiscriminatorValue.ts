import {deserializeIntoServiceProvisioningXmlError} from './deserializeIntoServiceProvisioningXmlError';
import {ServiceProvisioningXmlError} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createServiceProvisioningXmlErrorFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoServiceProvisioningXmlError;
}
