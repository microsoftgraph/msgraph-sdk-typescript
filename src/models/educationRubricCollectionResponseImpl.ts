import {createEducationRubricFromDiscriminatorValue} from './createEducationRubricFromDiscriminatorValue';
import {EducationRubric} from './educationRubric';
import {EducationRubricCollectionResponse} from './educationRubricCollectionResponse';
import {EducationRubricImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EducationRubricCollectionResponseImpl implements AdditionalDataHolder, EducationRubricCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: EducationRubric[] | undefined;
    /**
     * Instantiates a new EducationRubricCollectionResponse and sets the default values.
     * @param educationRubricCollectionResponseParameterValue 
     */
    public constructor(educationRubricCollectionResponseParameterValue?: EducationRubricCollectionResponse | undefined) {
        this.additionalData = educationRubricCollectionResponseParameterValue?.additionalData ? educationRubricCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = educationRubricCollectionResponseParameterValue?.nextLink ;
        this.value = educationRubricCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<EducationRubricImpl>(createEducationRubricFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: EducationRubricImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new EducationRubricImpl(element));});
        writer.writeCollectionOfObjectValues<EducationRubricImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
