import {createAccessReviewScopeFromDiscriminatorValue} from './createAccessReviewScopeFromDiscriminatorValue';
import {AccessReviewScope} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PrincipalResourceMembershipsScope extends AccessReviewScope implements Parsable {
    /** Defines the scopes of the principals whose access to resources are reviewed in the access review. */
    private _principalScopes?: AccessReviewScope[] | undefined;
    /** Defines the scopes of the resources for which access is reviewed. */
    private _resourceScopes?: AccessReviewScope[] | undefined;
    /**
     * Instantiates a new PrincipalResourceMembershipsScope and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.principalResourceMembershipsScope";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "principalScopes": n => { this.principalScopes = n.getCollectionOfObjectValues<AccessReviewScope>(createAccessReviewScopeFromDiscriminatorValue); },
            "resourceScopes": n => { this.resourceScopes = n.getCollectionOfObjectValues<AccessReviewScope>(createAccessReviewScopeFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the principalScopes property value. Defines the scopes of the principals whose access to resources are reviewed in the access review.
     * @returns a accessReviewScope
     */
    public get principalScopes() {
        return this._principalScopes;
    };
    /**
     * Sets the principalScopes property value. Defines the scopes of the principals whose access to resources are reviewed in the access review.
     * @param value Value to set for the principalScopes property.
     */
    public set principalScopes(value: AccessReviewScope[] | undefined) {
        this._principalScopes = value;
    };
    /**
     * Gets the resourceScopes property value. Defines the scopes of the resources for which access is reviewed.
     * @returns a accessReviewScope
     */
    public get resourceScopes() {
        return this._resourceScopes;
    };
    /**
     * Sets the resourceScopes property value. Defines the scopes of the resources for which access is reviewed.
     * @param value Value to set for the resourceScopes property.
     */
    public set resourceScopes(value: AccessReviewScope[] | undefined) {
        this._resourceScopes = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<AccessReviewScope>("principalScopes", this.principalScopes);
        writer.writeCollectionOfObjectValues<AccessReviewScope>("resourceScopes", this.resourceScopes);
    };
}
