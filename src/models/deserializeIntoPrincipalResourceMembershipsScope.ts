import { type AccessReviewScope } from './accessReviewScope';
import { createAccessReviewScopeFromDiscriminatorValue } from './createAccessReviewScopeFromDiscriminatorValue';
import { deserializeIntoAccessReviewScope } from './deserializeIntoAccessReviewScope';
import { type PrincipalResourceMembershipsScope } from './principalResourceMembershipsScope';
import { serializeAccessReviewScope } from './serializeAccessReviewScope';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoPrincipalResourceMembershipsScope(principalResourceMembershipsScope: PrincipalResourceMembershipsScope | undefined = {} as PrincipalResourceMembershipsScope) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAccessReviewScope(principalResourceMembershipsScope),
        "principalScopes": n => { principalResourceMembershipsScope.principalScopes = n.getCollectionOfObjectValues<AccessReviewScope>(createAccessReviewScopeFromDiscriminatorValue); },
        "resourceScopes": n => { principalResourceMembershipsScope.resourceScopes = n.getCollectionOfObjectValues<AccessReviewScope>(createAccessReviewScopeFromDiscriminatorValue); },
    }
}
