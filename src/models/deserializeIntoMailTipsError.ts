import {MailTipsError} from './mailTipsError';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMailTipsError(mailTipsError: MailTipsError | undefined = {} as MailTipsError) : Record<string, (node: ParseNode) => void> {
    return {
        "code": n => { mailTipsError.code = n.getStringValue(); },
        "message": n => { mailTipsError.message = n.getStringValue(); },
        "@odata.type": n => { mailTipsError.odataType = n.getStringValue(); },
    }
}
