import type {ServiceProvisioningError} from './serviceProvisioningError';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoServiceProvisioningError(serviceProvisioningError: ServiceProvisioningError | undefined = {} as ServiceProvisioningError) : Record<string, (node: ParseNode) => void> {
    return {
        "createdDateTime": n => { serviceProvisioningError.createdDateTime = n.getDateValue(); },
        "isResolved": n => { serviceProvisioningError.isResolved = n.getBooleanValue(); },
        "@odata.type": n => { serviceProvisioningError.odataType = n.getStringValue(); },
        "serviceInstance": n => { serviceProvisioningError.serviceInstance = n.getStringValue(); },
    }
}
