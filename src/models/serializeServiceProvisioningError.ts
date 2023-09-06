import { type ServiceProvisioningError } from './serviceProvisioningError';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeServiceProvisioningError(writer: SerializationWriter, serviceProvisioningError: ServiceProvisioningError | undefined = {} as ServiceProvisioningError) : void {
        writer.writeDateValue("createdDateTime", serviceProvisioningError.createdDateTime);
        writer.writeBooleanValue("isResolved", serviceProvisioningError.isResolved);
        writer.writeStringValue("@odata.type", serviceProvisioningError.odataType);
        writer.writeStringValue("serviceInstance", serviceProvisioningError.serviceInstance);
        writer.writeAdditionalData(serviceProvisioningError.additionalData);
}
