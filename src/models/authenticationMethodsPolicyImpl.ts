import {AuthenticationMethodConfiguration} from './authenticationMethodConfiguration';
import {AuthenticationMethodsPolicy} from './authenticationMethodsPolicy';
import {createAuthenticationMethodConfigurationFromDiscriminatorValue} from './createAuthenticationMethodConfigurationFromDiscriminatorValue';
import {createRegistrationEnforcementFromDiscriminatorValue} from './createRegistrationEnforcementFromDiscriminatorValue';
import {AuthenticationMethodConfigurationImpl, EntityImpl, RegistrationEnforcementImpl} from './index';
import {RegistrationEnforcement} from './registrationEnforcement';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the authenticationMethodsPolicy singleton. */
export class AuthenticationMethodsPolicyImpl extends EntityImpl implements AuthenticationMethodsPolicy, Parsable {
    /** Represents the settings for each authentication method. Automatically expanded on GET /policies/authenticationMethodsPolicy. */
    public authenticationMethodConfigurations?: AuthenticationMethodConfiguration[] | undefined;
    /** A description of the policy. */
    public description?: string | undefined;
    /** The name of the policy. */
    public displayName?: string | undefined;
    /** The date and time of the last update to the policy. */
    public lastModifiedDateTime?: Date | undefined;
    /** The version of the policy in use. */
    public policyVersion?: string | undefined;
    /** The reconfirmationInDays property */
    public reconfirmationInDays?: number | undefined;
    /** Enforce registration at sign-in time. This property can be used to remind users to set up targeted authentication methods. */
    public registrationEnforcement?: RegistrationEnforcement | undefined;
    /**
     * Instantiates a new authenticationMethodsPolicy and sets the default values.
     * @param authenticationMethodsPolicyParameterValue 
     */
    public constructor(authenticationMethodsPolicyParameterValue?: AuthenticationMethodsPolicy | undefined) {
        super();
        this.authenticationMethodConfigurations = authenticationMethodsPolicyParameterValue?.authenticationMethodConfigurations ;
        this.description = authenticationMethodsPolicyParameterValue?.description ;
        this.displayName = authenticationMethodsPolicyParameterValue?.displayName ;
        this.lastModifiedDateTime = authenticationMethodsPolicyParameterValue?.lastModifiedDateTime ;
        this.policyVersion = authenticationMethodsPolicyParameterValue?.policyVersion ;
        this.reconfirmationInDays = authenticationMethodsPolicyParameterValue?.reconfirmationInDays ;
        this.registrationEnforcement = authenticationMethodsPolicyParameterValue?.registrationEnforcement ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "authenticationMethodConfigurations": n => { this.authenticationMethodConfigurations = n.getCollectionOfObjectValues<AuthenticationMethodConfigurationImpl>(createAuthenticationMethodConfigurationFromDiscriminatorValue); },
            "description": n => { this.description = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "lastModifiedDateTime": n => { this.lastModifiedDateTime = n.getDateValue(); },
            "policyVersion": n => { this.policyVersion = n.getStringValue(); },
            "reconfirmationInDays": n => { this.reconfirmationInDays = n.getNumberValue(); },
            "registrationEnforcement": n => { this.registrationEnforcement = n.getObjectValue<RegistrationEnforcementImpl>(createRegistrationEnforcementFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.authenticationMethodConfigurations && this.authenticationMethodConfigurations.length != 0){        const authenticationMethodConfigurationsArrValue: AuthenticationMethodConfigurationImpl[] = []; this.authenticationMethodConfigurations?.forEach(element => {authenticationMethodConfigurationsArrValue.push(new AuthenticationMethodConfigurationImpl(element));});
        writer.writeCollectionOfObjectValues<AuthenticationMethodConfigurationImpl>("authenticationMethodConfigurations", authenticationMethodConfigurationsArrValue);
        }
        if(this.description){
        writer.writeStringValue("description", this.description);
        }
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.lastModifiedDateTime){
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        }
        if(this.policyVersion){
        writer.writeStringValue("policyVersion", this.policyVersion);
        }
        if(this.reconfirmationInDays){
        writer.writeNumberValue("reconfirmationInDays", this.reconfirmationInDays);
        }
        if(this.registrationEnforcement){
        writer.writeObjectValue<RegistrationEnforcementImpl>("registrationEnforcement", new RegistrationEnforcementImpl(this.registrationEnforcement));
        }
    };
}
