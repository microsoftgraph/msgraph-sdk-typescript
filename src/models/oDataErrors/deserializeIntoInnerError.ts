import {InnerError} from './innerError';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoInnerError(innerError: InnerError | undefined = {} as InnerError) : Record<string, (node: ParseNode) => void> {
    return {
        "client-request-id": n => { innerError.clientRequestId = n.getStringValue(); },
        "date": n => { innerError.date = n.getDateValue(); },
        "@odata.type": n => { innerError.odataType = n.getStringValue(); },
        "request-id": n => { innerError.requestId = n.getStringValue(); },
    }
}
