import {AccessReviewReviewerScope} from './accessReviewReviewerScope';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessReviewReviewerScope(accessReviewReviewerScope: AccessReviewReviewerScope | undefined = {} as AccessReviewReviewerScope, writer: SerializationWriter) : void {
        writer.writeStringValue("@odata.type", accessReviewReviewerScope.odataType);
        writer.writeStringValue("query", accessReviewReviewerScope.query);
        writer.writeStringValue("queryRoot", accessReviewReviewerScope.queryRoot);
        writer.writeStringValue("queryType", accessReviewReviewerScope.queryType);
        writer.writeAdditionalData(accessReviewReviewerScope.additionalData);
}
