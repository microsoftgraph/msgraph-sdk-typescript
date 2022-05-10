import {EntityImpl} from './index';
import {TelecomExpenseManagementPartner} from './telecomExpenseManagementPartner';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TelecomExpenseManagementPartnerImpl extends EntityImpl implements Parsable, TelecomExpenseManagementPartner {
    /** Whether the partner's AAD app has been authorized to access Intune.  */
    appAuthorized?: boolean | undefined;
    /** Display name of the TEM partner.  */
    displayName?: string | undefined;
    /** Whether Intune's connection to the TEM service is currently enabled or disabled.  */
    enabled?: boolean | undefined;
    /** Timestamp of the last request sent to Intune by the TEM partner.  */
    lastConnectionDateTime?: Date | undefined;
    /** URL of the TEM partner's administrative control panel, where an administrator can configure their TEM service.  */
    url?: string | undefined;
    /**
     * Instantiates a new telecomExpenseManagementPartner and sets the default values.
     * @param telecomExpenseManagementPartnerParameterValue 
     */
    public constructor(telecomExpenseManagementPartnerParameterValue?: TelecomExpenseManagementPartner | undefined) {
        super();
        this.appAuthorized = telecomExpenseManagementPartnerParameterValue?.appAuthorized ;
        this.displayName = telecomExpenseManagementPartnerParameterValue?.displayName ;
        this.enabled = telecomExpenseManagementPartnerParameterValue?.enabled ;
        this.lastConnectionDateTime = telecomExpenseManagementPartnerParameterValue?.lastConnectionDateTime ;
        this.url = telecomExpenseManagementPartnerParameterValue?.url ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.appAuthorized){
        if(this.appAuthorized)
        writer.writeBooleanValue("appAuthorized", this.appAuthorized);
        }
        if(this.displayName){
        if(this.displayName)
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.enabled){
        if(this.enabled)
        writer.writeBooleanValue("enabled", this.enabled);
        }
        if(this.lastConnectionDateTime){
        if(this.lastConnectionDateTime)
        writer.writeDateValue("lastConnectionDateTime", this.lastConnectionDateTime);
        }
        if(this.url){
        if(this.url)
        writer.writeStringValue("url", this.url);
        }
    };
}
