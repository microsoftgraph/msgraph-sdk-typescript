import { deserializeIntoServiceProvisioningError } from './deserializeIntoServiceProvisioningError';
import { type ServiceProvisioningXmlError } from './serviceProvisioningXmlError';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoServiceProvisioningXmlError(serviceProvisioningXmlError: ServiceProvisioningXmlError | undefined = {} as ServiceProvisioningXmlError) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoServiceProvisioningError(serviceProvisioningXmlError),
        "errorDetail": n => { serviceProvisioningXmlError.errorDetail = n.getStringValue(); },
    }
}
