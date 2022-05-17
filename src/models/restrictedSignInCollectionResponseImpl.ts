import {createRestrictedSignInFromDiscriminatorValue} from './createRestrictedSignInFromDiscriminatorValue';
import {RestrictedSignInImpl} from './index';
import {RestrictedSignIn} from './restrictedSignIn';
import {RestrictedSignInCollectionResponse} from './restrictedSignInCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RestrictedSignInCollectionResponseImpl implements AdditionalDataHolder, Parsable, RestrictedSignInCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData: Record<string, unknown>;
    /** The nextLink property */
    nextLink?: string | undefined;
    /** The value property */
    value?: RestrictedSignIn[] | undefined;
    /**
     * Instantiates a new RestrictedSignInCollectionResponse and sets the default values.
     * @param restrictedSignInCollectionResponseParameterValue 
     */
    public constructor(restrictedSignInCollectionResponseParameterValue?: RestrictedSignInCollectionResponse | undefined) {
        this.additionalData = {};
        this.additionalData = restrictedSignInCollectionResponseParameterValue?.additionalData ? {} : restrictedSignInCollectionResponseParameterValue?.additionalData!
        this.nextLink = restrictedSignInCollectionResponseParameterValue?.nextLink ;
        this.value = restrictedSignInCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<RestrictedSignInImpl>(createRestrictedSignInFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.nextLink){
        if(this.nextLink)
        writer.writeStringValue("@odata.nextLink", this.nextLink);
        }
        if(this.value){
        const valueArrValue: RestrictedSignInImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new RestrictedSignInImpl(element));});
        writer.writeCollectionOfObjectValues<RestrictedSignInImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
