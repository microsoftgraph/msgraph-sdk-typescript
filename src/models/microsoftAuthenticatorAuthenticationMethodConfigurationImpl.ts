import {createMicrosoftAuthenticatorAuthenticationMethodTargetFromDiscriminatorValue} from './createMicrosoftAuthenticatorAuthenticationMethodTargetFromDiscriminatorValue';
import {AuthenticationMethodConfigurationImpl, MicrosoftAuthenticatorAuthenticationMethodTargetImpl} from './index';
import {MicrosoftAuthenticatorAuthenticationMethodConfiguration} from './microsoftAuthenticatorAuthenticationMethodConfiguration';
import {MicrosoftAuthenticatorAuthenticationMethodTarget} from './microsoftAuthenticatorAuthenticationMethodTarget';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MicrosoftAuthenticatorAuthenticationMethodConfigurationImpl extends AuthenticationMethodConfigurationImpl implements MicrosoftAuthenticatorAuthenticationMethodConfiguration {
    /** A collection of users or groups who are enabled to use the authentication method. */
    private _includeTargets?: MicrosoftAuthenticatorAuthenticationMethodTarget[] | undefined;
    /**
     * Instantiates a new MicrosoftAuthenticatorAuthenticationMethodConfiguration and sets the default values.
     * @param microsoftAuthenticatorAuthenticationMethodConfigurationParameterValue 
     */
    public constructor(microsoftAuthenticatorAuthenticationMethodConfigurationParameterValue?: MicrosoftAuthenticatorAuthenticationMethodConfiguration | undefined) {
        super(microsoftAuthenticatorAuthenticationMethodConfigurationParameterValue);
        this._includeTargets = microsoftAuthenticatorAuthenticationMethodConfigurationParameterValue?.includeTargets;
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
     * Gets the includeTargets property value. A collection of users or groups who are enabled to use the authentication method.
     * @returns a MicrosoftAuthenticatorAuthenticationMethodTargetInterface
     */
    public get includeTargets() {
        return this._includeTargets;
    };
    /**
     * Sets the includeTargets property value. A collection of users or groups who are enabled to use the authentication method.
     * @param value Value to set for the includeTargets property.
     */
    public set includeTargets(value: MicrosoftAuthenticatorAuthenticationMethodTarget[] | undefined) {
        if(value) {
            const includeTargetsArrValue: MicrosoftAuthenticatorAuthenticationMethodTargetImpl[] = [];
            this.includeTargets?.forEach(element => {
                includeTargetsArrValue.push((element instanceof MicrosoftAuthenticatorAuthenticationMethodTargetImpl? element:new MicrosoftAuthenticatorAuthenticationMethodTargetImpl(element)));
            });
            this._includeTargets = includeTargetsArrValue;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.includeTargets && this.includeTargets.length != 0){        const includeTargetsArrValue: MicrosoftAuthenticatorAuthenticationMethodTargetImpl[] = [];
        this.includeTargets?.forEach(element => {
            includeTargetsArrValue.push((element instanceof MicrosoftAuthenticatorAuthenticationMethodTargetImpl? element:new MicrosoftAuthenticatorAuthenticationMethodTargetImpl(element)));
        });
            writer.writeCollectionOfObjectValues<MicrosoftAuthenticatorAuthenticationMethodTargetImpl>("includeTargets", includeTargetsArrValue);
        }
    };
}
