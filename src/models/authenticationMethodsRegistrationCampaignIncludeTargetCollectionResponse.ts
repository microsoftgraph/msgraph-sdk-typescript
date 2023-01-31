import {createAuthenticationMethodsRegistrationCampaignIncludeTargetFromDiscriminatorValue} from './createAuthenticationMethodsRegistrationCampaignIncludeTargetFromDiscriminatorValue';
import {AuthenticationMethodsRegistrationCampaignIncludeTarget, BaseCollectionPaginationCountResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AuthenticationMethodsRegistrationCampaignIncludeTargetCollectionResponse extends BaseCollectionPaginationCountResponse implements Parsable {
    private _value?: AuthenticationMethodsRegistrationCampaignIncludeTarget[] | undefined;
    /**
     * Instantiates a new AuthenticationMethodsRegistrationCampaignIncludeTargetCollectionResponse and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "value": n => { this.value = n.getCollectionOfObjectValues<AuthenticationMethodsRegistrationCampaignIncludeTarget>(createAuthenticationMethodsRegistrationCampaignIncludeTargetFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<AuthenticationMethodsRegistrationCampaignIncludeTarget>("value", this.value);
    };
    /**
     * Gets the value property value. 
     * @returns a authenticationMethodsRegistrationCampaignIncludeTarget
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. 
     * @param value Value to set for the value property.
     */
    public set value(value: AuthenticationMethodsRegistrationCampaignIncludeTarget[] | undefined) {
        this._value = value;
    };
}
