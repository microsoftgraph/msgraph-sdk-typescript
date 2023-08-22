import {serializeServiceProvisioningError} from './serializeServiceProvisioningError';
import type {ServiceProvisioningXmlError} from './serviceProvisioningXmlError';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeServiceProvisioningXmlError(writer: SerializationWriter, serviceProvisioningXmlError: ServiceProvisioningXmlError | undefined = {} as ServiceProvisioningXmlError) : void {
        serializeServiceProvisioningError(writer, serviceProvisioningXmlError)
        writer.writeStringValue("errorDetail", serviceProvisioningXmlError.errorDetail);
}
