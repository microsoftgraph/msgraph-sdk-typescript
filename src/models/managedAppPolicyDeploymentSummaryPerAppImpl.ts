import {createMobileAppIdentifierFromDiscriminatorValue} from './createMobileAppIdentifierFromDiscriminatorValue';
import {MobileAppIdentifierImpl} from './index';
import {ManagedAppPolicyDeploymentSummaryPerApp} from './managedAppPolicyDeploymentSummaryPerApp';
import {MobileAppIdentifier} from './mobileAppIdentifier';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Represents policy deployment summary per app. */
export class ManagedAppPolicyDeploymentSummaryPerAppImpl implements ManagedAppPolicyDeploymentSummaryPerApp {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** Number of users the policy is applied. */
    private _configurationAppliedUserCount?: number | undefined;
    /** Deployment of an app. */
    private _mobileAppIdentifier?: MobileAppIdentifier | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown> | undefined) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Gets the configurationAppliedUserCount property value. Number of users the policy is applied.
     * @returns a integer
     */
    public get configurationAppliedUserCount() {
        return this._configurationAppliedUserCount;
    };
    /**
     * Sets the configurationAppliedUserCount property value. Number of users the policy is applied.
     * @param value Value to set for the configurationAppliedUserCount property.
     */
    public set configurationAppliedUserCount(value: number | undefined) {
        if(value) {
            this._configurationAppliedUserCount = value;
        }
    };
    /**
     * Instantiates a new managedAppPolicyDeploymentSummaryPerApp and sets the default values.
     * @param managedAppPolicyDeploymentSummaryPerAppParameterValue 
     */
    public constructor(managedAppPolicyDeploymentSummaryPerAppParameterValue?: ManagedAppPolicyDeploymentSummaryPerApp | undefined) {
        this._additionalData = managedAppPolicyDeploymentSummaryPerAppParameterValue?.additionalData ? managedAppPolicyDeploymentSummaryPerAppParameterValue?.additionalData! : {};
        this._configurationAppliedUserCount = managedAppPolicyDeploymentSummaryPerAppParameterValue?.configurationAppliedUserCount;
        this._mobileAppIdentifier = managedAppPolicyDeploymentSummaryPerAppParameterValue?.mobileAppIdentifier;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "configurationAppliedUserCount": n => { this.configurationAppliedUserCount = n.getNumberValue(); },
            "mobileAppIdentifier": n => { this.mobileAppIdentifier = n.getObjectValue<MobileAppIdentifierImpl>(createMobileAppIdentifierFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the mobileAppIdentifier property value. Deployment of an app.
     * @returns a MobileAppIdentifierInterface
     */
    public get mobileAppIdentifier() {
        return this._mobileAppIdentifier;
    };
    /**
     * Sets the mobileAppIdentifier property value. Deployment of an app.
     * @param value Value to set for the mobileAppIdentifier property.
     */
    public set mobileAppIdentifier(value: MobileAppIdentifier | undefined) {
        if(value) {
            this._mobileAppIdentifier = value instanceof MobileAppIdentifierImpl? value : new MobileAppIdentifierImpl(value);
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.configurationAppliedUserCount){
            writer.writeNumberValue("configurationAppliedUserCount", this.configurationAppliedUserCount);
        }
        if(this.mobileAppIdentifier){
            writer.writeObjectValue<MobileAppIdentifierImpl>("mobileAppIdentifier", (!this.mobileAppIdentifier || this.mobileAppIdentifier instanceof MobileAppIdentifierImpl? this.mobileAppIdentifier : new MobileAppIdentifierImpl(this.mobileAppIdentifier)));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
