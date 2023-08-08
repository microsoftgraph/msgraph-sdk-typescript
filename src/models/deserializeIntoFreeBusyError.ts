import type {FreeBusyError} from './freeBusyError';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoFreeBusyError(freeBusyError: FreeBusyError | undefined = {} as FreeBusyError) : Record<string, (node: ParseNode) => void> {
    return {
        "message": n => { freeBusyError.message = n.getStringValue(); },
        "@odata.type": n => { freeBusyError.odataType = n.getStringValue(); },
        "responseCode": n => { freeBusyError.responseCode = n.getStringValue(); },
    }
}
