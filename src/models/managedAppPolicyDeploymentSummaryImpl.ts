import {createManagedAppPolicyDeploymentSummaryPerAppFromDiscriminatorValue} from './createManagedAppPolicyDeploymentSummaryPerAppFromDiscriminatorValue';
import {EntityImpl, ManagedAppPolicyDeploymentSummaryPerAppImpl} from './index';
import {ManagedAppPolicyDeploymentSummary} from './managedAppPolicyDeploymentSummary';
import {ManagedAppPolicyDeploymentSummaryPerApp} from './managedAppPolicyDeploymentSummaryPerApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ManagedAppPolicyDeploymentSummaryImpl extends EntityImpl implements ManagedAppPolicyDeploymentSummary, Parsable {
    /** Not yet documented  */
    configurationDeployedUserCount?: number | undefined;
    /** Not yet documented  */
    configurationDeploymentSummaryPerApp?: ManagedAppPolicyDeploymentSummaryPerApp[] | undefined;
    /** Not yet documented  */
    displayName?: string | undefined;
    /** Not yet documented  */
    lastRefreshTime?: Date | undefined;
    /** Version of the entity.  */
    version?: string | undefined;
    /**
     * Instantiates a new managedAppPolicyDeploymentSummary and sets the default values.
     * @param managedAppPolicyDeploymentSummaryParameterValue 
     */
    public constructor(managedAppPolicyDeploymentSummaryParameterValue?: ManagedAppPolicyDeploymentSummary | undefined) {
        super();
        this.configurationDeployedUserCount = managedAppPolicyDeploymentSummaryParameterValue?.configurationDeployedUserCount ;
        this.configurationDeploymentSummaryPerApp = managedAppPolicyDeploymentSummaryParameterValue?.configurationDeploymentSummaryPerApp ;
        this.displayName = managedAppPolicyDeploymentSummaryParameterValue?.displayName ;
        this.lastRefreshTime = managedAppPolicyDeploymentSummaryParameterValue?.lastRefreshTime ;
        this.version = managedAppPolicyDeploymentSummaryParameterValue?.version ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "configurationDeployedUserCount": n => { this.configurationDeployedUserCount = n.getNumberValue(); },
            "configurationDeploymentSummaryPerApp": n => { this.configurationDeploymentSummaryPerApp = n.getCollectionOfObjectValues<ManagedAppPolicyDeploymentSummaryPerAppImpl>(createManagedAppPolicyDeploymentSummaryPerAppFromDiscriminatorValue); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "lastRefreshTime": n => { this.lastRefreshTime = n.getDateValue(); },
            "version": n => { this.version = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.configurationDeployedUserCount){
        if(this.configurationDeployedUserCount)
        writer.writeNumberValue("configurationDeployedUserCount", this.configurationDeployedUserCount);
        }
        if(this.configurationDeploymentSummaryPerApp){
        const configurationDeploymentSummaryPerAppArrValue: ManagedAppPolicyDeploymentSummaryPerAppImpl[] = []; this.configurationDeploymentSummaryPerApp?.forEach(element => {configurationDeploymentSummaryPerAppArrValue.push(new ManagedAppPolicyDeploymentSummaryPerAppImpl(element));});
        writer.writeCollectionOfObjectValues<ManagedAppPolicyDeploymentSummaryPerAppImpl>("configurationDeploymentSummaryPerApp", configurationDeploymentSummaryPerAppArrValue);
        }
        if(this.displayName){
        if(this.displayName)
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.lastRefreshTime){
        if(this.lastRefreshTime)
        writer.writeDateValue("lastRefreshTime", this.lastRefreshTime);
        }
        if(this.version){
        if(this.version)
        writer.writeStringValue("version", this.version);
        }
    };
}
