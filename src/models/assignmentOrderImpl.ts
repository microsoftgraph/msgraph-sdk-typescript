import {AssignmentOrder} from './assignmentOrder';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AssignmentOrderImpl implements AssignmentOrder {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** A list of identityUserFlowAttribute IDs provided to determine the order in which attributes should be collected within a user flow. */
    private _order?: string[] | undefined;
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
    public set additionalData(value: Record<string, unknown>) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new AssignmentOrder and sets the default values.
     * @param assignmentOrderParameterValue 
     */
    public constructor(assignmentOrderParameterValue?: AssignmentOrder | undefined) {
        this._additionalData = assignmentOrderParameterValue?.additionalData ? assignmentOrderParameterValue?.additionalData! : {};
        this._order = assignmentOrderParameterValue?.order;
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
     * Gets the order property value. A list of identityUserFlowAttribute IDs provided to determine the order in which attributes should be collected within a user flow.
     * @returns a string
     */
    public get order() {
        return this._order;
    };
    /**
     * Sets the order property value. A list of identityUserFlowAttribute IDs provided to determine the order in which attributes should be collected within a user flow.
     * @param value Value to set for the order property.
     */
    public set order(value: string[] | undefined) {
        if(value) {
            this._order = value;
        }
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
