import {createUserFromDiscriminatorValue} from './createUserFromDiscriminatorValue';
import {UserImpl} from './index';
import {User} from './user';
import {UserCollectionResponse} from './userCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UserCollectionResponseImpl implements UserCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: User[] | undefined;
    /**
     * Instantiates a new UserCollectionResponse and sets the default values.
     * @param userCollectionResponseParameterValue 
     */
    public constructor(userCollectionResponseParameterValue?: UserCollectionResponse | undefined) {
        this.additionalData = userCollectionResponseParameterValue?.additionalData ? userCollectionResponseParameterValue?.additionalData! : {};
        this.nextLink = userCollectionResponseParameterValue?.nextLink;
        const valueArrValue: UserImpl[] = []; userCollectionResponseParameterValue?.value?.forEach(element => {valueArrValue.push(element instanceof UserImpl? element : new UserImpl(element));});
        this.value = valueArrValue;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<UserImpl>(createUserFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: UserImpl[] = []; this.value?.forEach(element => {valueArrValue.push(element instanceof UserImpl? element : new UserImpl(element));});
            writer.writeCollectionOfObjectValues<UserImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
