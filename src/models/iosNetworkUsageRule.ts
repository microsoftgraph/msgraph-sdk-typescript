import {createAppListItemFromDiscriminatorValue} from './createAppListItemFromDiscriminatorValue';
import {AppListItem} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Network Usage Rules allow enterprises to specify how managed apps use networks, such as cellular data networks. */
export class IosNetworkUsageRule implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** If set to true, corresponding managed apps will not be allowed to use cellular data at any time. */
    private _cellularDataBlocked?: boolean | undefined;
    /** If set to true, corresponding managed apps will not be allowed to use cellular data when roaming. */
    private _cellularDataBlockWhenRoaming?: boolean | undefined;
    /** Information about the managed apps that this rule is going to apply to. This collection can contain a maximum of 500 elements. */
    private _managedApps?: AppListItem[] | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
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
    public set additionalData(value: Record<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Gets the cellularDataBlocked property value. If set to true, corresponding managed apps will not be allowed to use cellular data at any time.
     * @returns a boolean
     */
    public get cellularDataBlocked() {
        return this._cellularDataBlocked;
    };
    /**
     * Sets the cellularDataBlocked property value. If set to true, corresponding managed apps will not be allowed to use cellular data at any time.
     * @param value Value to set for the cellularDataBlocked property.
     */
    public set cellularDataBlocked(value: boolean | undefined) {
        this._cellularDataBlocked = value;
    };
    /**
     * Gets the cellularDataBlockWhenRoaming property value. If set to true, corresponding managed apps will not be allowed to use cellular data when roaming.
     * @returns a boolean
     */
    public get cellularDataBlockWhenRoaming() {
        return this._cellularDataBlockWhenRoaming;
    };
    /**
     * Sets the cellularDataBlockWhenRoaming property value. If set to true, corresponding managed apps will not be allowed to use cellular data when roaming.
     * @param value Value to set for the cellularDataBlockWhenRoaming property.
     */
    public set cellularDataBlockWhenRoaming(value: boolean | undefined) {
        this._cellularDataBlockWhenRoaming = value;
    };
    /**
     * Instantiates a new iosNetworkUsageRule and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "cellularDataBlocked": n => { this.cellularDataBlocked = n.getBooleanValue(); },
            "cellularDataBlockWhenRoaming": n => { this.cellularDataBlockWhenRoaming = n.getBooleanValue(); },
            "managedApps": n => { this.managedApps = n.getCollectionOfObjectValues<AppListItem>(createAppListItemFromDiscriminatorValue); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
        };
    };
    /**
     * Gets the managedApps property value. Information about the managed apps that this rule is going to apply to. This collection can contain a maximum of 500 elements.
     * @returns a appListItem
     */
    public get managedApps() {
        return this._managedApps;
    };
    /**
     * Sets the managedApps property value. Information about the managed apps that this rule is going to apply to. This collection can contain a maximum of 500 elements.
     * @param value Value to set for the managedApps property.
     */
    public set managedApps(value: AppListItem[] | undefined) {
        this._managedApps = value;
    };
    /**
     * Gets the @odata.type property value. The OdataType property
     * @returns a string
     */
    public get odataType() {
        return this._odataType;
    };
    /**
     * Sets the @odata.type property value. The OdataType property
     * @param value Value to set for the OdataType property.
     */
    public set odataType(value: string | undefined) {
        this._odataType = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("cellularDataBlocked", this.cellularDataBlocked);
        writer.writeBooleanValue("cellularDataBlockWhenRoaming", this.cellularDataBlockWhenRoaming);
        writer.writeCollectionOfObjectValues<AppListItem>("managedApps", this.managedApps);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeAdditionalData(this.additionalData);
    };
}
