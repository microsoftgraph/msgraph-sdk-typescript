import {createEducationItemBodyFromDiscriminatorValue} from './createEducationItemBodyFromDiscriminatorValue';
import {EducationItemBody} from './educationItemBody';
import {EducationItemBodyImpl} from './index';
import {RubricCriterion} from './rubricCriterion';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RubricCriterionImpl implements AdditionalDataHolder, Parsable, RubricCriterion {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The description of this criterion. */
    public description?: EducationItemBody | undefined;
    /**
     * Instantiates a new rubricCriterion and sets the default values.
     * @param rubricCriterionParameterValue 
     */
    public constructor(rubricCriterionParameterValue?: RubricCriterion | undefined) {
        this.additionalData = rubricCriterionParameterValue?.additionalData ? rubricCriterionParameterValue?.additionalData! : {}
        this.description = rubricCriterionParameterValue?.description ;
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
        writer.writeObjectValue<EducationItemBodyImpl>("description", new EducationItemBodyImpl(this.description));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
