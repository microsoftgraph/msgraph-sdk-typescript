import {AppManagementConfiguration} from './appManagementConfiguration';
import {AppManagementPolicy} from './appManagementPolicy';
import {createAppManagementConfigurationFromDiscriminatorValue} from './createAppManagementConfigurationFromDiscriminatorValue';
import {createDirectoryObjectFromDiscriminatorValue} from './createDirectoryObjectFromDiscriminatorValue';
import {deserializeIntoPolicyBase} from './deserializeIntoPolicyBase';
import {DirectoryObject} from './directoryObject';
import {serializeAppManagementConfiguration} from './serializeAppManagementConfiguration';
import {serializeDirectoryObject} from './serializeDirectoryObject';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAppManagementPolicy(appManagementPolicy: AppManagementPolicy | undefined = {} as AppManagementPolicy) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoPolicyBase(appManagementPolicy),
        "appliesTo": n => { appManagementPolicy.appliesTo = n.getCollectionOfObjectValues<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); },
        "isEnabled": n => { appManagementPolicy.isEnabled = n.getBooleanValue(); },
        "restrictions": n => { appManagementPolicy.restrictions = n.getObjectValue<AppManagementConfiguration>(createAppManagementConfigurationFromDiscriminatorValue); },
    }
}
