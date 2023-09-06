import { type Application } from './application';
import { type ApplicationServicePrincipal } from './applicationServicePrincipal';
import { serializeApplication } from './serializeApplication';
import { serializeServicePrincipal } from './serializeServicePrincipal';
import { type ServicePrincipal } from './servicePrincipal';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeApplicationServicePrincipal(writer: SerializationWriter, applicationServicePrincipal: ApplicationServicePrincipal | undefined = {} as ApplicationServicePrincipal) : void {
        writer.writeObjectValue<Application>("application", applicationServicePrincipal.application, serializeApplication);
        writer.writeStringValue("@odata.type", applicationServicePrincipal.odataType);
        writer.writeObjectValue<ServicePrincipal>("servicePrincipal", applicationServicePrincipal.servicePrincipal, serializeServicePrincipal);
        writer.writeAdditionalData(applicationServicePrincipal.additionalData);
}
