import {createEducationSubmissionResourceFromDiscriminatorValue} from './createEducationSubmissionResourceFromDiscriminatorValue';
import {EducationSubmissionResource} from './educationSubmissionResource';
import {EducationSubmissionResourceCollectionResponse} from './educationSubmissionResourceCollectionResponse';
import {EducationSubmissionResourceImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EducationSubmissionResourceCollectionResponseImpl implements AdditionalDataHolder, EducationSubmissionResourceCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: EducationSubmissionResource[] | undefined;
    /**
     * Instantiates a new EducationSubmissionResourceCollectionResponse and sets the default values.
     * @param educationSubmissionResourceCollectionResponseParameterValue 
     */
    public constructor(educationSubmissionResourceCollectionResponseParameterValue?: EducationSubmissionResourceCollectionResponse | undefined) {
        this.additionalData = educationSubmissionResourceCollectionResponseParameterValue?.additionalData ? educationSubmissionResourceCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = educationSubmissionResourceCollectionResponseParameterValue?.nextLink ;
        this.value = educationSubmissionResourceCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<EducationSubmissionResourceImpl>(createEducationSubmissionResourceFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: EducationSubmissionResourceImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new EducationSubmissionResourceImpl(element));});
        writer.writeCollectionOfObjectValues<EducationSubmissionResourceImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
