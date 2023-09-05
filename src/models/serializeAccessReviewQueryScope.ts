import { type AccessReviewQueryScope } from './accessReviewQueryScope';
import { serializeAccessReviewScope } from './serializeAccessReviewScope';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAccessReviewQueryScope(writer: SerializationWriter, accessReviewQueryScope: AccessReviewQueryScope | undefined = {} as AccessReviewQueryScope) : void {
        serializeAccessReviewScope(writer, accessReviewQueryScope)
        writer.writeStringValue("query", accessReviewQueryScope.query);
        writer.writeStringValue("queryRoot", accessReviewQueryScope.queryRoot);
        writer.writeStringValue("queryType", accessReviewQueryScope.queryType);
}
