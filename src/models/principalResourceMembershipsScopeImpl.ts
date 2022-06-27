import {AccessReviewScope} from './accessReviewScope';
import {createAccessReviewScopeFromDiscriminatorValue} from './createAccessReviewScopeFromDiscriminatorValue';
import {AccessReviewScopeImpl} from './index';
import {PrincipalResourceMembershipsScope} from './principalResourceMembershipsScope';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PrincipalResourceMembershipsScopeImpl extends AccessReviewScopeImpl implements PrincipalResourceMembershipsScope {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Defines the scopes of the principals whose access to resources are reviewed in the access review. */
    public principalScopes?: AccessReviewScope[] | undefined;
    /** Defines the scopes of the resources for which access is reviewed. */
    public resourceScopes?: AccessReviewScope[] | undefined;
    /**
     * Instantiates a new PrincipalResourceMembershipsScope and sets the default values.
     * @param principalResourceMembershipsScopeParameterValue 
     */
    public constructor(principalResourceMembershipsScopeParameterValue?: PrincipalResourceMembershipsScope | undefined) {
        super(principalResourceMembershipsScopeParameterValue);
        this.additionalData = principalResourceMembershipsScopeParameterValue?.additionalData ? principalResourceMembershipsScopeParameterValue?.additionalData! : {};
        const principalScopesArrValue: AccessReviewScopeImpl[] = []; principalResourceMembershipsScopeParameterValue.principalScopes?.forEach(element => {principalScopesArrValue.push(element instanceof AccessReviewScopeImpl? element : new AccessReviewScopeImpl(element));});
        this.principalScopes = principalScopesArrValue;
        const resourceScopesArrValue: AccessReviewScopeImpl[] = []; principalResourceMembershipsScopeParameterValue.resourceScopes?.forEach(element => {resourceScopesArrValue.push(element instanceof AccessReviewScopeImpl? element : new AccessReviewScopeImpl(element));});
        this.resourceScopes = resourceScopesArrValue;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "principalScopes": n => { this.principalScopes = n.getCollectionOfObjectValues<AccessReviewScopeImpl>(createAccessReviewScopeFromDiscriminatorValue); },
            "resourceScopes": n => { this.resourceScopes = n.getCollectionOfObjectValues<AccessReviewScopeImpl>(createAccessReviewScopeFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.principalScopes && this.principalScopes.length != 0){        const principalScopesArrValue: AccessReviewScopeImpl[] = []; this.principalScopes?.forEach(element => {principalScopesArrValue.push(element instanceof AccessReviewScopeImpl? element : new AccessReviewScopeImpl(element));});
            writer.writeCollectionOfObjectValues<AccessReviewScopeImpl>("principalScopes", principalScopesArrValue);
        }
        if(this.resourceScopes && this.resourceScopes.length != 0){        const resourceScopesArrValue: AccessReviewScopeImpl[] = []; this.resourceScopes?.forEach(element => {resourceScopesArrValue.push(element instanceof AccessReviewScopeImpl? element : new AccessReviewScopeImpl(element));});
            writer.writeCollectionOfObjectValues<AccessReviewScopeImpl>("resourceScopes", resourceScopesArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
