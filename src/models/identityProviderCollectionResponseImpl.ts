import {createIdentityProviderFromDiscriminatorValue} from './createIdentityProviderFromDiscriminatorValue';
import {IdentityProvider} from './identityProvider';
import {IdentityProviderCollectionResponse} from './identityProviderCollectionResponse';
import {IdentityProviderImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IdentityProviderCollectionResponseImpl implements AdditionalDataHolder, IdentityProviderCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: IdentityProvider[] | undefined;
    /**
     * Instantiates a new IdentityProviderCollectionResponse and sets the default values.
     * @param identityProviderCollectionResponseParameterValue 
     */
    public constructor(identityProviderCollectionResponseParameterValue?: IdentityProviderCollectionResponse | undefined) {
        this.additionalData = identityProviderCollectionResponseParameterValue?.additionalData ? identityProviderCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = identityProviderCollectionResponseParameterValue?.nextLink ;
        this.value = identityProviderCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<IdentityProviderImpl>(createIdentityProviderFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: IdentityProviderImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new IdentityProviderImpl(element));});
        writer.writeCollectionOfObjectValues<IdentityProviderImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
