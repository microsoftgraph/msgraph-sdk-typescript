import {Application} from './application';
import {ApplicationServicePrincipal} from './applicationServicePrincipal';
import {serializeApplication} from './serializeApplication';
import {serializeServicePrincipal} from './serializeServicePrincipal';
import {ServicePrincipal} from './servicePrincipal';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeApplicationServicePrincipal(applicationServicePrincipal: ApplicationServicePrincipal | undefined = {} as ApplicationServicePrincipal, writer: SerializationWriter) : void {
        writer.writeObjectValue<Application>("application", applicationServicePrincipal.application, serializeApplication);
        writer.writeStringValue("@odata.type", applicationServicePrincipal.odataType);
        writer.writeObjectValue<ServicePrincipal>("servicePrincipal", applicationServicePrincipal.servicePrincipal, serializeServicePrincipal);
        writer.writeAdditionalData(applicationServicePrincipal.additionalData);
}
