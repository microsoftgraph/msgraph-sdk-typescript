import {AccessReviewApplyActionImpl} from './index';
import {RemoveAccessApplyAction} from './removeAccessApplyAction';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RemoveAccessApplyActionImpl extends AccessReviewApplyActionImpl implements RemoveAccessApplyAction {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /**
     * Instantiates a new RemoveAccessApplyAction and sets the default values.
     * @param removeAccessApplyActionParameterValue 
     */
    public constructor(removeAccessApplyActionParameterValue?: RemoveAccessApplyAction | undefined) {
        super(removeAccessApplyActionParameterValue);
        this.additionalData = removeAccessApplyActionParameterValue?.additionalData ? removeAccessApplyActionParameterValue?.additionalData! : {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeAdditionalData(this.additionalData);
    };
}
