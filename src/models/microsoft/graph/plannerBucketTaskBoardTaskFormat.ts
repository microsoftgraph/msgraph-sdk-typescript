import {Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PlannerBucketTaskBoardTaskFormat extends Entity implements Parsable {
    /** Hint used to order tasks in the Bucket view of the Task Board. The format is defined as outlined here.  */
    private _orderHint?: string | undefined;
    /**
     * Instantiates a new plannerBucketTaskBoardTaskFormat and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "orderHint": (o, n) => { (o as unknown as PlannerBucketTaskBoardTaskFormat).orderHint = n.getStringValue(); },
        };
    };
    /**
     * Gets the orderHint property value. Hint used to order tasks in the Bucket view of the Task Board. The format is defined as outlined here.
     * @returns a string
     */
    public get orderHint() {
        return this._orderHint;
    };
    /**
     * Sets the orderHint property value. Hint used to order tasks in the Bucket view of the Task Board. The format is defined as outlined here.
     * @param value Value to set for the orderHint property.
     */
    public set orderHint(value: string | undefined) {
        this._orderHint = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("orderHint", this.orderHint);
    };
}
