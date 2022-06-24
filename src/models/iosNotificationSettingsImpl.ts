import {IosNotificationAlertType} from './iosNotificationAlertType';
import {IosNotificationSettings} from './iosNotificationSettings';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** An item describing notification setting. */
export class IosNotificationSettingsImpl implements IosNotificationSettings {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Indicates the type of alert for notifications for this app. Possible values are: deviceDefault, banner, modal, none. */
    public alertType?: IosNotificationAlertType | undefined;
    /** Application name to be associated with the bundleID. */
    public appName?: string | undefined;
    /** Indicates whether badges are allowed for this app. */
    public badgesEnabled?: boolean | undefined;
    /** Bundle id of app to which to apply these notification settings. */
    public bundleID?: string | undefined;
    /** Indicates whether notifications are allowed for this app. */
    public enabled?: boolean | undefined;
    /** Publisher to be associated with the bundleID. */
    public publisher?: string | undefined;
    /** Indicates whether notifications can be shown in notification center. */
    public showInNotificationCenter?: boolean | undefined;
    /** Indicates whether notifications can be shown on the lock screen. */
    public showOnLockScreen?: boolean | undefined;
    /** Indicates whether sounds are allowed for this app. */
    public soundsEnabled?: boolean | undefined;
    /**
     * Instantiates a new iosNotificationSettings and sets the default values.
     * @param iosNotificationSettingsParameterValue 
     */
    public constructor(iosNotificationSettingsParameterValue?: IosNotificationSettings | undefined) {
        this.additionalData = iosNotificationSettingsParameterValue?.additionalData ? iosNotificationSettingsParameterValue?.additionalData! : {};
        this.alertType = iosNotificationSettingsParameterValue?.alertType;
        this.appName = iosNotificationSettingsParameterValue?.appName;
        this.badgesEnabled = iosNotificationSettingsParameterValue?.badgesEnabled;
        this.bundleID = iosNotificationSettingsParameterValue?.bundleID;
        this.enabled = iosNotificationSettingsParameterValue?.enabled;
        this.publisher = iosNotificationSettingsParameterValue?.publisher;
        this.showInNotificationCenter = iosNotificationSettingsParameterValue?.showInNotificationCenter;
        this.showOnLockScreen = iosNotificationSettingsParameterValue?.showOnLockScreen;
        this.soundsEnabled = iosNotificationSettingsParameterValue?.soundsEnabled;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "alertType": n => { this.alertType = n.getEnumValue<IosNotificationAlertType>(IosNotificationAlertType); },
            "appName": n => { this.appName = n.getStringValue(); },
            "badgesEnabled": n => { this.badgesEnabled = n.getBooleanValue(); },
            "bundleID": n => { this.bundleID = n.getStringValue(); },
            "enabled": n => { this.enabled = n.getBooleanValue(); },
            "publisher": n => { this.publisher = n.getStringValue(); },
            "showInNotificationCenter": n => { this.showInNotificationCenter = n.getBooleanValue(); },
            "showOnLockScreen": n => { this.showOnLockScreen = n.getBooleanValue(); },
            "soundsEnabled": n => { this.soundsEnabled = n.getBooleanValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.alertType){
            writer.writeEnumValue<IosNotificationAlertType>("alertType", this.alertType);
        }
        if(this.appName){
            writer.writeStringValue("appName", this.appName);
        }
        if(this.badgesEnabled){
            writer.writeBooleanValue("badgesEnabled", this.badgesEnabled);
        }
        if(this.bundleID){
            writer.writeStringValue("bundleID", this.bundleID);
        }
        if(this.enabled){
            writer.writeBooleanValue("enabled", this.enabled);
        }
        if(this.publisher){
            writer.writeStringValue("publisher", this.publisher);
        }
        if(this.showInNotificationCenter){
            writer.writeBooleanValue("showInNotificationCenter", this.showInNotificationCenter);
        }
        if(this.showOnLockScreen){
            writer.writeBooleanValue("showOnLockScreen", this.showOnLockScreen);
        }
        if(this.soundsEnabled){
            writer.writeBooleanValue("soundsEnabled", this.soundsEnabled);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
