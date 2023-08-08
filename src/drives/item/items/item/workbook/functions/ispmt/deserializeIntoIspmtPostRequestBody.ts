import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {IspmtPostRequestBody} from './ispmtPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIspmtPostRequestBody(ispmtPostRequestBody: IspmtPostRequestBody | undefined = {} as IspmtPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "nper": n => { ispmtPostRequestBody.nper = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "per": n => { ispmtPostRequestBody.per = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "pv": n => { ispmtPostRequestBody.pv = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "rate": n => { ispmtPostRequestBody.rate = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
