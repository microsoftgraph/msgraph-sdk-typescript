import { type Application } from '../application';
import { serializeApplication } from '../serializeApplication';
import { serializeCustomExtensionCallbackConfiguration } from '../serializeCustomExtensionCallbackConfiguration';
import { type CustomTaskExtensionCallbackConfiguration } from './customTaskExtensionCallbackConfiguration';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeCustomTaskExtensionCallbackConfiguration(writer: SerializationWriter, customTaskExtensionCallbackConfiguration: CustomTaskExtensionCallbackConfiguration | undefined = {} as CustomTaskExtensionCallbackConfiguration) : void {
        serializeCustomExtensionCallbackConfiguration(writer, customTaskExtensionCallbackConfiguration)
        writer.writeCollectionOfObjectValues<Application>("authorizedApps", customTaskExtensionCallbackConfiguration.authorizedApps, serializeApplication);
}
