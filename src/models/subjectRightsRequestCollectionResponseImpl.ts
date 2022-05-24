import {createSubjectRightsRequestFromDiscriminatorValue} from './createSubjectRightsRequestFromDiscriminatorValue';
import {SubjectRightsRequestImpl} from './index';
import {SubjectRightsRequest} from './subjectRightsRequest';
import {SubjectRightsRequestCollectionResponse} from './subjectRightsRequestCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SubjectRightsRequestCollectionResponseImpl implements AdditionalDataHolder, Parsable, SubjectRightsRequestCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: SubjectRightsRequest[] | undefined;
    /**
     * Instantiates a new SubjectRightsRequestCollectionResponse and sets the default values.
     * @param subjectRightsRequestCollectionResponseParameterValue 
     */
    public constructor(subjectRightsRequestCollectionResponseParameterValue?: SubjectRightsRequestCollectionResponse | undefined) {
        this.additionalData = subjectRightsRequestCollectionResponseParameterValue?.additionalData ? subjectRightsRequestCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = subjectRightsRequestCollectionResponseParameterValue?.nextLink ;
        this.value = subjectRightsRequestCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<SubjectRightsRequestImpl>(createSubjectRightsRequestFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: SubjectRightsRequestImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new SubjectRightsRequestImpl(element));});
        writer.writeCollectionOfObjectValues<SubjectRightsRequestImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
