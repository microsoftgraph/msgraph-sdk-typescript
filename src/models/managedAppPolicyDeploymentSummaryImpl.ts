import {createManagedAppPolicyDeploymentSummaryPerAppFromDiscriminatorValue} from './createManagedAppPolicyDeploymentSummaryPerAppFromDiscriminatorValue';
import {EntityImpl, ManagedAppPolicyDeploymentSummaryPerAppImpl} from './index';
import {ManagedAppPolicyDeploymentSummary} from './managedAppPolicyDeploymentSummary';
import {ManagedAppPolicyDeploymentSummaryPerApp} from './managedAppPolicyDeploymentSummaryPerApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** The ManagedAppEntity is the base entity type for all other entity types under app management workflow. */
export class ManagedAppPolicyDeploymentSummaryImpl extends EntityImpl implements ManagedAppPolicyDeploymentSummary {
    /** Not yet documented */
    private _configurationDeployedUserCount?: number | undefined;
    /** Not yet documented */
    private _configurationDeploymentSummaryPerApp?: ManagedAppPolicyDeploymentSummaryPerApp[] | undefined;
    /** Not yet documented */
    private _displayName?: string | undefined;
    /** Not yet documented */
    private _lastRefreshTime?: Date | undefined;
    /** Version of the entity. */
    private _version?: string | undefined;
    /**
     * Gets the configurationDeployedUserCount property value. Not yet documented
     * @returns a integer
     */
    public get configurationDeployedUserCount() {
        return this._configurationDeployedUserCount;
    };
    /**
     * Sets the configurationDeployedUserCount property value. Not yet documented
     * @param value Value to set for the configurationDeployedUserCount property.
     */
    public set configurationDeployedUserCount(value: number | undefined) {
        if(value) {
            this._configurationDeployedUserCount = value;
        }
    };
    /**
     * Gets the configurationDeploymentSummaryPerApp property value. Not yet documented
     * @returns a ManagedAppPolicyDeploymentSummaryPerAppInterface
     */
    public get configurationDeploymentSummaryPerApp() {
        return this._configurationDeploymentSummaryPerApp;
    };
    /**
     * Sets the configurationDeploymentSummaryPerApp property value. Not yet documented
     * @param value Value to set for the configurationDeploymentSummaryPerApp property.
     */
    public set configurationDeploymentSummaryPerApp(value: ManagedAppPolicyDeploymentSummaryPerApp[] | undefined) {
        if(value) {
            const configurationDeploymentSummaryPerAppArrValue: ManagedAppPolicyDeploymentSummaryPerAppImpl[] = [];
            this.configurationDeploymentSummaryPerApp?.forEach(element => {
                configurationDeploymentSummaryPerAppArrValue.push((element instanceof ManagedAppPolicyDeploymentSummaryPerAppImpl? element as ManagedAppPolicyDeploymentSummaryPerAppImpl:new ManagedAppPolicyDeploymentSummaryPerAppImpl(element)));
            });
            this._configurationDeploymentSummaryPerApp = configurationDeploymentSummaryPerAppArrValue;
        }
    };
    /**
     * Instantiates a new managedAppPolicyDeploymentSummary and sets the default values.
     * @param managedAppPolicyDeploymentSummaryParameterValue 
     */
    public constructor(managedAppPolicyDeploymentSummaryParameterValue?: ManagedAppPolicyDeploymentSummary | undefined) {
        super(managedAppPolicyDeploymentSummaryParameterValue);
        this._configurationDeployedUserCount = managedAppPolicyDeploymentSummaryParameterValue?.configurationDeployedUserCount;
        this._configurationDeploymentSummaryPerApp = managedAppPolicyDeploymentSummaryParameterValue?.configurationDeploymentSummaryPerApp;
        this._displayName = managedAppPolicyDeploymentSummaryParameterValue?.displayName;
        this._lastRefreshTime = managedAppPolicyDeploymentSummaryParameterValue?.lastRefreshTime;
        this._version = managedAppPolicyDeploymentSummaryParameterValue?.version;
    };
    /**
     * Gets the displayName property value. Not yet documented
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Not yet documented
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        if(value) {
            this._displayName = value;
        }
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
     * Gets the lastRefreshTime property value. Not yet documented
     * @returns a Date
     */
    public get lastRefreshTime() {
        return this._lastRefreshTime;
    };
    /**
     * Sets the lastRefreshTime property value. Not yet documented
     * @param value Value to set for the lastRefreshTime property.
     */
    public set lastRefreshTime(value: Date | undefined) {
        if(value) {
            this._lastRefreshTime = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.configurationDeployedUserCount){
            writer.writeNumberValue("configurationDeployedUserCount", this.configurationDeployedUserCount);
        }
        if(this.configurationDeploymentSummaryPerApp && this.configurationDeploymentSummaryPerApp.length != 0){        const configurationDeploymentSummaryPerAppArrValue: ManagedAppPolicyDeploymentSummaryPerAppImpl[] = [];
        this.configurationDeploymentSummaryPerApp?.forEach(element => {
            configurationDeploymentSummaryPerAppArrValue.push((element instanceof ManagedAppPolicyDeploymentSummaryPerAppImpl? element as ManagedAppPolicyDeploymentSummaryPerAppImpl:new ManagedAppPolicyDeploymentSummaryPerAppImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ManagedAppPolicyDeploymentSummaryPerAppImpl>("configurationDeploymentSummaryPerApp", configurationDeploymentSummaryPerAppArrValue);
        }
        if(this.displayName){
            writer.writeStringValue("displayName", this.displayName);
        }
        if(this.lastRefreshTime){
            writer.writeDateValue("lastRefreshTime", this.lastRefreshTime);
        }
        if(this.version){
            writer.writeStringValue("version", this.version);
        }
    };
    /**
     * Gets the version property value. Version of the entity.
     * @returns a string
     */
    public get version() {
        return this._version;
    };
    /**
     * Sets the version property value. Version of the entity.
     * @param value Value to set for the version property.
     */
    public set version(value: string | undefined) {
        if(value) {
            this._version = value;
        }
    };
}
