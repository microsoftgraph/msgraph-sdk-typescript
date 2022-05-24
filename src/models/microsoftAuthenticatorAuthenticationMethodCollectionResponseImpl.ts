import {createMicrosoftAuthenticatorAuthenticationMethodFromDiscriminatorValue} from './createMicrosoftAuthenticatorAuthenticationMethodFromDiscriminatorValue';
import {MicrosoftAuthenticatorAuthenticationMethodImpl} from './index';
import {MicrosoftAuthenticatorAuthenticationMethod} from './microsoftAuthenticatorAuthenticationMethod';
import {MicrosoftAuthenticatorAuthenticationMethodCollectionResponse} from './microsoftAuthenticatorAuthenticationMethodCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MicrosoftAuthenticatorAuthenticationMethodCollectionResponseImpl implements AdditionalDataHolder, MicrosoftAuthenticatorAuthenticationMethodCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: MicrosoftAuthenticatorAuthenticationMethod[] | undefined;
    /**
     * Instantiates a new MicrosoftAuthenticatorAuthenticationMethodCollectionResponse and sets the default values.
     * @param microsoftAuthenticatorAuthenticationMethodCollectionResponseParameterValue 
     */
    public constructor(microsoftAuthenticatorAuthenticationMethodCollectionResponseParameterValue?: MicrosoftAuthenticatorAuthenticationMethodCollectionResponse | undefined) {
        this.additionalData = microsoftAuthenticatorAuthenticationMethodCollectionResponseParameterValue?.additionalData ? microsoftAuthenticatorAuthenticationMethodCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = microsoftAuthenticatorAuthenticationMethodCollectionResponseParameterValue?.nextLink ;
        this.value = microsoftAuthenticatorAuthenticationMethodCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<MicrosoftAuthenticatorAuthenticationMethodImpl>(createMicrosoftAuthenticatorAuthenticationMethodFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: MicrosoftAuthenticatorAuthenticationMethodImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new MicrosoftAuthenticatorAuthenticationMethodImpl(element));});
        writer.writeCollectionOfObjectValues<MicrosoftAuthenticatorAuthenticationMethodImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
