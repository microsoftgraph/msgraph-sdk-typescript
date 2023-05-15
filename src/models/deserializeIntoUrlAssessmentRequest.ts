import {deserializeIntoThreatAssessmentRequest} from './deserializeIntoThreatAssessmentRequest';
import {UrlAssessmentRequest} from './urlAssessmentRequest';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUrlAssessmentRequest(urlAssessmentRequest: UrlAssessmentRequest | undefined = {} as UrlAssessmentRequest) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoThreatAssessmentRequest(urlAssessmentRequest),
        "url": n => { urlAssessmentRequest.url = n.getStringValue(); },
    }
}
