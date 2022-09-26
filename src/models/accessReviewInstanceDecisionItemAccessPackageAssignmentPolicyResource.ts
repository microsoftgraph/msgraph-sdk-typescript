import {AccessReviewInstanceDecisionItemResource} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AccessReviewInstanceDecisionItemAccessPackageAssignmentPolicyResource extends AccessReviewInstanceDecisionItemResource implements Parsable {
    /** Display name of the access package to which access has been granted. */
    private _accessPackageDisplayName?: string | undefined;
    /** Identifier of the access package to which access has been granted. */
    private _accessPackageId?: string | undefined;
    /**
     * Gets the accessPackageDisplayName property value. Display name of the access package to which access has been granted.
     * @returns a string
     */
    public get accessPackageDisplayName() {
        return this._accessPackageDisplayName;
    };
    /**
     * Sets the accessPackageDisplayName property value. Display name of the access package to which access has been granted.
     * @param value Value to set for the accessPackageDisplayName property.
     */
    public set accessPackageDisplayName(value: string | undefined) {
        this._accessPackageDisplayName = value;
    };
    /**
     * Gets the accessPackageId property value. Identifier of the access package to which access has been granted.
     * @returns a string
     */
    public get accessPackageId() {
        return this._accessPackageId;
    };
    /**
     * Sets the accessPackageId property value. Identifier of the access package to which access has been granted.
     * @param value Value to set for the accessPackageId property.
     */
    public set accessPackageId(value: string | undefined) {
        this._accessPackageId = value;
    };
    /**
     * Instantiates a new AccessReviewInstanceDecisionItemAccessPackageAssignmentPolicyResource and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.accessReviewInstanceDecisionItemAccessPackageAssignmentPolicyResource";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "accessPackageDisplayName": n => { this.accessPackageDisplayName = n.getStringValue(); },
            "accessPackageId": n => { this.accessPackageId = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("accessPackageDisplayName", this.accessPackageDisplayName);
        writer.writeStringValue("accessPackageId", this.accessPackageId);
    };
}
