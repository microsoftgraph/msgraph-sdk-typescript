import { createCustomExtensionAuthenticationConfigurationFromDiscriminatorValue } from './createCustomExtensionAuthenticationConfigurationFromDiscriminatorValue';
import { createCustomExtensionClientConfigurationFromDiscriminatorValue } from './createCustomExtensionClientConfigurationFromDiscriminatorValue';
import { createCustomExtensionEndpointConfigurationFromDiscriminatorValue } from './createCustomExtensionEndpointConfigurationFromDiscriminatorValue';
import { type CustomCalloutExtension } from './customCalloutExtension';
import { type CustomExtensionAuthenticationConfiguration } from './customExtensionAuthenticationConfiguration';
import { type CustomExtensionClientConfiguration } from './customExtensionClientConfiguration';
import { type CustomExtensionEndpointConfiguration } from './customExtensionEndpointConfiguration';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { serializeCustomExtensionAuthenticationConfiguration } from './serializeCustomExtensionAuthenticationConfiguration';
import { serializeCustomExtensionClientConfiguration } from './serializeCustomExtensionClientConfiguration';
import { serializeCustomExtensionEndpointConfiguration } from './serializeCustomExtensionEndpointConfiguration';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoCustomCalloutExtension(customCalloutExtension: CustomCalloutExtension | undefined = {} as CustomCalloutExtension) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(customCalloutExtension),
        "authenticationConfiguration": n => { customCalloutExtension.authenticationConfiguration = n.getObjectValue<CustomExtensionAuthenticationConfiguration>(createCustomExtensionAuthenticationConfigurationFromDiscriminatorValue); },
        "clientConfiguration": n => { customCalloutExtension.clientConfiguration = n.getObjectValue<CustomExtensionClientConfiguration>(createCustomExtensionClientConfigurationFromDiscriminatorValue); },
        "description": n => { customCalloutExtension.description = n.getStringValue(); },
        "displayName": n => { customCalloutExtension.displayName = n.getStringValue(); },
        "endpointConfiguration": n => { customCalloutExtension.endpointConfiguration = n.getObjectValue<CustomExtensionEndpointConfiguration>(createCustomExtensionEndpointConfigurationFromDiscriminatorValue); },
    }
}
