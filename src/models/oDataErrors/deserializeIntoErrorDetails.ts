import {ErrorDetails} from './errorDetails';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoErrorDetails(errorDetails: ErrorDetails | undefined = {} as ErrorDetails) : Record<string, (node: ParseNode) => void> {
    return {
        "code": n => { errorDetails.code = n.getStringValue(); },
        "message": n => { errorDetails.message = n.getStringValue(); },
        "target": n => { errorDetails.target = n.getStringValue(); },
    }
}
