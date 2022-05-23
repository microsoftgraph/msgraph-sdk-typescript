import {createEducationCategoryFromDiscriminatorValue} from './createEducationCategoryFromDiscriminatorValue';
import {EducationCategory} from './educationCategory';
import {EducationCategoryCollectionResponse} from './educationCategoryCollectionResponse';
import {EducationCategoryImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EducationCategoryCollectionResponseImpl implements AdditionalDataHolder, EducationCategoryCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: EducationCategory[] | undefined;
    /**
     * Instantiates a new EducationCategoryCollectionResponse and sets the default values.
     * @param educationCategoryCollectionResponseParameterValue 
     */
    public constructor(educationCategoryCollectionResponseParameterValue?: EducationCategoryCollectionResponse | undefined) {
        this.additionalData = educationCategoryCollectionResponseParameterValue?.additionalData ? educationCategoryCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = educationCategoryCollectionResponseParameterValue?.nextLink ;
        this.value = educationCategoryCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<EducationCategoryImpl>(createEducationCategoryFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: EducationCategoryImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new EducationCategoryImpl(element));});
        writer.writeCollectionOfObjectValues<EducationCategoryImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
