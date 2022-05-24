import {createEducationAssignmentResourceFromDiscriminatorValue} from './createEducationAssignmentResourceFromDiscriminatorValue';
import {EducationAssignmentResource} from './educationAssignmentResource';
import {EducationAssignmentResourceCollectionResponse} from './educationAssignmentResourceCollectionResponse';
import {EducationAssignmentResourceImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EducationAssignmentResourceCollectionResponseImpl implements AdditionalDataHolder, EducationAssignmentResourceCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: EducationAssignmentResource[] | undefined;
    /**
     * Instantiates a new EducationAssignmentResourceCollectionResponse and sets the default values.
     * @param educationAssignmentResourceCollectionResponseParameterValue 
     */
    public constructor(educationAssignmentResourceCollectionResponseParameterValue?: EducationAssignmentResourceCollectionResponse | undefined) {
        this.additionalData = educationAssignmentResourceCollectionResponseParameterValue?.additionalData ? educationAssignmentResourceCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = educationAssignmentResourceCollectionResponseParameterValue?.nextLink ;
        this.value = educationAssignmentResourceCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<EducationAssignmentResourceImpl>(createEducationAssignmentResourceFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: EducationAssignmentResourceImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new EducationAssignmentResourceImpl(element));});
        writer.writeCollectionOfObjectValues<EducationAssignmentResourceImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
