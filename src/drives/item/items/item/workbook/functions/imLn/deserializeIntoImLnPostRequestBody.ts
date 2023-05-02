import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {ImLnPostRequestBody} from './imLnPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoImLnPostRequestBody(imLnPostRequestBody: ImLnPostRequestBody | undefined = {} as ImLnPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "inumber": n => { imLnPostRequestBody.inumber = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
