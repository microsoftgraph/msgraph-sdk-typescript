import {createEducationUserFromDiscriminatorValue} from './createEducationUserFromDiscriminatorValue';
import {EducationUser} from './educationUser';
import {EducationUserCollectionResponse} from './educationUserCollectionResponse';
import {EducationUserImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EducationUserCollectionResponseImpl implements AdditionalDataHolder, EducationUserCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: EducationUser[] | undefined;
    /**
     * Instantiates a new EducationUserCollectionResponse and sets the default values.
     * @param educationUserCollectionResponseParameterValue 
     */
    public constructor(educationUserCollectionResponseParameterValue?: EducationUserCollectionResponse | undefined) {
        this.additionalData = educationUserCollectionResponseParameterValue?.additionalData ? educationUserCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = educationUserCollectionResponseParameterValue?.nextLink ;
        this.value = educationUserCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<EducationUserImpl>(createEducationUserFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: EducationUserImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new EducationUserImpl(element));});
        writer.writeCollectionOfObjectValues<EducationUserImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
