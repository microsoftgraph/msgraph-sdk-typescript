import { type CustomCalloutExtension } from './customCalloutExtension';
import { type CustomExtensionAuthenticationConfiguration } from './customExtensionAuthenticationConfiguration';
import { type CustomExtensionClientConfiguration } from './customExtensionClientConfiguration';
import { type CustomExtensionEndpointConfiguration } from './customExtensionEndpointConfiguration';
import { serializeCustomExtensionAuthenticationConfiguration } from './serializeCustomExtensionAuthenticationConfiguration';
import { serializeCustomExtensionClientConfiguration } from './serializeCustomExtensionClientConfiguration';
import { serializeCustomExtensionEndpointConfiguration } from './serializeCustomExtensionEndpointConfiguration';
import { serializeEntity } from './serializeEntity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeCustomCalloutExtension(writer: SerializationWriter, customCalloutExtension: CustomCalloutExtension | undefined = {} as CustomCalloutExtension) : void {
        serializeEntity(writer, customCalloutExtension)
        writer.writeObjectValue<CustomExtensionAuthenticationConfiguration>("authenticationConfiguration", customCalloutExtension.authenticationConfiguration, serializeCustomExtensionAuthenticationConfiguration);
        writer.writeObjectValue<CustomExtensionClientConfiguration>("clientConfiguration", customCalloutExtension.clientConfiguration, serializeCustomExtensionClientConfiguration);
        writer.writeStringValue("description", customCalloutExtension.description);
        writer.writeStringValue("displayName", customCalloutExtension.displayName);
        writer.writeObjectValue<CustomExtensionEndpointConfiguration>("endpointConfiguration", customCalloutExtension.endpointConfiguration, serializeCustomExtensionEndpointConfiguration);
}
