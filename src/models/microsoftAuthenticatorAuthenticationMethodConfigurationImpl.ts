import {createMicrosoftAuthenticatorAuthenticationMethodTargetFromDiscriminatorValue} from './createMicrosoftAuthenticatorAuthenticationMethodTargetFromDiscriminatorValue';
import {AuthenticationMethodConfigurationImpl, MicrosoftAuthenticatorAuthenticationMethodTargetImpl} from './index';
import {MicrosoftAuthenticatorAuthenticationMethodConfiguration} from './microsoftAuthenticatorAuthenticationMethodConfiguration';
import {MicrosoftAuthenticatorAuthenticationMethodTarget} from './microsoftAuthenticatorAuthenticationMethodTarget';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MicrosoftAuthenticatorAuthenticationMethodConfigurationImpl extends AuthenticationMethodConfigurationImpl implements MicrosoftAuthenticatorAuthenticationMethodConfiguration {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** A collection of users or groups who are enabled to use the authentication method. */
    public includeTargets?: MicrosoftAuthenticatorAuthenticationMethodTarget[] | undefined;
    /**
     * Instantiates a new MicrosoftAuthenticatorAuthenticationMethodConfiguration and sets the default values.
     * @param microsoftAuthenticatorAuthenticationMethodConfigurationParameterValue 
     */
    public constructor(microsoftAuthenticatorAuthenticationMethodConfigurationParameterValue?: MicrosoftAuthenticatorAuthenticationMethodConfiguration | undefined) {
        super(microsoftAuthenticatorAuthenticationMethodConfigurationParameterValue);
        this.additionalData = microsoftAuthenticatorAuthenticationMethodConfigurationParameterValue?.additionalData ? microsoftAuthenticatorAuthenticationMethodConfigurationParameterValue?.additionalData! : {};
        const includeTargetsArrValue: MicrosoftAuthenticatorAuthenticationMethodTargetImpl[] = []; microsoftAuthenticatorAuthenticationMethodConfigurationParameterValue.includeTargets?.forEach(element => {includeTargetsArrValue.push(element instanceof MicrosoftAuthenticatorAuthenticationMethodTargetImpl? element : new MicrosoftAuthenticatorAuthenticationMethodTargetImpl(element));});
        this.includeTargets = includeTargetsArrValue;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "includeTargets": n => { this.includeTargets = n.getCollectionOfObjectValues<MicrosoftAuthenticatorAuthenticationMethodTargetImpl>(createMicrosoftAuthenticatorAuthenticationMethodTargetFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.includeTargets && this.includeTargets.length != 0){        const includeTargetsArrValue: MicrosoftAuthenticatorAuthenticationMethodTargetImpl[] = []; this.includeTargets?.forEach(element => {includeTargetsArrValue.push(element instanceof MicrosoftAuthenticatorAuthenticationMethodTargetImpl? element : new MicrosoftAuthenticatorAuthenticationMethodTargetImpl(element));});
            writer.writeCollectionOfObjectValues<MicrosoftAuthenticatorAuthenticationMethodTargetImpl>("includeTargets", includeTargetsArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
