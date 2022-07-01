import {createEducationItemBodyFromDiscriminatorValue} from './createEducationItemBodyFromDiscriminatorValue';
import {createRubricCriterionFromDiscriminatorValue} from './createRubricCriterionFromDiscriminatorValue';
import {EducationItemBody} from './educationItemBody';
import {EducationItemBodyImpl, RubricCriterionImpl} from './index';
import {RubricCriterion} from './rubricCriterion';
import {RubricQuality} from './rubricQuality';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RubricQualityImpl implements RubricQuality {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** The collection of criteria for this rubric quality. */
    private _criteria?: RubricCriterion[] | undefined;
    /** The description of this rubric quality. */
    private _description?: EducationItemBody | undefined;
    /** The name of this rubric quality. */
    private _displayName?: string | undefined;
    /** The ID of this resource. */
    private _qualityId?: string | undefined;
    /** If present, a numerical weight for this quality.  Weights must add up to 100. */
    private _weight?: number | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown> | undefined) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new rubricQuality and sets the default values.
     * @param rubricQualityParameterValue 
     */
    public constructor(rubricQualityParameterValue?: RubricQuality | undefined) {
        this._additionalData = rubricQualityParameterValue?.additionalData ? rubricQualityParameterValue?.additionalData! : {};
        this._criteria = rubricQualityParameterValue?.criteria;
        this._description = rubricQualityParameterValue?.description;
        this._displayName = rubricQualityParameterValue?.displayName;
        this._qualityId = rubricQualityParameterValue?.qualityId;
        this._weight = rubricQualityParameterValue?.weight;
    };
    /**
     * Gets the criteria property value. The collection of criteria for this rubric quality.
     * @returns a RubricCriterionInterface
     */
    public get criteria() {
        return this._criteria;
    };
    /**
     * Sets the criteria property value. The collection of criteria for this rubric quality.
     * @param value Value to set for the criteria property.
     */
    public set criteria(value: RubricCriterion[] | undefined) {
        if(value) {
            const criteriaArrValue: RubricCriterionImpl[] = [];
            this.criteria?.forEach(element => {
                criteriaArrValue.push((element instanceof RubricCriterionImpl? element as RubricCriterionImpl:new RubricCriterionImpl(element)));
            });
            this._criteria = criteriaArrValue;
        }
    };
    /**
     * Gets the description property value. The description of this rubric quality.
     * @returns a EducationItemBodyInterface
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. The description of this rubric quality.
     * @param value Value to set for the description property.
     */
    public set description(value: EducationItemBody | undefined) {
        if(value) {
            this._description = value instanceof EducationItemBodyImpl? value as EducationItemBodyImpl: new EducationItemBodyImpl(value);
        }
    };
    /**
     * Gets the displayName property value. The name of this rubric quality.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The name of this rubric quality.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        if(value) {
            this._displayName = value;
        }
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
     * Gets the qualityId property value. The ID of this resource.
     * @returns a string
     */
    public get qualityId() {
        return this._qualityId;
    };
    /**
     * Sets the qualityId property value. The ID of this resource.
     * @param value Value to set for the qualityId property.
     */
    public set qualityId(value: string | undefined) {
        if(value) {
            this._qualityId = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.criteria && this.criteria.length != 0){        const criteriaArrValue: RubricCriterionImpl[] = [];
        this.criteria?.forEach(element => {
            criteriaArrValue.push((element instanceof RubricCriterionImpl? element as RubricCriterionImpl:new RubricCriterionImpl(element)));
        });
            writer.writeCollectionOfObjectValues<RubricCriterionImpl>("criteria", criteriaArrValue);
        }
        if(this.description){
            writer.writeObjectValue<EducationItemBodyImpl>("description", (this.description instanceof EducationItemBodyImpl? this.description as EducationItemBodyImpl: new EducationItemBodyImpl(this.description)));
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
    /**
     * Gets the weight property value. If present, a numerical weight for this quality.  Weights must add up to 100.
     * @returns a float
     */
    public get weight() {
        return this._weight;
    };
    /**
     * Sets the weight property value. If present, a numerical weight for this quality.  Weights must add up to 100.
     * @param value Value to set for the weight property.
     */
    public set weight(value: number | undefined) {
        if(value) {
            this._weight = value;
        }
    };
}
