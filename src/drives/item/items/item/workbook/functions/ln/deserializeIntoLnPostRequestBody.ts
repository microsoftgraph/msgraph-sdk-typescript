import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import type {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import type {LnPostRequestBody} from './lnPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoLnPostRequestBody(lnPostRequestBody: LnPostRequestBody | undefined = {} as LnPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { lnPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
