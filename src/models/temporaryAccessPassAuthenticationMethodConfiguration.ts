import {createAuthenticationMethodTargetFromDiscriminatorValue} from './createAuthenticationMethodTargetFromDiscriminatorValue';
import {AuthenticationMethodConfiguration, AuthenticationMethodTarget} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TemporaryAccessPassAuthenticationMethodConfiguration extends AuthenticationMethodConfiguration implements Parsable {
    /** Default length in characters of a Temporary Access Pass object. Must be between 8 and 48 characters. */
    private _defaultLength?: number | undefined;
    /** Default lifetime in minutes for a Temporary Access Pass. Value can be any integer between the minimumLifetimeInMinutes and maximumLifetimeInMinutes. */
    private _defaultLifetimeInMinutes?: number | undefined;
    /** A collection of users or groups who are enabled to use the authentication method. */
    private _includeTargets?: AuthenticationMethodTarget[] | undefined;
    /** If true, all the passes in the tenant will be restricted to one-time use. If false, passes in the tenant can be created to be either one-time use or reusable. */
    private _isUsableOnce?: boolean | undefined;
    /** Maximum lifetime in minutes for any Temporary Access Pass created in the tenant. Value can be between 10 and 43200 minutes (equivalent to 30 days). */
    private _maximumLifetimeInMinutes?: number | undefined;
    /** Minimum lifetime in minutes for any Temporary Access Pass created in the tenant. Value can be between 10 and 43200 minutes (equivalent to 30 days). */
    private _minimumLifetimeInMinutes?: number | undefined;
    /**
     * Instantiates a new TemporaryAccessPassAuthenticationMethodConfiguration and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the defaultLength property value. Default length in characters of a Temporary Access Pass object. Must be between 8 and 48 characters.
     * @returns a integer
     */
    public get defaultLength() {
        return this._defaultLength;
    };
    /**
     * Sets the defaultLength property value. Default length in characters of a Temporary Access Pass object. Must be between 8 and 48 characters.
     * @param value Value to set for the defaultLength property.
     */
    public set defaultLength(value: number | undefined) {
        this._defaultLength = value;
    };
    /**
     * Gets the defaultLifetimeInMinutes property value. Default lifetime in minutes for a Temporary Access Pass. Value can be any integer between the minimumLifetimeInMinutes and maximumLifetimeInMinutes.
     * @returns a integer
     */
    public get defaultLifetimeInMinutes() {
        return this._defaultLifetimeInMinutes;
    };
    /**
     * Sets the defaultLifetimeInMinutes property value. Default lifetime in minutes for a Temporary Access Pass. Value can be any integer between the minimumLifetimeInMinutes and maximumLifetimeInMinutes.
     * @param value Value to set for the defaultLifetimeInMinutes property.
     */
    public set defaultLifetimeInMinutes(value: number | undefined) {
        this._defaultLifetimeInMinutes = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "defaultLength": n => { this.defaultLength = n.getNumberValue(); },
            "defaultLifetimeInMinutes": n => { this.defaultLifetimeInMinutes = n.getNumberValue(); },
            "includeTargets": n => { this.includeTargets = n.getCollectionOfObjectValues<AuthenticationMethodTarget>(createAuthenticationMethodTargetFromDiscriminatorValue); },
            "isUsableOnce": n => { this.isUsableOnce = n.getBooleanValue(); },
            "maximumLifetimeInMinutes": n => { this.maximumLifetimeInMinutes = n.getNumberValue(); },
            "minimumLifetimeInMinutes": n => { this.minimumLifetimeInMinutes = n.getNumberValue(); },
        };
    };
    /**
     * Gets the includeTargets property value. A collection of users or groups who are enabled to use the authentication method.
     * @returns a authenticationMethodTarget
     */
    public get includeTargets() {
        return this._includeTargets;
    };
    /**
     * Sets the includeTargets property value. A collection of users or groups who are enabled to use the authentication method.
     * @param value Value to set for the includeTargets property.
     */
    public set includeTargets(value: AuthenticationMethodTarget[] | undefined) {
        this._includeTargets = value;
    };
    /**
     * Gets the isUsableOnce property value. If true, all the passes in the tenant will be restricted to one-time use. If false, passes in the tenant can be created to be either one-time use or reusable.
     * @returns a boolean
     */
    public get isUsableOnce() {
        return this._isUsableOnce;
    };
    /**
     * Sets the isUsableOnce property value. If true, all the passes in the tenant will be restricted to one-time use. If false, passes in the tenant can be created to be either one-time use or reusable.
     * @param value Value to set for the isUsableOnce property.
     */
    public set isUsableOnce(value: boolean | undefined) {
        this._isUsableOnce = value;
    };
    /**
     * Gets the maximumLifetimeInMinutes property value. Maximum lifetime in minutes for any Temporary Access Pass created in the tenant. Value can be between 10 and 43200 minutes (equivalent to 30 days).
     * @returns a integer
     */
    public get maximumLifetimeInMinutes() {
        return this._maximumLifetimeInMinutes;
    };
    /**
     * Sets the maximumLifetimeInMinutes property value. Maximum lifetime in minutes for any Temporary Access Pass created in the tenant. Value can be between 10 and 43200 minutes (equivalent to 30 days).
     * @param value Value to set for the maximumLifetimeInMinutes property.
     */
    public set maximumLifetimeInMinutes(value: number | undefined) {
        this._maximumLifetimeInMinutes = value;
    };
    /**
     * Gets the minimumLifetimeInMinutes property value. Minimum lifetime in minutes for any Temporary Access Pass created in the tenant. Value can be between 10 and 43200 minutes (equivalent to 30 days).
     * @returns a integer
     */
    public get minimumLifetimeInMinutes() {
        return this._minimumLifetimeInMinutes;
    };
    /**
     * Sets the minimumLifetimeInMinutes property value. Minimum lifetime in minutes for any Temporary Access Pass created in the tenant. Value can be between 10 and 43200 minutes (equivalent to 30 days).
     * @param value Value to set for the minimumLifetimeInMinutes property.
     */
    public set minimumLifetimeInMinutes(value: number | undefined) {
        this._minimumLifetimeInMinutes = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeNumberValue("defaultLength", this.defaultLength);
        writer.writeNumberValue("defaultLifetimeInMinutes", this.defaultLifetimeInMinutes);
        writer.writeCollectionOfObjectValues<AuthenticationMethodTarget>("includeTargets", this.includeTargets);
        writer.writeBooleanValue("isUsableOnce", this.isUsableOnce);
        writer.writeNumberValue("maximumLifetimeInMinutes", this.maximumLifetimeInMinutes);
        writer.writeNumberValue("minimumLifetimeInMinutes", this.minimumLifetimeInMinutes);
    };
}
