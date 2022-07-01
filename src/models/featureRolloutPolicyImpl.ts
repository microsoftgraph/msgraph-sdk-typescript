import {createDirectoryObjectFromDiscriminatorValue} from './createDirectoryObjectFromDiscriminatorValue';
import {DirectoryObject} from './directoryObject';
import {FeatureRolloutPolicy} from './featureRolloutPolicy';
import {DirectoryObjectImpl, EntityImpl} from './index';
import {StagedFeatureName} from './stagedFeatureName';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the policyRoot singleton. */
export class FeatureRolloutPolicyImpl extends EntityImpl implements FeatureRolloutPolicy {
    /** Nullable. Specifies a list of directoryObjects that feature is enabled for. */
    private _appliesTo?: DirectoryObject[] | undefined;
    /** A description for this feature rollout policy. */
    private _description?: string | undefined;
    /** The display name for this  feature rollout policy. */
    private _displayName?: string | undefined;
    /** Possible values are: passthroughAuthentication, seamlessSso, passwordHashSync, emailAsAlternateId, unknownFutureValue. */
    private _feature?: StagedFeatureName | undefined;
    /** Indicates whether this feature rollout policy should be applied to the entire organization. */
    private _isAppliedToOrganization?: boolean | undefined;
    /** Indicates whether the feature rollout is enabled. */
    private _isEnabled?: boolean | undefined;
    /**
     * Gets the appliesTo property value. Nullable. Specifies a list of directoryObjects that feature is enabled for.
     * @returns a DirectoryObjectInterface
     */
    public get appliesTo() {
        return this._appliesTo;
    };
    /**
     * Sets the appliesTo property value. Nullable. Specifies a list of directoryObjects that feature is enabled for.
     * @param value Value to set for the appliesTo property.
     */
    public set appliesTo(value: DirectoryObject[] | undefined) {
        if(value) {
            const appliesToArrValue: DirectoryObjectImpl[] = [];
            this.appliesTo?.forEach(element => {
                appliesToArrValue.push((element instanceof DirectoryObjectImpl? element as DirectoryObjectImpl:new DirectoryObjectImpl(element)));
            });
            this._appliesTo = appliesToArrValue;
        }
    };
    /**
     * Instantiates a new featureRolloutPolicy and sets the default values.
     * @param featureRolloutPolicyParameterValue 
     */
    public constructor(featureRolloutPolicyParameterValue?: FeatureRolloutPolicy | undefined) {
        super(featureRolloutPolicyParameterValue);
        this._appliesTo = featureRolloutPolicyParameterValue?.appliesTo;
        this._description = featureRolloutPolicyParameterValue?.description;
        this._displayName = featureRolloutPolicyParameterValue?.displayName;
        this._feature = featureRolloutPolicyParameterValue?.feature;
        this._isAppliedToOrganization = featureRolloutPolicyParameterValue?.isAppliedToOrganization;
        this._isEnabled = featureRolloutPolicyParameterValue?.isEnabled;
    };
    /**
     * Gets the description property value. A description for this feature rollout policy.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. A description for this feature rollout policy.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        if(value) {
            this._description = value;
        }
    };
    /**
     * Gets the displayName property value. The display name for this  feature rollout policy.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The display name for this  feature rollout policy.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        if(value) {
            this._displayName = value;
        }
    };
    /**
     * Gets the feature property value. Possible values are: passthroughAuthentication, seamlessSso, passwordHashSync, emailAsAlternateId, unknownFutureValue.
     * @returns a stagedFeatureName
     */
    public get feature() {
        return this._feature;
    };
    /**
     * Sets the feature property value. Possible values are: passthroughAuthentication, seamlessSso, passwordHashSync, emailAsAlternateId, unknownFutureValue.
     * @param value Value to set for the feature property.
     */
    public set feature(value: StagedFeatureName | undefined) {
        if(value) {
            this._feature = value;
        }
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
     * Gets the isAppliedToOrganization property value. Indicates whether this feature rollout policy should be applied to the entire organization.
     * @returns a boolean
     */
    public get isAppliedToOrganization() {
        return this._isAppliedToOrganization;
    };
    /**
     * Sets the isAppliedToOrganization property value. Indicates whether this feature rollout policy should be applied to the entire organization.
     * @param value Value to set for the isAppliedToOrganization property.
     */
    public set isAppliedToOrganization(value: boolean | undefined) {
        if(value) {
            this._isAppliedToOrganization = value;
        }
    };
    /**
     * Gets the isEnabled property value. Indicates whether the feature rollout is enabled.
     * @returns a boolean
     */
    public get isEnabled() {
        return this._isEnabled;
    };
    /**
     * Sets the isEnabled property value. Indicates whether the feature rollout is enabled.
     * @param value Value to set for the isEnabled property.
     */
    public set isEnabled(value: boolean | undefined) {
        if(value) {
            this._isEnabled = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.appliesTo && this.appliesTo.length != 0){        const appliesToArrValue: DirectoryObjectImpl[] = [];
        this.appliesTo?.forEach(element => {
            appliesToArrValue.push((element instanceof DirectoryObjectImpl? element as DirectoryObjectImpl:new DirectoryObjectImpl(element)));
        });
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
