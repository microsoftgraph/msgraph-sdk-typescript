import {AuthenticationMethodTarget} from './authenticationMethodTarget';
import {createAuthenticationMethodTargetFromDiscriminatorValue} from './createAuthenticationMethodTargetFromDiscriminatorValue';
import {AuthenticationMethodConfigurationImpl, AuthenticationMethodTargetImpl} from './index';
import {TemporaryAccessPassAuthenticationMethodConfiguration} from './temporaryAccessPassAuthenticationMethodConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TemporaryAccessPassAuthenticationMethodConfigurationImpl extends AuthenticationMethodConfigurationImpl implements TemporaryAccessPassAuthenticationMethodConfiguration {
    /** Default length in characters of a Temporary Access Pass object. Must be between 8 and 48 characters. */
    public defaultLength?: number | undefined;
    /** Default lifetime in minutes for a Temporary Access Pass. Value can be any integer between the minimumLifetimeInMinutes and maximumLifetimeInMinutes. */
    public defaultLifetimeInMinutes?: number | undefined;
    /** A collection of users or groups who are enabled to use the authentication method. */
    public includeTargets?: AuthenticationMethodTarget[] | undefined;
    /** If true, all the passes in the tenant will be restricted to one-time use. If false, passes in the tenant can be created to be either one-time use or reusable. */
    public isUsableOnce?: boolean | undefined;
    /** Maximum lifetime in minutes for any Temporary Access Pass created in the tenant. Value can be between 10 and 43200 minutes (equivalent to 30 days). */
    public maximumLifetimeInMinutes?: number | undefined;
    /** Minimum lifetime in minutes for any Temporary Access Pass created in the tenant. Value can be between 10 and 43200 minutes (equivalent to 30 days). */
    public minimumLifetimeInMinutes?: number | undefined;
    /**
     * Instantiates a new TemporaryAccessPassAuthenticationMethodConfiguration and sets the default values.
     * @param temporaryAccessPassAuthenticationMethodConfigurationParameterValue 
     */
    public constructor(temporaryAccessPassAuthenticationMethodConfigurationParameterValue?: TemporaryAccessPassAuthenticationMethodConfiguration | undefined) {
        super(temporaryAccessPassAuthenticationMethodConfigurationParameterValue);
        this.defaultLength = temporaryAccessPassAuthenticationMethodConfigurationParameterValue?.defaultLength;
        this.defaultLifetimeInMinutes = temporaryAccessPassAuthenticationMethodConfigurationParameterValue?.defaultLifetimeInMinutes;
        const includeTargetsArrValue: AuthenticationMethodTargetImpl[] = []; this.includeTargets?.forEach(element => {includeTargetsArrValue.push(element instanceof AuthenticationMethodTargetImpl? element : new AuthenticationMethodTargetImpl(element));});
        this.includeTargets = includeTargetsArrValue;
        this.isUsableOnce = temporaryAccessPassAuthenticationMethodConfigurationParameterValue?.isUsableOnce;
        this.maximumLifetimeInMinutes = temporaryAccessPassAuthenticationMethodConfigurationParameterValue?.maximumLifetimeInMinutes;
        this.minimumLifetimeInMinutes = temporaryAccessPassAuthenticationMethodConfigurationParameterValue?.minimumLifetimeInMinutes;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "defaultLength": n => { this.defaultLength = n.getNumberValue(); },
            "defaultLifetimeInMinutes": n => { this.defaultLifetimeInMinutes = n.getNumberValue(); },
            "includeTargets": n => { this.includeTargets = n.getCollectionOfObjectValues<AuthenticationMethodTargetImpl>(createAuthenticationMethodTargetFromDiscriminatorValue); },
            "isUsableOnce": n => { this.isUsableOnce = n.getBooleanValue(); },
            "maximumLifetimeInMinutes": n => { this.maximumLifetimeInMinutes = n.getNumberValue(); },
            "minimumLifetimeInMinutes": n => { this.minimumLifetimeInMinutes = n.getNumberValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.defaultLength){
            writer.writeNumberValue("defaultLength", this.defaultLength);
        }
        if(this.defaultLifetimeInMinutes){
            writer.writeNumberValue("defaultLifetimeInMinutes", this.defaultLifetimeInMinutes);
        }
        if(this.includeTargets && this.includeTargets.length != 0){        const includeTargetsArrValue: AuthenticationMethodTargetImpl[] = []; this.includeTargets?.forEach(element => {includeTargetsArrValue.push(element instanceof AuthenticationMethodTargetImpl? element : new AuthenticationMethodTargetImpl(element));});
            writer.writeCollectionOfObjectValues<AuthenticationMethodTargetImpl>("includeTargets", includeTargetsArrValue);
        }
        if(this.isUsableOnce){
            writer.writeBooleanValue("isUsableOnce", this.isUsableOnce);
        }
        if(this.maximumLifetimeInMinutes){
            writer.writeNumberValue("maximumLifetimeInMinutes", this.maximumLifetimeInMinutes);
        }
        if(this.minimumLifetimeInMinutes){
            writer.writeNumberValue("minimumLifetimeInMinutes", this.minimumLifetimeInMinutes);
        }
    };
}
