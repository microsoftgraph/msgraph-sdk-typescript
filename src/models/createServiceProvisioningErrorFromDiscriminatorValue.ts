import {deserializeIntoServiceProvisioningError} from './deserializeIntoServiceProvisioningError';
import {deserializeIntoServiceProvisioningXmlError} from './deserializeIntoServiceProvisioningXmlError';
import {ServiceProvisioningError, ServiceProvisioningXmlError} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createServiceProvisioningErrorFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.serviceProvisioningXmlError":
                    return deserializeIntoServiceProvisioningXmlError;
            }
        }
    }
    return deserializeIntoServiceProvisioningError;
}
