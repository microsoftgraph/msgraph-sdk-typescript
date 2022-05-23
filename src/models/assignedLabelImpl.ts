import {AssignedLabel} from './assignedLabel';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AssignedLabelImpl implements AdditionalDataHolder, AssignedLabel, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The display name of the label. Read-only. */
    public displayName?: string | undefined;
    /** The unique identifier of the label. */
    public labelId?: string | undefined;
    /**
     * Instantiates a new assignedLabel and sets the default values.
     * @param assignedLabelParameterValue 
     */
    public constructor(assignedLabelParameterValue?: AssignedLabel | undefined) {
        this.additionalData = assignedLabelParameterValue?.additionalData ? assignedLabelParameterValue?.additionalData! : {}
        this.displayName = assignedLabelParameterValue?.displayName ;
        this.labelId = assignedLabelParameterValue?.labelId ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "displayName": n => { this.displayName = n.getStringValue(); },
            "labelId": n => { this.labelId = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.labelId){
        writer.writeStringValue("labelId", this.labelId);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
