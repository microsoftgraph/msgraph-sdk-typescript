import {createEducationSchoolFromDiscriminatorValue} from './createEducationSchoolFromDiscriminatorValue';
import {EducationSchool} from './educationSchool';
import {EducationSchoolCollectionResponse} from './educationSchoolCollectionResponse';
import {EducationSchoolImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EducationSchoolCollectionResponseImpl implements AdditionalDataHolder, EducationSchoolCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: EducationSchool[] | undefined;
    /**
     * Instantiates a new EducationSchoolCollectionResponse and sets the default values.
     * @param educationSchoolCollectionResponseParameterValue 
     */
    public constructor(educationSchoolCollectionResponseParameterValue?: EducationSchoolCollectionResponse | undefined) {
        this.additionalData = educationSchoolCollectionResponseParameterValue?.additionalData ? educationSchoolCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = educationSchoolCollectionResponseParameterValue?.nextLink ;
        this.value = educationSchoolCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<EducationSchoolImpl>(createEducationSchoolFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: EducationSchoolImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new EducationSchoolImpl(element));});
        writer.writeCollectionOfObjectValues<EducationSchoolImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
