import {AuthenticationMethod} from './authenticationMethod';
import {AuthenticationMethodCollectionResponse} from './authenticationMethodCollectionResponse';
import {createAuthenticationMethodFromDiscriminatorValue} from './createAuthenticationMethodFromDiscriminatorValue';
import {AuthenticationMethodImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AuthenticationMethodCollectionResponseImpl implements AdditionalDataHolder, AuthenticationMethodCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: AuthenticationMethod[] | undefined;
    /**
     * Instantiates a new AuthenticationMethodCollectionResponse and sets the default values.
     * @param authenticationMethodCollectionResponseParameterValue 
     */
    public constructor(authenticationMethodCollectionResponseParameterValue?: AuthenticationMethodCollectionResponse | undefined) {
        this.additionalData = authenticationMethodCollectionResponseParameterValue?.additionalData ? authenticationMethodCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = authenticationMethodCollectionResponseParameterValue?.nextLink ;
        this.value = authenticationMethodCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<AuthenticationMethodImpl>(createAuthenticationMethodFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: AuthenticationMethodImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new AuthenticationMethodImpl(element));});
        writer.writeCollectionOfObjectValues<AuthenticationMethodImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
