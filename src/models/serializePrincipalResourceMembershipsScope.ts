import type {AccessReviewScope} from './accessReviewScope';
import type {PrincipalResourceMembershipsScope} from './principalResourceMembershipsScope';
import {serializeAccessReviewScope} from './serializeAccessReviewScope';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePrincipalResourceMembershipsScope(writer: SerializationWriter, principalResourceMembershipsScope: PrincipalResourceMembershipsScope | undefined = {} as PrincipalResourceMembershipsScope) : void {
        serializeAccessReviewScope(writer, principalResourceMembershipsScope)
        writer.writeCollectionOfObjectValues<AccessReviewScope>("principalScopes", principalResourceMembershipsScope.principalScopes, serializeAccessReviewScope);
        writer.writeCollectionOfObjectValues<AccessReviewScope>("resourceScopes", principalResourceMembershipsScope.resourceScopes, serializeAccessReviewScope);
}
