import {EntityImpl} from './index';
import {TelecomExpenseManagementPartner} from './telecomExpenseManagementPartner';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** telecomExpenseManagementPartner resources represent the metadata and status of a given TEM service. Once your organization has onboarded with a partner, the partner can be enabled or disabled to switch TEM functionality on or off. */
export class TelecomExpenseManagementPartnerImpl extends EntityImpl implements TelecomExpenseManagementPartner {
    /** Whether the partner's AAD app has been authorized to access Intune. */
    private _appAuthorized?: boolean | undefined;
    /** Display name of the TEM partner. */
    private _displayName?: string | undefined;
    /** Whether Intune's connection to the TEM service is currently enabled or disabled. */
    private _enabled?: boolean | undefined;
    /** Timestamp of the last request sent to Intune by the TEM partner. */
    private _lastConnectionDateTime?: Date | undefined;
    /** URL of the TEM partner's administrative control panel, where an administrator can configure their TEM service. */
    private _url?: string | undefined;
    /**
     * Gets the appAuthorized property value. Whether the partner's AAD app has been authorized to access Intune.
     * @returns a boolean
     */
    public get appAuthorized() {
        return this._appAuthorized;
    };
    /**
     * Sets the appAuthorized property value. Whether the partner's AAD app has been authorized to access Intune.
     * @param value Value to set for the appAuthorized property.
     */
    public set appAuthorized(value: boolean | undefined) {
        if(value) {
            this._appAuthorized = value;
        }
    };
    /**
     * Instantiates a new telecomExpenseManagementPartner and sets the default values.
     * @param telecomExpenseManagementPartnerParameterValue 
     */
    public constructor(telecomExpenseManagementPartnerParameterValue?: TelecomExpenseManagementPartner | undefined) {
        super(telecomExpenseManagementPartnerParameterValue);
        this._appAuthorized = telecomExpenseManagementPartnerParameterValue?.appAuthorized;
        this._displayName = telecomExpenseManagementPartnerParameterValue?.displayName;
        this._enabled = telecomExpenseManagementPartnerParameterValue?.enabled;
        this._lastConnectionDateTime = telecomExpenseManagementPartnerParameterValue?.lastConnectionDateTime;
        this._url = telecomExpenseManagementPartnerParameterValue?.url;
    };
    /**
     * Gets the displayName property value. Display name of the TEM partner.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Display name of the TEM partner.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        if(value) {
            this._displayName = value;
        }
    };
    /**
     * Gets the enabled property value. Whether Intune's connection to the TEM service is currently enabled or disabled.
     * @returns a boolean
     */
    public get enabled() {
        return this._enabled;
    };
    /**
     * Sets the enabled property value. Whether Intune's connection to the TEM service is currently enabled or disabled.
     * @param value Value to set for the enabled property.
     */
    public set enabled(value: boolean | undefined) {
        if(value) {
            this._enabled = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "appAuthorized": n => { this.appAuthorized = n.getBooleanValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "enabled": n => { this.enabled = n.getBooleanValue(); },
            "lastConnectionDateTime": n => { this.lastConnectionDateTime = n.getDateValue(); },
            "url": n => { this.url = n.getStringValue(); },
        };
    };
    /**
     * Gets the lastConnectionDateTime property value. Timestamp of the last request sent to Intune by the TEM partner.
     * @returns a Date
     */
    public get lastConnectionDateTime() {
        return this._lastConnectionDateTime;
    };
    /**
     * Sets the lastConnectionDateTime property value. Timestamp of the last request sent to Intune by the TEM partner.
     * @param value Value to set for the lastConnectionDateTime property.
     */
    public set lastConnectionDateTime(value: Date | undefined) {
        if(value) {
            this._lastConnectionDateTime = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.appAuthorized){
            writer.writeBooleanValue("appAuthorized", this.appAuthorized);
        }
        if(this.displayName){
            writer.writeStringValue("displayName", this.displayName);
        }
        if(this.enabled){
            writer.writeBooleanValue("enabled", this.enabled);
        }
        if(this.lastConnectionDateTime){
            writer.writeDateValue("lastConnectionDateTime", this.lastConnectionDateTime);
        }
        if(this.url){
            writer.writeStringValue("url", this.url);
        }
    };
    /**
     * Gets the url property value. URL of the TEM partner's administrative control panel, where an administrator can configure their TEM service.
     * @returns a string
     */
    public get url() {
        return this._url;
    };
    /**
     * Sets the url property value. URL of the TEM partner's administrative control panel, where an administrator can configure their TEM service.
     * @param value Value to set for the url property.
     */
    public set url(value: string | undefined) {
        if(value) {
            this._url = value;
        }
    };
}
