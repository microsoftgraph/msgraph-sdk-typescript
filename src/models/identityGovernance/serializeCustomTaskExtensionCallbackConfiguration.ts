import {Application} from '../application';
import {serializeApplication} from '../serializeApplication';
import {serializeCustomExtensionCallbackConfiguration} from '../serializeCustomExtensionCallbackConfiguration';
import {CustomTaskExtensionCallbackConfiguration} from './customTaskExtensionCallbackConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCustomTaskExtensionCallbackConfiguration(writer: SerializationWriter, customTaskExtensionCallbackConfiguration: CustomTaskExtensionCallbackConfiguration | undefined = {} as CustomTaskExtensionCallbackConfiguration) : void {
        serializeCustomExtensionCallbackConfiguration(writer, customTaskExtensionCallbackConfiguration)
        writer.writeCollectionOfObjectValues<Application>("authorizedApps", customTaskExtensionCallbackConfiguration.authorizedApps, serializeApplication);
}
