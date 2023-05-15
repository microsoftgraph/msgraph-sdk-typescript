import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {TanPostRequestBody} from './tanPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTanPostRequestBody(tanPostRequestBody: TanPostRequestBody | undefined = {} as TanPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { tanPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
