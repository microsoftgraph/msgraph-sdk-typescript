import { type DirectoryObject } from './directoryObject';
import { type FeatureRolloutPolicy } from './featureRolloutPolicy';
import { serializeDirectoryObject } from './serializeDirectoryObject';
import { serializeEntity } from './serializeEntity';
import { StagedFeatureName } from './stagedFeatureName';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeFeatureRolloutPolicy(writer: SerializationWriter, featureRolloutPolicy: FeatureRolloutPolicy | undefined = {} as FeatureRolloutPolicy) : void {
        serializeEntity(writer, featureRolloutPolicy)
        writer.writeCollectionOfObjectValues<DirectoryObject>("appliesTo", featureRolloutPolicy.appliesTo, serializeDirectoryObject);
        writer.writeStringValue("description", featureRolloutPolicy.description);
        writer.writeStringValue("displayName", featureRolloutPolicy.displayName);
        writer.writeEnumValue<StagedFeatureName>("feature", featureRolloutPolicy.feature);
        writer.writeBooleanValue("isAppliedToOrganization", featureRolloutPolicy.isAppliedToOrganization);
        writer.writeBooleanValue("isEnabled", featureRolloutPolicy.isEnabled);
}
