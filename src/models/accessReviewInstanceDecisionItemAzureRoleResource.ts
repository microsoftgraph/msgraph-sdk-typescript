import {createAccessReviewInstanceDecisionItemResourceFromDiscriminatorValue} from './createAccessReviewInstanceDecisionItemResourceFromDiscriminatorValue';
import {AccessReviewInstanceDecisionItemResource} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AccessReviewInstanceDecisionItemAzureRoleResource extends AccessReviewInstanceDecisionItemResource implements Parsable {
    /** Details of the scope this role is associated with. */
    private _scope?: AccessReviewInstanceDecisionItemResource | undefined;
    /**
     * Instantiates a new AccessReviewInstanceDecisionItemAzureRoleResource and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.accessReviewInstanceDecisionItemAzureRoleResource";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "scope": n => { this.scope = n.getObjectValue<AccessReviewInstanceDecisionItemResource>(createAccessReviewInstanceDecisionItemResourceFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the scope property value. Details of the scope this role is associated with.
     * @returns a accessReviewInstanceDecisionItemResource
     */
    public get scope() {
        return this._scope;
    };
    /**
     * Sets the scope property value. Details of the scope this role is associated with.
     * @param value Value to set for the scope property.
     */
    public set scope(value: AccessReviewInstanceDecisionItemResource | undefined) {
        this._scope = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<AccessReviewInstanceDecisionItemResource>("scope", this.scope);
    };
}
