import { type ResponseStatus } from './responseStatus';
import { ResponseType } from './responseType';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoResponseStatus(responseStatus: ResponseStatus | undefined = {} as ResponseStatus) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { responseStatus.odataType = n.getStringValue(); },
        "response": n => { responseStatus.response = n.getEnumValue<ResponseType>(ResponseType); },
        "time": n => { responseStatus.time = n.getDateValue(); },
    }
}
