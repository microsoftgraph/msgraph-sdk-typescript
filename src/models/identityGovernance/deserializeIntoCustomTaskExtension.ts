import {createCustomExtensionCallbackConfigurationFromDiscriminatorValue} from '../createCustomExtensionCallbackConfigurationFromDiscriminatorValue';
import {createUserFromDiscriminatorValue} from '../createUserFromDiscriminatorValue';
import {CustomExtensionCallbackConfiguration} from '../customExtensionCallbackConfiguration';
import {deserializeIntoCustomCalloutExtension} from '../deserializeIntoCustomCalloutExtension';
import {serializeCustomExtensionCallbackConfiguration} from '../serializeCustomExtensionCallbackConfiguration';
import {serializeUser} from '../serializeUser';
import {User} from '../user';
import {CustomTaskExtension} from './customTaskExtension';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCustomTaskExtension(customTaskExtension: CustomTaskExtension | undefined = {} as CustomTaskExtension) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoCustomCalloutExtension(customTaskExtension),
        "callbackConfiguration": n => { customTaskExtension.callbackConfiguration = n.getObjectValue<CustomExtensionCallbackConfiguration>(createCustomExtensionCallbackConfigurationFromDiscriminatorValue); },
        "createdBy": n => { customTaskExtension.createdBy = n.getObjectValue<User>(createUserFromDiscriminatorValue); },
        "createdDateTime": n => { customTaskExtension.createdDateTime = n.getDateValue(); },
        "lastModifiedBy": n => { customTaskExtension.lastModifiedBy = n.getObjectValue<User>(createUserFromDiscriminatorValue); },
        "lastModifiedDateTime": n => { customTaskExtension.lastModifiedDateTime = n.getDateValue(); },
    }
}
