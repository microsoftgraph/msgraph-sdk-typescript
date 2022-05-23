import {AssignmentOrder} from './assignmentOrder';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AssignmentOrderImpl implements AdditionalDataHolder, AssignmentOrder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** A list of identityUserFlowAttribute IDs provided to determine the order in which attributes should be collected within a user flow. */
    public order?: string[] | undefined;
    /**
     * Instantiates a new AssignmentOrder and sets the default values.
     * @param assignmentOrderParameterValue 
     */
    public constructor(assignmentOrderParameterValue?: AssignmentOrder | undefined) {
        this.additionalData = assignmentOrderParameterValue?.additionalData ? assignmentOrderParameterValue?.additionalData! : {}
        this.order = assignmentOrderParameterValue?.order ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "order": n => { this.order = n.getCollectionOfPrimitiveValues<string>(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.order){
        writer.writeCollectionOfPrimitiveValues<string>("order", this.order);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
