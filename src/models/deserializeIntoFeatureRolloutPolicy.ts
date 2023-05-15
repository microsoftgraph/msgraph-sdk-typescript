import {createDirectoryObjectFromDiscriminatorValue} from './createDirectoryObjectFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {DirectoryObject} from './directoryObject';
import {FeatureRolloutPolicy} from './featureRolloutPolicy';
import {serializeDirectoryObject} from './serializeDirectoryObject';
import {StagedFeatureName} from './stagedFeatureName';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

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
