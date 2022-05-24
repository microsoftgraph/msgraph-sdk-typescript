import {createEducationSubmissionFromDiscriminatorValue} from './createEducationSubmissionFromDiscriminatorValue';
import {EducationSubmission} from './educationSubmission';
import {EducationSubmissionCollectionResponse} from './educationSubmissionCollectionResponse';
import {EducationSubmissionImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EducationSubmissionCollectionResponseImpl implements AdditionalDataHolder, EducationSubmissionCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: EducationSubmission[] | undefined;
    /**
     * Instantiates a new EducationSubmissionCollectionResponse and sets the default values.
     * @param educationSubmissionCollectionResponseParameterValue 
     */
    public constructor(educationSubmissionCollectionResponseParameterValue?: EducationSubmissionCollectionResponse | undefined) {
        this.additionalData = educationSubmissionCollectionResponseParameterValue?.additionalData ? educationSubmissionCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = educationSubmissionCollectionResponseParameterValue?.nextLink ;
        this.value = educationSubmissionCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<EducationSubmissionImpl>(createEducationSubmissionFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: EducationSubmissionImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new EducationSubmissionImpl(element));});
        writer.writeCollectionOfObjectValues<EducationSubmissionImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
