import {createAuthenticationMethodTargetFromDiscriminatorValue} from './createAuthenticationMethodTargetFromDiscriminatorValue';
import {AuthenticationMethodConfiguration, AuthenticationMethodTarget} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class VoiceAuthenticationMethodConfiguration extends AuthenticationMethodConfiguration implements Parsable {
    /** A collection of groups that are enabled to use the authentication method. Expanded by default. */
    private _includeTargets?: AuthenticationMethodTarget[] | undefined;
    /** true if users can register office phones, otherwise, false. */
    private _isOfficePhoneAllowed?: boolean | undefined;
    /**
     * Instantiates a new VoiceAuthenticationMethodConfiguration and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.voiceAuthenticationMethodConfiguration";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "includeTargets": n => { this.includeTargets = n.getCollectionOfObjectValues<AuthenticationMethodTarget>(createAuthenticationMethodTargetFromDiscriminatorValue); },
            "isOfficePhoneAllowed": n => { this.isOfficePhoneAllowed = n.getBooleanValue(); },
        };
    };
    /**
     * Gets the includeTargets property value. A collection of groups that are enabled to use the authentication method. Expanded by default.
     * @returns a authenticationMethodTarget
     */
    public get includeTargets() {
        return this._includeTargets;
    };
    /**
     * Sets the includeTargets property value. A collection of groups that are enabled to use the authentication method. Expanded by default.
     * @param value Value to set for the includeTargets property.
     */
    public set includeTargets(value: AuthenticationMethodTarget[] | undefined) {
        this._includeTargets = value;
    };
    /**
     * Gets the isOfficePhoneAllowed property value. true if users can register office phones, otherwise, false.
     * @returns a boolean
     */
    public get isOfficePhoneAllowed() {
        return this._isOfficePhoneAllowed;
    };
    /**
     * Sets the isOfficePhoneAllowed property value. true if users can register office phones, otherwise, false.
     * @param value Value to set for the isOfficePhoneAllowed property.
     */
    public set isOfficePhoneAllowed(value: boolean | undefined) {
        this._isOfficePhoneAllowed = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<AuthenticationMethodTarget>("includeTargets", this.includeTargets);
        writer.writeBooleanValue("isOfficePhoneAllowed", this.isOfficePhoneAllowed);
    };
}
