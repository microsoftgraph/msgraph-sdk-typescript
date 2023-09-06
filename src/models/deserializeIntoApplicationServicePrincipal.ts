import { type Application } from './application';
import { type ApplicationServicePrincipal } from './applicationServicePrincipal';
import { createApplicationFromDiscriminatorValue } from './createApplicationFromDiscriminatorValue';
import { createServicePrincipalFromDiscriminatorValue } from './createServicePrincipalFromDiscriminatorValue';
import { serializeApplication } from './serializeApplication';
import { serializeServicePrincipal } from './serializeServicePrincipal';
import { type ServicePrincipal } from './servicePrincipal';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoApplicationServicePrincipal(applicationServicePrincipal: ApplicationServicePrincipal | undefined = {} as ApplicationServicePrincipal) : Record<string, (node: ParseNode) => void> {
    return {
        "application": n => { applicationServicePrincipal.application = n.getObjectValue<Application>(createApplicationFromDiscriminatorValue); },
        "@odata.type": n => { applicationServicePrincipal.odataType = n.getStringValue(); },
        "servicePrincipal": n => { applicationServicePrincipal.servicePrincipal = n.getObjectValue<ServicePrincipal>(createServicePrincipalFromDiscriminatorValue); },
    }
}
