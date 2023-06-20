import {AccessReviewQueryScope} from './accessReviewQueryScope';
import {serializeAccessReviewScope} from './serializeAccessReviewScope';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessReviewQueryScope(accessReviewQueryScope: AccessReviewQueryScope | undefined = {} as AccessReviewQueryScope, writer: SerializationWriter) : void {
        serializeAccessReviewScope(writer, accessReviewQueryScope)
        writer.writeStringValue("query", accessReviewQueryScope.query);
        writer.writeStringValue("queryRoot", accessReviewQueryScope.queryRoot);
        writer.writeStringValue("queryType", accessReviewQueryScope.queryType);
}
