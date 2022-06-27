import {EntityImpl} from './index';
import {PlannerBucketTaskBoardTaskFormat} from './plannerBucketTaskBoardTaskFormat';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the authenticationMethodsPolicy singleton. */
export class PlannerBucketTaskBoardTaskFormatImpl extends EntityImpl implements PlannerBucketTaskBoardTaskFormat {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Hint used to order tasks in the Bucket view of the Task Board. The format is defined as outlined here. */
    public orderHint?: string | undefined;
    /**
     * Instantiates a new plannerBucketTaskBoardTaskFormat and sets the default values.
     * @param plannerBucketTaskBoardTaskFormatParameterValue 
     */
    public constructor(plannerBucketTaskBoardTaskFormatParameterValue?: PlannerBucketTaskBoardTaskFormat | undefined) {
        super(plannerBucketTaskBoardTaskFormatParameterValue);
        this.additionalData = plannerBucketTaskBoardTaskFormatParameterValue?.additionalData ? plannerBucketTaskBoardTaskFormatParameterValue?.additionalData! : {};
        this.orderHint = plannerBucketTaskBoardTaskFormatParameterValue?.orderHint;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "orderHint": n => { this.orderHint = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.orderHint){
            writer.writeStringValue("orderHint", this.orderHint);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
