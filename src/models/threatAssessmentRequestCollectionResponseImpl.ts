import {createThreatAssessmentRequestFromDiscriminatorValue} from './createThreatAssessmentRequestFromDiscriminatorValue';
import {ThreatAssessmentRequestImpl} from './index';
import {ThreatAssessmentRequest} from './threatAssessmentRequest';
import {ThreatAssessmentRequestCollectionResponse} from './threatAssessmentRequestCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ThreatAssessmentRequestCollectionResponseImpl implements AdditionalDataHolder, Parsable, ThreatAssessmentRequestCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: ThreatAssessmentRequest[] | undefined;
    /**
     * Instantiates a new ThreatAssessmentRequestCollectionResponse and sets the default values.
     * @param threatAssessmentRequestCollectionResponseParameterValue 
     */
    public constructor(threatAssessmentRequestCollectionResponseParameterValue?: ThreatAssessmentRequestCollectionResponse | undefined) {
        this.additionalData = threatAssessmentRequestCollectionResponseParameterValue?.additionalData ? threatAssessmentRequestCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = threatAssessmentRequestCollectionResponseParameterValue?.nextLink ;
        this.value = threatAssessmentRequestCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<ThreatAssessmentRequestImpl>(createThreatAssessmentRequestFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: ThreatAssessmentRequestImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new ThreatAssessmentRequestImpl(element));});
        writer.writeCollectionOfObjectValues<ThreatAssessmentRequestImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
