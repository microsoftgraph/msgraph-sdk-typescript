import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {ImRealPostRequestBody} from './imRealPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoImRealPostRequestBody(imRealPostRequestBody: ImRealPostRequestBody | undefined = {} as ImRealPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "inumber": n => { imRealPostRequestBody.inumber = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
