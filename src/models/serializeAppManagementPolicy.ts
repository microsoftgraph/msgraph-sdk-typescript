import { type AppManagementConfiguration } from './appManagementConfiguration';
import { type AppManagementPolicy } from './appManagementPolicy';
import { type DirectoryObject } from './directoryObject';
import { serializeAppManagementConfiguration } from './serializeAppManagementConfiguration';
import { serializeDirectoryObject } from './serializeDirectoryObject';
import { serializePolicyBase } from './serializePolicyBase';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAppManagementPolicy(writer: SerializationWriter, appManagementPolicy: AppManagementPolicy | undefined = {} as AppManagementPolicy) : void {
        serializePolicyBase(writer, appManagementPolicy)
        writer.writeCollectionOfObjectValues<DirectoryObject>("appliesTo", appManagementPolicy.appliesTo, serializeDirectoryObject);
        writer.writeBooleanValue("isEnabled", appManagementPolicy.isEnabled);
        writer.writeObjectValue<AppManagementConfiguration>("restrictions", appManagementPolicy.restrictions, serializeAppManagementConfiguration);
}
