import {createEducationItemBodyFromDiscriminatorValue} from './createEducationItemBodyFromDiscriminatorValue';
import {EducationItemBody} from './educationItemBody';
import {EducationItemBodyImpl} from './index';
import {RubricCriterion} from './rubricCriterion';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RubricCriterionImpl implements RubricCriterion {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** The description of this criterion. */
    private _description?: EducationItemBody | undefined;
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
     * Instantiates a new rubricCriterion and sets the default values.
     * @param rubricCriterionParameterValue 
     */
    public constructor(rubricCriterionParameterValue?: RubricCriterion | undefined) {
        this._additionalData = rubricCriterionParameterValue?.additionalData ? rubricCriterionParameterValue?.additionalData! : {};
        this._description = rubricCriterionParameterValue?.description;
    };
    /**
     * Gets the description property value. The description of this criterion.
     * @returns a EducationItemBodyInterface
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. The description of this criterion.
     * @param value Value to set for the description property.
     */
    public set description(value: EducationItemBody | undefined) {
        if(value) {
            this._description = value instanceof EducationItemBodyImpl? value : new EducationItemBodyImpl(value);
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "description": n => { this.description = n.getObjectValue<EducationItemBodyImpl>(createEducationItemBodyFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.description){
            writer.writeObjectValue<EducationItemBodyImpl>("description", (!this.description || this.description instanceof EducationItemBodyImpl? this.description : new EducationItemBodyImpl(this.description)));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
