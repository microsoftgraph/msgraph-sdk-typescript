import type {GetPolicyNonComplianceMetadataPostRequestBody} from './getPolicyNonComplianceMetadataPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetPolicyNonComplianceMetadataPostRequestBody(getPolicyNonComplianceMetadataPostRequestBody: GetPolicyNonComplianceMetadataPostRequestBody | undefined = {} as GetPolicyNonComplianceMetadataPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "filter": n => { getPolicyNonComplianceMetadataPostRequestBody.filter = n.getStringValue(); },
        "groupBy": n => { getPolicyNonComplianceMetadataPostRequestBody.groupBy = n.getCollectionOfPrimitiveValues<string>(); },
        "name": n => { getPolicyNonComplianceMetadataPostRequestBody.name = n.getStringValue(); },
        "orderBy": n => { getPolicyNonComplianceMetadataPostRequestBody.orderBy = n.getCollectionOfPrimitiveValues<string>(); },
        "search": n => { getPolicyNonComplianceMetadataPostRequestBody.search = n.getStringValue(); },
        "select": n => { getPolicyNonComplianceMetadataPostRequestBody.select = n.getCollectionOfPrimitiveValues<string>(); },
        "sessionId": n => { getPolicyNonComplianceMetadataPostRequestBody.sessionId = n.getStringValue(); },
        "skip": n => { getPolicyNonComplianceMetadataPostRequestBody.skip = n.getNumberValue(); },
        "top": n => { getPolicyNonComplianceMetadataPostRequestBody.top = n.getNumberValue(); },
    }
}
