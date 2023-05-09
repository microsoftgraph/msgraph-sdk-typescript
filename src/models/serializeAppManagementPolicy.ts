import {AppManagementConfiguration} from './appManagementConfiguration';
import {AppManagementPolicy} from './appManagementPolicy';
import {DirectoryObject} from './directoryObject';
import {serializeAppManagementConfiguration} from './serializeAppManagementConfiguration';
import {serializeDirectoryObject} from './serializeDirectoryObject';
import {serializePolicyBase} from './serializePolicyBase';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAppManagementPolicy(writer: SerializationWriter, appManagementPolicy: AppManagementPolicy | undefined = {} as AppManagementPolicy) : void {
        serializePolicyBase(writer, appManagementPolicy)
        writer.writeCollectionOfObjectValues<DirectoryObject>("appliesTo", appManagementPolicy.appliesTo, serializeDirectoryObject);
        writer.writeBooleanValue("isEnabled", appManagementPolicy.isEnabled);
        writer.writeObjectValue<AppManagementConfiguration>("restrictions", appManagementPolicy.restrictions, serializeAppManagementConfiguration);
}
