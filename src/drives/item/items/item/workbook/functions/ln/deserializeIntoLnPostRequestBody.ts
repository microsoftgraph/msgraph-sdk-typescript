import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {LnPostRequestBody} from './lnPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoLnPostRequestBody(lnPostRequestBody: LnPostRequestBody | undefined = {} as LnPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { lnPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
