import {createFido2AuthenticationMethodFromDiscriminatorValue} from './createFido2AuthenticationMethodFromDiscriminatorValue';
import {Fido2AuthenticationMethod} from './fido2AuthenticationMethod';
import {Fido2AuthenticationMethodCollectionResponse} from './fido2AuthenticationMethodCollectionResponse';
import {Fido2AuthenticationMethodImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Fido2AuthenticationMethodCollectionResponseImpl implements AdditionalDataHolder, Fido2AuthenticationMethodCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: Fido2AuthenticationMethod[] | undefined;
    /**
     * Instantiates a new Fido2AuthenticationMethodCollectionResponse and sets the default values.
     * @param fido2AuthenticationMethodCollectionResponseParameterValue 
     */
    public constructor(fido2AuthenticationMethodCollectionResponseParameterValue?: Fido2AuthenticationMethodCollectionResponse | undefined) {
        this.additionalData = fido2AuthenticationMethodCollectionResponseParameterValue?.additionalData ? fido2AuthenticationMethodCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = fido2AuthenticationMethodCollectionResponseParameterValue?.nextLink ;
        this.value = fido2AuthenticationMethodCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<Fido2AuthenticationMethodImpl>(createFido2AuthenticationMethodFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: Fido2AuthenticationMethodImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new Fido2AuthenticationMethodImpl(element));});
        writer.writeCollectionOfObjectValues<Fido2AuthenticationMethodImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
