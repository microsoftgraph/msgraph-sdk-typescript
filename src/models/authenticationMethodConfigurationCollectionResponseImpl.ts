import {AuthenticationMethodConfiguration} from './authenticationMethodConfiguration';
import {AuthenticationMethodConfigurationCollectionResponse} from './authenticationMethodConfigurationCollectionResponse';
import {createAuthenticationMethodConfigurationFromDiscriminatorValue} from './createAuthenticationMethodConfigurationFromDiscriminatorValue';
import {AuthenticationMethodConfigurationImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AuthenticationMethodConfigurationCollectionResponseImpl implements AdditionalDataHolder, AuthenticationMethodConfigurationCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: AuthenticationMethodConfiguration[] | undefined;
    /**
     * Instantiates a new AuthenticationMethodConfigurationCollectionResponse and sets the default values.
     * @param authenticationMethodConfigurationCollectionResponseParameterValue 
     */
    public constructor(authenticationMethodConfigurationCollectionResponseParameterValue?: AuthenticationMethodConfigurationCollectionResponse | undefined) {
        this.additionalData = authenticationMethodConfigurationCollectionResponseParameterValue?.additionalData ? authenticationMethodConfigurationCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = authenticationMethodConfigurationCollectionResponseParameterValue?.nextLink ;
        this.value = authenticationMethodConfigurationCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<AuthenticationMethodConfigurationImpl>(createAuthenticationMethodConfigurationFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.nextLink){
        writer.writeStringValue("@odata.nextLink", this.nextLink);
        }
        if(this.value && this.value.length != 0){        const valueArrValue: AuthenticationMethodConfigurationImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new AuthenticationMethodConfigurationImpl(element));});
        writer.writeCollectionOfObjectValues<AuthenticationMethodConfigurationImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
