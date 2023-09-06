import { type WipePostRequestBody } from './wipePostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoWipePostRequestBody(wipePostRequestBody: WipePostRequestBody | undefined = {} as WipePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "keepEnrollmentData": n => { wipePostRequestBody.keepEnrollmentData = n.getBooleanValue(); },
        "keepUserData": n => { wipePostRequestBody.keepUserData = n.getBooleanValue(); },
        "macOsUnlockCode": n => { wipePostRequestBody.macOsUnlockCode = n.getStringValue(); },
        "persistEsimDataPlan": n => { wipePostRequestBody.persistEsimDataPlan = n.getBooleanValue(); },
    }
}
