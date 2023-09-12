import { type ConvertIdResult } from './convertIdResult';
import { createGenericErrorFromDiscriminatorValue } from './createGenericErrorFromDiscriminatorValue';
import { type GenericError } from './genericError';
import { serializeGenericError } from './serializeGenericError';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoConvertIdResult(convertIdResult: ConvertIdResult | undefined = {} as ConvertIdResult) : Record<string, (node: ParseNode) => void> {
    return {
        "errorDetails": n => { convertIdResult.errorDetails = n.getObjectValue<GenericError>(createGenericErrorFromDiscriminatorValue); },
        "@odata.type": n => { convertIdResult.odataType = n.getStringValue(); },
        "sourceId": n => { convertIdResult.sourceId = n.getStringValue(); },
        "targetId": n => { convertIdResult.targetId = n.getStringValue(); },
    }
}
