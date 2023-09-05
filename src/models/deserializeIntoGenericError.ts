import { type GenericError } from './genericError';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoGenericError(genericError: GenericError | undefined = {} as GenericError) : Record<string, (node: ParseNode) => void> {
    return {
        "code": n => { genericError.code = n.getStringValue(); },
        "message": n => { genericError.message = n.getStringValue(); },
        "@odata.type": n => { genericError.odataType = n.getStringValue(); },
    }
}
