import {createUserConsentRequestFromDiscriminatorValue} from './createUserConsentRequestFromDiscriminatorValue';
import {UserConsentRequestImpl} from './index';
import {UserConsentRequest} from './userConsentRequest';
import {UserConsentRequestCollectionResponse} from './userConsentRequestCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UserConsentRequestCollectionResponseImpl implements AdditionalDataHolder, Parsable, UserConsentRequestCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: UserConsentRequest[] | undefined;
    /**
     * Instantiates a new UserConsentRequestCollectionResponse and sets the default values.
     * @param userConsentRequestCollectionResponseParameterValue 
     */
    public constructor(userConsentRequestCollectionResponseParameterValue?: UserConsentRequestCollectionResponse | undefined) {
        this.additionalData = userConsentRequestCollectionResponseParameterValue?.additionalData ? userConsentRequestCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = userConsentRequestCollectionResponseParameterValue?.nextLink ;
        this.value = userConsentRequestCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<UserConsentRequestImpl>(createUserConsentRequestFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: UserConsentRequestImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new UserConsentRequestImpl(element));});
        writer.writeCollectionOfObjectValues<UserConsentRequestImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
