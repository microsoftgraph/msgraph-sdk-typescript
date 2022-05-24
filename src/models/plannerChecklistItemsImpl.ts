import {PlannerChecklistItems} from './plannerChecklistItems';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PlannerChecklistItemsImpl implements AdditionalDataHolder, Parsable, PlannerChecklistItems {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /**
     * Instantiates a new plannerChecklistItems and sets the default values.
     * @param plannerChecklistItemsParameterValue 
     */
    public constructor(plannerChecklistItemsParameterValue?: PlannerChecklistItems | undefined) {
        this.additionalData = plannerChecklistItemsParameterValue?.additionalData ? plannerChecklistItemsParameterValue?.additionalData! : {}
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeAdditionalData(this.additionalData);
    };
}
