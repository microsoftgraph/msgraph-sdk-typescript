import {createThreatAssessmentResultFromDiscriminatorValue} from './createThreatAssessmentResultFromDiscriminatorValue';
import {ThreatAssessmentResultImpl} from './index';
import {ThreatAssessmentResult} from './threatAssessmentResult';
import {ThreatAssessmentResultCollectionResponse} from './threatAssessmentResultCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ThreatAssessmentResultCollectionResponseImpl implements AdditionalDataHolder, Parsable, ThreatAssessmentResultCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: ThreatAssessmentResult[] | undefined;
    /**
     * Instantiates a new ThreatAssessmentResultCollectionResponse and sets the default values.
     * @param threatAssessmentResultCollectionResponseParameterValue 
     */
    public constructor(threatAssessmentResultCollectionResponseParameterValue?: ThreatAssessmentResultCollectionResponse | undefined) {
        this.additionalData = threatAssessmentResultCollectionResponseParameterValue?.additionalData ? threatAssessmentResultCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = threatAssessmentResultCollectionResponseParameterValue?.nextLink ;
        this.value = threatAssessmentResultCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<ThreatAssessmentResultImpl>(createThreatAssessmentResultFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: ThreatAssessmentResultImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new ThreatAssessmentResultImpl(element));});
        writer.writeCollectionOfObjectValues<ThreatAssessmentResultImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
