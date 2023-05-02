import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {Z_TestPostRequestBody} from './z_TestPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoZ_TestPostRequestBody(z_TestPostRequestBody: Z_TestPostRequestBody | undefined = {} as Z_TestPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "array": n => { z_TestPostRequestBody.array = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "sigma": n => { z_TestPostRequestBody.sigma = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "x": n => { z_TestPostRequestBody.x = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
