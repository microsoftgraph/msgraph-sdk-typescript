import {ConditionalAccessFilter} from './conditionalAccessFilter';
import {FilterMode} from './filterMode';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ConditionalAccessFilterImpl implements AdditionalDataHolder, ConditionalAccessFilter, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Mode to use for the filter. Possible values are include or exclude. */
    public mode?: FilterMode | undefined;
    /** Rule syntax is similar to that used for membership rules for groups in Azure Active Directory. For details, see rules with multiple expressions */
    public rule?: string | undefined;
    /**
     * Instantiates a new conditionalAccessFilter and sets the default values.
     * @param conditionalAccessFilterParameterValue 
     */
    public constructor(conditionalAccessFilterParameterValue?: ConditionalAccessFilter | undefined) {
        this.additionalData = conditionalAccessFilterParameterValue?.additionalData ? conditionalAccessFilterParameterValue?.additionalData! : {}
        this.mode = conditionalAccessFilterParameterValue?.mode ;
        this.rule = conditionalAccessFilterParameterValue?.rule ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "mode": n => { this.mode = n.getEnumValue<FilterMode>(FilterMode); },
            "rule": n => { this.rule = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.mode){
        writer.writeEnumValue<FilterMode>("mode", this.mode);
        }
        if(this.rule){
        writer.writeStringValue("rule", this.rule);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
