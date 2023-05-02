import {createJsonFromDiscriminatorValue} from '../../../../../../../models/createJsonFromDiscriminatorValue';
import {Json} from '../../../../../../../models/json';
import {serializeJson} from '../../../../../../../models/serializeJson';
import {RriPostRequestBody} from './rriPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRriPostRequestBody(rriPostRequestBody: RriPostRequestBody | undefined = {} as RriPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "fv": n => { rriPostRequestBody.fv = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "nper": n => { rriPostRequestBody.nper = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "pv": n => { rriPostRequestBody.pv = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
