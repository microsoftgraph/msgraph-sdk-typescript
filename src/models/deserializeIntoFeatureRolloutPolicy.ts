import { createDirectoryObjectFromDiscriminatorValue } from './createDirectoryObjectFromDiscriminatorValue';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type DirectoryObject } from './directoryObject';
import { type FeatureRolloutPolicy } from './featureRolloutPolicy';
import { serializeDirectoryObject } from './serializeDirectoryObject';
import { StagedFeatureName } from './stagedFeatureName';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoFeatureRolloutPolicy(featureRolloutPolicy: FeatureRolloutPolicy | undefined = {} as FeatureRolloutPolicy) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(featureRolloutPolicy),
        "appliesTo": n => { featureRolloutPolicy.appliesTo = n.getCollectionOfObjectValues<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); },
        "description": n => { featureRolloutPolicy.description = n.getStringValue(); },
        "displayName": n => { featureRolloutPolicy.displayName = n.getStringValue(); },
        "feature": n => { featureRolloutPolicy.feature = n.getEnumValue<StagedFeatureName>(StagedFeatureName); },
        "isAppliedToOrganization": n => { featureRolloutPolicy.isAppliedToOrganization = n.getBooleanValue(); },
        "isEnabled": n => { featureRolloutPolicy.isEnabled = n.getBooleanValue(); },
    }
}
