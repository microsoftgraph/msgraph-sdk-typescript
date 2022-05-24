import {createSignInFromDiscriminatorValue} from './createSignInFromDiscriminatorValue';
import {SignInImpl} from './index';
import {SignIn} from './signIn';
import {SignInCollectionResponse} from './signInCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SignInCollectionResponseImpl implements AdditionalDataHolder, Parsable, SignInCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: SignIn[] | undefined;
    /**
     * Instantiates a new SignInCollectionResponse and sets the default values.
     * @param signInCollectionResponseParameterValue 
     */
    public constructor(signInCollectionResponseParameterValue?: SignInCollectionResponse | undefined) {
        this.additionalData = signInCollectionResponseParameterValue?.additionalData ? signInCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = signInCollectionResponseParameterValue?.nextLink ;
        this.value = signInCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<SignInImpl>(createSignInFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: SignInImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new SignInImpl(element));});
        writer.writeCollectionOfObjectValues<SignInImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
