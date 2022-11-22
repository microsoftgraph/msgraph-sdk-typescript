import {IosNotificationAlertType} from './iosNotificationAlertType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** An item describing notification setting. */
export class IosNotificationSettings implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Notification Settings Alert Type. */
    private _alertType?: IosNotificationAlertType | undefined;
    /** Application name to be associated with the bundleID. */
    private _appName?: string | undefined;
    /** Indicates whether badges are allowed for this app. */
    private _badgesEnabled?: boolean | undefined;
    /** Bundle id of app to which to apply these notification settings. */
    private _bundleID?: string | undefined;
    /** Indicates whether notifications are allowed for this app. */
    private _enabled?: boolean | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** Publisher to be associated with the bundleID. */
    private _publisher?: string | undefined;
    /** Indicates whether notifications can be shown in notification center. */
    private _showInNotificationCenter?: boolean | undefined;
    /** Indicates whether notifications can be shown on the lock screen. */
    private _showOnLockScreen?: boolean | undefined;
    /** Indicates whether sounds are allowed for this app. */
    private _soundsEnabled?: boolean | undefined;
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
     * Gets the alertType property value. Notification Settings Alert Type.
     * @returns a iosNotificationAlertType
     */
    public get alertType() {
        return this._alertType;
    };
    /**
     * Sets the alertType property value. Notification Settings Alert Type.
     * @param value Value to set for the alertType property.
     */
    public set alertType(value: IosNotificationAlertType | undefined) {
        this._alertType = value;
    };
    /**
     * Gets the appName property value. Application name to be associated with the bundleID.
     * @returns a string
     */
    public get appName() {
        return this._appName;
    };
    /**
     * Sets the appName property value. Application name to be associated with the bundleID.
     * @param value Value to set for the appName property.
     */
    public set appName(value: string | undefined) {
        this._appName = value;
    };
    /**
     * Gets the badgesEnabled property value. Indicates whether badges are allowed for this app.
     * @returns a boolean
     */
    public get badgesEnabled() {
        return this._badgesEnabled;
    };
    /**
     * Sets the badgesEnabled property value. Indicates whether badges are allowed for this app.
     * @param value Value to set for the badgesEnabled property.
     */
    public set badgesEnabled(value: boolean | undefined) {
        this._badgesEnabled = value;
    };
    /**
     * Gets the bundleID property value. Bundle id of app to which to apply these notification settings.
     * @returns a string
     */
    public get bundleID() {
        return this._bundleID;
    };
    /**
     * Sets the bundleID property value. Bundle id of app to which to apply these notification settings.
     * @param value Value to set for the bundleID property.
     */
    public set bundleID(value: string | undefined) {
        this._bundleID = value;
    };
    /**
     * Instantiates a new iosNotificationSettings and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the enabled property value. Indicates whether notifications are allowed for this app.
     * @returns a boolean
     */
    public get enabled() {
        return this._enabled;
    };
    /**
     * Sets the enabled property value. Indicates whether notifications are allowed for this app.
     * @param value Value to set for the enabled property.
     */
    public set enabled(value: boolean | undefined) {
        this._enabled = value;
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
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "publisher": n => { this.publisher = n.getStringValue(); },
            "showInNotificationCenter": n => { this.showInNotificationCenter = n.getBooleanValue(); },
            "showOnLockScreen": n => { this.showOnLockScreen = n.getBooleanValue(); },
            "soundsEnabled": n => { this.soundsEnabled = n.getBooleanValue(); },
        };
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
     * Gets the publisher property value. Publisher to be associated with the bundleID.
     * @returns a string
     */
    public get publisher() {
        return this._publisher;
    };
    /**
     * Sets the publisher property value. Publisher to be associated with the bundleID.
     * @param value Value to set for the publisher property.
     */
    public set publisher(value: string | undefined) {
        this._publisher = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeEnumValue<IosNotificationAlertType>("alertType", this.alertType);
        writer.writeStringValue("appName", this.appName);
        writer.writeBooleanValue("badgesEnabled", this.badgesEnabled);
        writer.writeStringValue("bundleID", this.bundleID);
        writer.writeBooleanValue("enabled", this.enabled);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("publisher", this.publisher);
        writer.writeBooleanValue("showInNotificationCenter", this.showInNotificationCenter);
        writer.writeBooleanValue("showOnLockScreen", this.showOnLockScreen);
        writer.writeBooleanValue("soundsEnabled", this.soundsEnabled);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the showInNotificationCenter property value. Indicates whether notifications can be shown in notification center.
     * @returns a boolean
     */
    public get showInNotificationCenter() {
        return this._showInNotificationCenter;
    };
    /**
     * Sets the showInNotificationCenter property value. Indicates whether notifications can be shown in notification center.
     * @param value Value to set for the showInNotificationCenter property.
     */
    public set showInNotificationCenter(value: boolean | undefined) {
        this._showInNotificationCenter = value;
    };
    /**
     * Gets the showOnLockScreen property value. Indicates whether notifications can be shown on the lock screen.
     * @returns a boolean
     */
    public get showOnLockScreen() {
        return this._showOnLockScreen;
    };
    /**
     * Sets the showOnLockScreen property value. Indicates whether notifications can be shown on the lock screen.
     * @param value Value to set for the showOnLockScreen property.
     */
    public set showOnLockScreen(value: boolean | undefined) {
        this._showOnLockScreen = value;
    };
    /**
     * Gets the soundsEnabled property value. Indicates whether sounds are allowed for this app.
     * @returns a boolean
     */
    public get soundsEnabled() {
        return this._soundsEnabled;
    };
    /**
     * Sets the soundsEnabled property value. Indicates whether sounds are allowed for this app.
     * @param value Value to set for the soundsEnabled property.
     */
    public set soundsEnabled(value: boolean | undefined) {
        this._soundsEnabled = value;
    };
}
