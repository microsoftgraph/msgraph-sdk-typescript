import {createManagedAppPolicyDeploymentSummaryFromDiscriminatorValue} from './createManagedAppPolicyDeploymentSummaryFromDiscriminatorValue';
import {createManagedMobileAppFromDiscriminatorValue} from './createManagedMobileAppFromDiscriminatorValue';
import {createTargetedManagedAppPolicyAssignmentFromDiscriminatorValue} from './createTargetedManagedAppPolicyAssignmentFromDiscriminatorValue';
import {ManagedAppConfigurationImpl, ManagedAppPolicyDeploymentSummaryImpl, ManagedMobileAppImpl, TargetedManagedAppPolicyAssignmentImpl} from './index';
import {ManagedAppPolicyDeploymentSummary} from './managedAppPolicyDeploymentSummary';
import {ManagedMobileApp} from './managedMobileApp';
import {TargetedManagedAppConfiguration} from './targetedManagedAppConfiguration';
import {TargetedManagedAppPolicyAssignment} from './targetedManagedAppPolicyAssignment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Configuration used to deliver a set of custom settings as-is to all users in the targeted security group */
export class TargetedManagedAppConfigurationImpl extends ManagedAppConfigurationImpl implements Parsable, TargetedManagedAppConfiguration {
    /** List of apps to which the policy is deployed. */
    public apps?: ManagedMobileApp[] | undefined;
    /** Navigation property to list of inclusion and exclusion groups to which the policy is deployed. */
    public assignments?: TargetedManagedAppPolicyAssignment[] | undefined;
    /** Count of apps to which the current policy is deployed. */
    public deployedAppCount?: number | undefined;
    /** Navigation property to deployment summary of the configuration. */
    public deploymentSummary?: ManagedAppPolicyDeploymentSummary | undefined;
    /** Indicates if the policy is deployed to any inclusion groups or not. */
    public isAssigned?: boolean | undefined;
    /**
     * Instantiates a new targetedManagedAppConfiguration and sets the default values.
     * @param targetedManagedAppConfigurationParameterValue 
     */
    public constructor(targetedManagedAppConfigurationParameterValue?: TargetedManagedAppConfiguration | undefined) {
        super();
        this.apps = targetedManagedAppConfigurationParameterValue?.apps ;
        this.assignments = targetedManagedAppConfigurationParameterValue?.assignments ;
        this.deployedAppCount = targetedManagedAppConfigurationParameterValue?.deployedAppCount ;
        this.deploymentSummary = targetedManagedAppConfigurationParameterValue?.deploymentSummary ;
        this.isAssigned = targetedManagedAppConfigurationParameterValue?.isAssigned ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.apps && this.apps.length != 0){        const appsArrValue: ManagedMobileAppImpl[] = []; this.apps?.forEach(element => {appsArrValue.push(new ManagedMobileAppImpl(element));});
        writer.writeCollectionOfObjectValues<ManagedMobileAppImpl>("apps", appsArrValue);
        }
        if(this.assignments && this.assignments.length != 0){        const assignmentsArrValue: TargetedManagedAppPolicyAssignmentImpl[] = []; this.assignments?.forEach(element => {assignmentsArrValue.push(new TargetedManagedAppPolicyAssignmentImpl(element));});
        writer.writeCollectionOfObjectValues<TargetedManagedAppPolicyAssignmentImpl>("assignments", assignmentsArrValue);
        }
        if(this.deployedAppCount){
        writer.writeNumberValue("deployedAppCount", this.deployedAppCount);
        }
        if(this.deploymentSummary){
        writer.writeObjectValue<ManagedAppPolicyDeploymentSummaryImpl>("deploymentSummary", new ManagedAppPolicyDeploymentSummaryImpl(this.deploymentSummary));
        }
        if(this.isAssigned){
        writer.writeBooleanValue("isAssigned", this.isAssigned);
        }
    };
}
