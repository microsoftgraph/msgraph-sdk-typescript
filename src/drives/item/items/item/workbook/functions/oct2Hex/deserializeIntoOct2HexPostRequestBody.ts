import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {Oct2HexPostRequestBody} from './oct2HexPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOct2HexPostRequestBody(oct2HexPostRequestBody: Oct2HexPostRequestBody | undefined = {} as Oct2HexPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "number": n => { oct2HexPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "places": n => { oct2HexPostRequestBody.places = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
