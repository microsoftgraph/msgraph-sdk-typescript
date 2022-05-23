import {createDirectoryObjectFromDiscriminatorValue} from './createDirectoryObjectFromDiscriminatorValue';
import {DirectoryObject} from './directoryObject';
import {FeatureRolloutPolicy} from './featureRolloutPolicy';
import {DirectoryObjectImpl, EntityImpl} from './index';
import {StagedFeatureName} from './stagedFeatureName';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the policyRoot singleton. */
export class FeatureRolloutPolicyImpl extends EntityImpl implements FeatureRolloutPolicy, Parsable {
    /** Nullable. Specifies a list of directoryObjects that feature is enabled for. */
    public appliesTo?: DirectoryObject[] | undefined;
    /** A description for this feature rollout policy. */
    public description?: string | undefined;
    /** The display name for this  feature rollout policy. */
    public displayName?: string | undefined;
    /** Possible values are: passthroughAuthentication, seamlessSso, passwordHashSync, emailAsAlternateId, unknownFutureValue. */
    public feature?: StagedFeatureName | undefined;
    /** Indicates whether this feature rollout policy should be applied to the entire organization. */
    public isAppliedToOrganization?: boolean | undefined;
    /** Indicates whether the feature rollout is enabled. */
    public isEnabled?: boolean | undefined;
    /**
     * Instantiates a new featureRolloutPolicy and sets the default values.
     * @param featureRolloutPolicyParameterValue 
     */
    public constructor(featureRolloutPolicyParameterValue?: FeatureRolloutPolicy | undefined) {
        super();
        this.appliesTo = featureRolloutPolicyParameterValue?.appliesTo ;
        this.description = featureRolloutPolicyParameterValue?.description ;
        this.displayName = featureRolloutPolicyParameterValue?.displayName ;
        this.feature = featureRolloutPolicyParameterValue?.feature ;
        this.isAppliedToOrganization = featureRolloutPolicyParameterValue?.isAppliedToOrganization ;
        this.isEnabled = featureRolloutPolicyParameterValue?.isEnabled ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "appliesTo": n => { this.appliesTo = n.getCollectionOfObjectValues<DirectoryObjectImpl>(createDirectoryObjectFromDiscriminatorValue); },
            "description": n => { this.description = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "feature": n => { this.feature = n.getEnumValue<StagedFeatureName>(StagedFeatureName); },
            "isAppliedToOrganization": n => { this.isAppliedToOrganization = n.getBooleanValue(); },
            "isEnabled": n => { this.isEnabled = n.getBooleanValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.appliesTo && this.appliesTo.length != 0){        const appliesToArrValue: DirectoryObjectImpl[] = []; this.appliesTo?.forEach(element => {appliesToArrValue.push(new DirectoryObjectImpl(element));});
        writer.writeCollectionOfObjectValues<DirectoryObjectImpl>("appliesTo", appliesToArrValue);
        }
        if(this.description){
        writer.writeStringValue("description", this.description);
        }
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.feature){
        writer.writeEnumValue<StagedFeatureName>("feature", this.feature);
        }
        if(this.isAppliedToOrganization){
        writer.writeBooleanValue("isAppliedToOrganization", this.isAppliedToOrganization);
        }
        if(this.isEnabled){
        writer.writeBooleanValue("isEnabled", this.isEnabled);
        }
    };
}
