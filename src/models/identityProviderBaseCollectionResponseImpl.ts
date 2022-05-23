import {createIdentityProviderBaseFromDiscriminatorValue} from './createIdentityProviderBaseFromDiscriminatorValue';
import {IdentityProviderBase} from './identityProviderBase';
import {IdentityProviderBaseCollectionResponse} from './identityProviderBaseCollectionResponse';
import {IdentityProviderBaseImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IdentityProviderBaseCollectionResponseImpl implements AdditionalDataHolder, IdentityProviderBaseCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: IdentityProviderBase[] | undefined;
    /**
     * Instantiates a new IdentityProviderBaseCollectionResponse and sets the default values.
     * @param identityProviderBaseCollectionResponseParameterValue 
     */
    public constructor(identityProviderBaseCollectionResponseParameterValue?: IdentityProviderBaseCollectionResponse | undefined) {
        this.additionalData = identityProviderBaseCollectionResponseParameterValue?.additionalData ? identityProviderBaseCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = identityProviderBaseCollectionResponseParameterValue?.nextLink ;
        this.value = identityProviderBaseCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<IdentityProviderBaseImpl>(createIdentityProviderBaseFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: IdentityProviderBaseImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new IdentityProviderBaseImpl(element));});
        writer.writeCollectionOfObjectValues<IdentityProviderBaseImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
