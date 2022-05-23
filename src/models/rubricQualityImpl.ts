import {createEducationItemBodyFromDiscriminatorValue} from './createEducationItemBodyFromDiscriminatorValue';
import {createRubricCriterionFromDiscriminatorValue} from './createRubricCriterionFromDiscriminatorValue';
import {EducationItemBody} from './educationItemBody';
import {EducationItemBodyImpl, RubricCriterionImpl} from './index';
import {RubricCriterion} from './rubricCriterion';
import {RubricQuality} from './rubricQuality';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RubricQualityImpl implements AdditionalDataHolder, Parsable, RubricQuality {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The collection of criteria for this rubric quality. */
    public criteria?: RubricCriterion[] | undefined;
    /** The description of this rubric quality. */
    public description?: EducationItemBody | undefined;
    /** The name of this rubric quality. */
    public displayName?: string | undefined;
    /** The ID of this resource. */
    public qualityId?: string | undefined;
    /** If present, a numerical weight for this quality.  Weights must add up to 100. */
    public weight?: number | undefined;
    /**
     * Instantiates a new rubricQuality and sets the default values.
     * @param rubricQualityParameterValue 
     */
    public constructor(rubricQualityParameterValue?: RubricQuality | undefined) {
        this.additionalData = rubricQualityParameterValue?.additionalData ? rubricQualityParameterValue?.additionalData! : {}
        this.criteria = rubricQualityParameterValue?.criteria ;
        this.description = rubricQualityParameterValue?.description ;
        this.displayName = rubricQualityParameterValue?.displayName ;
        this.qualityId = rubricQualityParameterValue?.qualityId ;
        this.weight = rubricQualityParameterValue?.weight ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "criteria": n => { this.criteria = n.getCollectionOfObjectValues<RubricCriterionImpl>(createRubricCriterionFromDiscriminatorValue); },
            "description": n => { this.description = n.getObjectValue<EducationItemBodyImpl>(createEducationItemBodyFromDiscriminatorValue); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "qualityId": n => { this.qualityId = n.getStringValue(); },
            "weight": n => { this.weight = n.getNumberValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.criteria && this.criteria.length != 0){        const criteriaArrValue: RubricCriterionImpl[] = []; this.criteria?.forEach(element => {criteriaArrValue.push(new RubricCriterionImpl(element));});
        writer.writeCollectionOfObjectValues<RubricCriterionImpl>("criteria", criteriaArrValue);
        }
        if(this.description){
        writer.writeObjectValue<EducationItemBodyImpl>("description", new EducationItemBodyImpl(this.description));
        }
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.qualityId){
        writer.writeStringValue("qualityId", this.qualityId);
        }
        if(this.weight){
        writer.writeNumberValue("weight", this.weight);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
