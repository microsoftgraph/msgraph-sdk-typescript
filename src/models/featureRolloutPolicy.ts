import {DirectoryObject} from './directoryObject';
import {Entity} from './entity';
import {StagedFeatureName} from './stagedFeatureName';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface FeatureRolloutPolicy extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Nullable. Specifies a list of directoryObjects that feature is enabled for. */
    appliesTo?: DirectoryObject[] | undefined;
    /** A description for this feature rollout policy. */
    description?: string | undefined;
    /** The display name for this  feature rollout policy. */
    displayName?: string | undefined;
    /** Possible values are: passthroughAuthentication, seamlessSso, passwordHashSync, emailAsAlternateId, unknownFutureValue. */
    feature?: StagedFeatureName | undefined;
    /** Indicates whether this feature rollout policy should be applied to the entire organization. */
    isAppliedToOrganization?: boolean | undefined;
    /** Indicates whether the feature rollout is enabled. */
    isEnabled?: boolean | undefined;
}
