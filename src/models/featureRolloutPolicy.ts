import {DirectoryObject} from './directoryObject';
import {Entity} from './entity';
import {StagedFeatureName} from './stagedFeatureName';

export interface FeatureRolloutPolicy extends Entity{
    /** Nullable. Specifies a list of directoryObjects that feature is enabled for. */
    appliesTo?:DirectoryObject[] | undefined;
    /** A description for this feature rollout policy. */
    description?:string | undefined;
    /** The display name for this  feature rollout policy. */
    displayName?:string | undefined;
    /** Possible values are: passthroughAuthentication, seamlessSso, passwordHashSync, emailAsAlternateId, unknownFutureValue. */
    feature?:StagedFeatureName | undefined;
    /** Indicates whether this feature rollout policy should be applied to the entire organization. */
    isAppliedToOrganization?:boolean | undefined;
    /** Indicates whether the feature rollout is enabled. */
    isEnabled?:boolean | undefined;
}
