import {Application} from '../application';
import {createApplicationFromDiscriminatorValue} from '../createApplicationFromDiscriminatorValue';
import {deserializeIntoCustomExtensionCallbackConfiguration} from '../deserializeIntoCustomExtensionCallbackConfiguration';
import {serializeApplication} from '../serializeApplication';
import {CustomTaskExtensionCallbackConfiguration} from './customTaskExtensionCallbackConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCustomTaskExtensionCallbackConfiguration(customTaskExtensionCallbackConfiguration: CustomTaskExtensionCallbackConfiguration | undefined = {} as CustomTaskExtensionCallbackConfiguration) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoCustomExtensionCallbackConfiguration(customTaskExtensionCallbackConfiguration),
        "authorizedApps": n => { customTaskExtensionCallbackConfiguration.authorizedApps = n.getCollectionOfObjectValues<Application>(createApplicationFromDiscriminatorValue); },
    }
}
