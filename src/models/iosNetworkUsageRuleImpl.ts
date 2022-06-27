import {AppListItem} from './appListItem';
import {createAppListItemFromDiscriminatorValue} from './createAppListItemFromDiscriminatorValue';
import {AppListItemImpl} from './index';
import {IosNetworkUsageRule} from './iosNetworkUsageRule';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Network Usage Rules allow enterprises to specify how managed apps use networks, such as cellular data networks. */
export class IosNetworkUsageRuleImpl implements IosNetworkUsageRule {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** If set to true, corresponding managed apps will not be allowed to use cellular data at any time. */
    public cellularDataBlocked?: boolean | undefined;
    /** If set to true, corresponding managed apps will not be allowed to use cellular data when roaming. */
    public cellularDataBlockWhenRoaming?: boolean | undefined;
    /** Information about the managed apps that this rule is going to apply to. This collection can contain a maximum of 500 elements. */
    public managedApps?: AppListItem[] | undefined;
    /**
     * Instantiates a new iosNetworkUsageRule and sets the default values.
     * @param iosNetworkUsageRuleParameterValue 
     */
    public constructor(iosNetworkUsageRuleParameterValue?: IosNetworkUsageRule | undefined) {
        this.additionalData = iosNetworkUsageRuleParameterValue?.additionalData ? iosNetworkUsageRuleParameterValue?.additionalData! : {};
        this.cellularDataBlocked = iosNetworkUsageRuleParameterValue?.cellularDataBlocked;
        this.cellularDataBlockWhenRoaming = iosNetworkUsageRuleParameterValue?.cellularDataBlockWhenRoaming;
        const managedAppsArrValue: AppListItemImpl[] = []; iosNetworkUsageRuleParameterValue?.managedApps?.forEach(element => {managedAppsArrValue.push(element instanceof AppListItemImpl? element : new AppListItemImpl(element));});
        this.managedApps = managedAppsArrValue;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "cellularDataBlocked": n => { this.cellularDataBlocked = n.getBooleanValue(); },
            "cellularDataBlockWhenRoaming": n => { this.cellularDataBlockWhenRoaming = n.getBooleanValue(); },
            "managedApps": n => { this.managedApps = n.getCollectionOfObjectValues<AppListItemImpl>(createAppListItemFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.cellularDataBlocked){
            writer.writeBooleanValue("cellularDataBlocked", this.cellularDataBlocked);
        }
        if(this.cellularDataBlockWhenRoaming){
            writer.writeBooleanValue("cellularDataBlockWhenRoaming", this.cellularDataBlockWhenRoaming);
        }
        if(this.managedApps && this.managedApps.length != 0){        const managedAppsArrValue: AppListItemImpl[] = []; this.managedApps?.forEach(element => {managedAppsArrValue.push(element instanceof AppListItemImpl? element : new AppListItemImpl(element));});
            writer.writeCollectionOfObjectValues<AppListItemImpl>("managedApps", managedAppsArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
