import {createProfilePhotoFromDiscriminatorValue} from './createProfilePhotoFromDiscriminatorValue';
import {ProfilePhotoImpl} from './index';
import {ProfilePhoto} from './profilePhoto';
import {ProfilePhotoCollectionResponse} from './profilePhotoCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ProfilePhotoCollectionResponseImpl implements AdditionalDataHolder, Parsable, ProfilePhotoCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: ProfilePhoto[] | undefined;
    /**
     * Instantiates a new ProfilePhotoCollectionResponse and sets the default values.
     * @param profilePhotoCollectionResponseParameterValue 
     */
    public constructor(profilePhotoCollectionResponseParameterValue?: ProfilePhotoCollectionResponse | undefined) {
        this.additionalData = profilePhotoCollectionResponseParameterValue?.additionalData ? profilePhotoCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = profilePhotoCollectionResponseParameterValue?.nextLink ;
        this.value = profilePhotoCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<ProfilePhotoImpl>(createProfilePhotoFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: ProfilePhotoImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new ProfilePhotoImpl(element));});
        writer.writeCollectionOfObjectValues<ProfilePhotoImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
