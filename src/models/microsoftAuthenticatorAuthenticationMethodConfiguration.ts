import {createMicrosoftAuthenticatorAuthenticationMethodTargetFromDiscriminatorValue} from './createMicrosoftAuthenticatorAuthenticationMethodTargetFromDiscriminatorValue';
import {createMicrosoftAuthenticatorFeatureSettingsFromDiscriminatorValue} from './createMicrosoftAuthenticatorFeatureSettingsFromDiscriminatorValue';
import {AuthenticationMethodConfiguration, MicrosoftAuthenticatorAuthenticationMethodTarget, MicrosoftAuthenticatorFeatureSettings} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MicrosoftAuthenticatorAuthenticationMethodConfiguration extends AuthenticationMethodConfiguration implements Parsable {
    /** A collection of Microsoft Authenticator settings such as application context and location context, and whether they are enabled for all users or specific users only. */
    private _featureSettings?: MicrosoftAuthenticatorFeatureSettings | undefined;
    /** A collection of users or groups who are enabled to use the authentication method. Expanded by default. */
    private _includeTargets?: MicrosoftAuthenticatorAuthenticationMethodTarget[] | undefined;
    /**
     * Instantiates a new MicrosoftAuthenticatorAuthenticationMethodConfiguration and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.microsoftAuthenticatorAuthenticationMethodConfiguration";
    };
    /**
     * Gets the featureSettings property value. A collection of Microsoft Authenticator settings such as application context and location context, and whether they are enabled for all users or specific users only.
     * @returns a microsoftAuthenticatorFeatureSettings
     */
    public get featureSettings() {
        return this._featureSettings;
    };
    /**
     * Sets the featureSettings property value. A collection of Microsoft Authenticator settings such as application context and location context, and whether they are enabled for all users or specific users only.
     * @param value Value to set for the featureSettings property.
     */
    public set featureSettings(value: MicrosoftAuthenticatorFeatureSettings | undefined) {
        this._featureSettings = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "featureSettings": n => { this.featureSettings = n.getObjectValue<MicrosoftAuthenticatorFeatureSettings>(createMicrosoftAuthenticatorFeatureSettingsFromDiscriminatorValue); },
            "includeTargets": n => { this.includeTargets = n.getCollectionOfObjectValues<MicrosoftAuthenticatorAuthenticationMethodTarget>(createMicrosoftAuthenticatorAuthenticationMethodTargetFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the includeTargets property value. A collection of users or groups who are enabled to use the authentication method. Expanded by default.
     * @returns a microsoftAuthenticatorAuthenticationMethodTarget
     */
    public get includeTargets() {
        return this._includeTargets;
    };
    /**
     * Sets the includeTargets property value. A collection of users or groups who are enabled to use the authentication method. Expanded by default.
     * @param value Value to set for the includeTargets property.
     */
    public set includeTargets(value: MicrosoftAuthenticatorAuthenticationMethodTarget[] | undefined) {
        this._includeTargets = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<MicrosoftAuthenticatorFeatureSettings>("featureSettings", this.featureSettings);
        writer.writeCollectionOfObjectValues<MicrosoftAuthenticatorAuthenticationMethodTarget>("includeTargets", this.includeTargets);
    };
}
