import {createManagedAppPolicyDeploymentSummaryFromDiscriminatorValue} from './createManagedAppPolicyDeploymentSummaryFromDiscriminatorValue';
import {createManagedMobileAppFromDiscriminatorValue} from './createManagedMobileAppFromDiscriminatorValue';
import {createTargetedManagedAppPolicyAssignmentFromDiscriminatorValue} from './createTargetedManagedAppPolicyAssignmentFromDiscriminatorValue';
import {ManagedAppConfigurationImpl, ManagedAppPolicyDeploymentSummaryImpl, ManagedMobileAppImpl, TargetedManagedAppPolicyAssignmentImpl} from './index';
import {ManagedAppPolicyDeploymentSummary} from './managedAppPolicyDeploymentSummary';
import {ManagedMobileApp} from './managedMobileApp';
import {TargetedManagedAppConfiguration} from './targetedManagedAppConfiguration';
import {TargetedManagedAppPolicyAssignment} from './targetedManagedAppPolicyAssignment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TargetedManagedAppConfigurationImpl extends ManagedAppConfigurationImpl implements TargetedManagedAppConfiguration {
    /** List of apps to which the policy is deployed. */
    private _apps?: ManagedMobileApp[] | undefined;
    /** Navigation property to list of inclusion and exclusion groups to which the policy is deployed. */
    private _assignments?: TargetedManagedAppPolicyAssignment[] | undefined;
    /** Count of apps to which the current policy is deployed. */
    private _deployedAppCount?: number | undefined;
    /** Navigation property to deployment summary of the configuration. */
    private _deploymentSummary?: ManagedAppPolicyDeploymentSummary | undefined;
    /** Indicates if the policy is deployed to any inclusion groups or not. */
    private _isAssigned?: boolean | undefined;
    /**
     * Gets the apps property value. List of apps to which the policy is deployed.
     * @returns a ManagedMobileAppInterface
     */
    public get apps() {
        return this._apps;
    };
    /**
     * Sets the apps property value. List of apps to which the policy is deployed.
     * @param value Value to set for the apps property.
     */
    public set apps(value: ManagedMobileApp[] | undefined) {
        if(value) {
            const appsArrValue: ManagedMobileAppImpl[] = [];
            this.apps?.forEach(element => {
                appsArrValue.push((element instanceof ManagedMobileAppImpl? element as ManagedMobileAppImpl:new ManagedMobileAppImpl(element)));
            });
            this._apps = appsArrValue;
        }
    };
    /**
     * Gets the assignments property value. Navigation property to list of inclusion and exclusion groups to which the policy is deployed.
     * @returns a TargetedManagedAppPolicyAssignmentInterface
     */
    public get assignments() {
        return this._assignments;
    };
    /**
     * Sets the assignments property value. Navigation property to list of inclusion and exclusion groups to which the policy is deployed.
     * @param value Value to set for the assignments property.
     */
    public set assignments(value: TargetedManagedAppPolicyAssignment[] | undefined) {
        if(value) {
            const assignmentsArrValue: TargetedManagedAppPolicyAssignmentImpl[] = [];
            this.assignments?.forEach(element => {
                assignmentsArrValue.push((element instanceof TargetedManagedAppPolicyAssignmentImpl? element as TargetedManagedAppPolicyAssignmentImpl:new TargetedManagedAppPolicyAssignmentImpl(element)));
            });
            this._assignments = assignmentsArrValue;
        }
    };
    /**
     * Instantiates a new TargetedManagedAppConfiguration and sets the default values.
     * @param targetedManagedAppConfigurationParameterValue 
     */
    public constructor(targetedManagedAppConfigurationParameterValue?: TargetedManagedAppConfiguration | undefined) {
        super(targetedManagedAppConfigurationParameterValue);
        this._apps = targetedManagedAppConfigurationParameterValue?.apps;
        this._assignments = targetedManagedAppConfigurationParameterValue?.assignments;
        this._deployedAppCount = targetedManagedAppConfigurationParameterValue?.deployedAppCount;
        this._deploymentSummary = targetedManagedAppConfigurationParameterValue?.deploymentSummary;
        this._isAssigned = targetedManagedAppConfigurationParameterValue?.isAssigned;
    };
    /**
     * Gets the deployedAppCount property value. Count of apps to which the current policy is deployed.
     * @returns a integer
     */
    public get deployedAppCount() {
        return this._deployedAppCount;
    };
    /**
     * Sets the deployedAppCount property value. Count of apps to which the current policy is deployed.
     * @param value Value to set for the deployedAppCount property.
     */
    public set deployedAppCount(value: number | undefined) {
        if(value) {
            this._deployedAppCount = value;
        }
    };
    /**
     * Gets the deploymentSummary property value. Navigation property to deployment summary of the configuration.
     * @returns a ManagedAppPolicyDeploymentSummaryInterface
     */
    public get deploymentSummary() {
        return this._deploymentSummary;
    };
    /**
     * Sets the deploymentSummary property value. Navigation property to deployment summary of the configuration.
     * @param value Value to set for the deploymentSummary property.
     */
    public set deploymentSummary(value: ManagedAppPolicyDeploymentSummary | undefined) {
        if(value) {
            this._deploymentSummary = value instanceof ManagedAppPolicyDeploymentSummaryImpl? value as ManagedAppPolicyDeploymentSummaryImpl: new ManagedAppPolicyDeploymentSummaryImpl(value);
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "apps": n => { this.apps = n.getCollectionOfObjectValues<ManagedMobileAppImpl>(createManagedMobileAppFromDiscriminatorValue); },
            "assignments": n => { this.assignments = n.getCollectionOfObjectValues<TargetedManagedAppPolicyAssignmentImpl>(createTargetedManagedAppPolicyAssignmentFromDiscriminatorValue); },
            "deployedAppCount": n => { this.deployedAppCount = n.getNumberValue(); },
            "deploymentSummary": n => { this.deploymentSummary = n.getObjectValue<ManagedAppPolicyDeploymentSummaryImpl>(createManagedAppPolicyDeploymentSummaryFromDiscriminatorValue); },
            "isAssigned": n => { this.isAssigned = n.getBooleanValue(); },
        };
    };
    /**
     * Gets the isAssigned property value. Indicates if the policy is deployed to any inclusion groups or not.
     * @returns a boolean
     */
    public get isAssigned() {
        return this._isAssigned;
    };
    /**
     * Sets the isAssigned property value. Indicates if the policy is deployed to any inclusion groups or not.
     * @param value Value to set for the isAssigned property.
     */
    public set isAssigned(value: boolean | undefined) {
        if(value) {
            this._isAssigned = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.apps && this.apps.length != 0){        const appsArrValue: ManagedMobileAppImpl[] = [];
        this.apps?.forEach(element => {
            appsArrValue.push((element instanceof ManagedMobileAppImpl? element as ManagedMobileAppImpl:new ManagedMobileAppImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ManagedMobileAppImpl>("apps", appsArrValue);
        }
        if(this.assignments && this.assignments.length != 0){        const assignmentsArrValue: TargetedManagedAppPolicyAssignmentImpl[] = [];
        this.assignments?.forEach(element => {
            assignmentsArrValue.push((element instanceof TargetedManagedAppPolicyAssignmentImpl? element as TargetedManagedAppPolicyAssignmentImpl:new TargetedManagedAppPolicyAssignmentImpl(element)));
        });
            writer.writeCollectionOfObjectValues<TargetedManagedAppPolicyAssignmentImpl>("assignments", assignmentsArrValue);
        }
        if(this.deployedAppCount){
            writer.writeNumberValue("deployedAppCount", this.deployedAppCount);
        }
        if(this.deploymentSummary){
            writer.writeObjectValue<ManagedAppPolicyDeploymentSummaryImpl>("deploymentSummary", (this.deploymentSummary instanceof ManagedAppPolicyDeploymentSummaryImpl? this.deploymentSummary as ManagedAppPolicyDeploymentSummaryImpl: new ManagedAppPolicyDeploymentSummaryImpl(this.deploymentSummary)));
        }
        if(this.isAssigned){
            writer.writeBooleanValue("isAssigned", this.isAssigned);
        }
    };
}
